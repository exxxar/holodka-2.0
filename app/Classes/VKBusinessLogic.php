<?php

namespace App\Classes;

use App\Models\User;
use Carbon\Carbon;

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use VK\Client\Enums\VKLanguage;
use VK\Client\VKApiClient;
use VK\Exceptions\Api\VKApiBlockedException;
use VK\Exceptions\Api\VKApiLikesReactionCanNotBeAppliedException;
use VK\Exceptions\Api\VKApiParamGroupIdException;
use VK\Exceptions\Api\VKApiWallAccessRepliesException;
use VK\Exceptions\VKApiException;
use VK\Exceptions\VKClientException;
use VK\Exceptions\VKOAuthException;
use VK\OAuth\Scopes\VKOAuthUserScope;
use VK\OAuth\VKOAuth;
use VK\OAuth\VKOAuthDisplay;
use VK\OAuth\VKOAuthResponseType;
use function Symfony\Component\Translation\t;

class VKBusinessLogic
{
    protected $code;
    protected $accessToken;
    protected $ownerId;

    public function __construct($code = null)
    {
        $this->code = $code;
        if (!is_null($code))
            $this->getAccessToken();
    }

    public function setOwner($id): void
    {
        $this->ownerId = $id;
    }

    public function setAccessToken($token): void
    {
        $this->accessToken = $token;
    }

    public function setCode($code): void
    {
        $this->code = $code;
        $this->getAccessToken();
    }

    public function getAuthLink($state = null): string
    {
        $oauth = new VKOAuth();
        $client_id = env("VK_CLIENT_ID");
        $redirect_uri = env("VK_REDIRECT_URI");
        $display = VKOAuthDisplay::PAGE;
        $scope = array(VKOAuthUserScope::WALL, VKOAuthUserScope::GROUPS, VKOAuthUserScope::PAGES, VKOAuthUserScope::STATS);
        $state = $state ?? Str::uuid();

        return $oauth->getAuthorizeUrl(
            VKOAuthResponseType::CODE,
            $client_id,
            $redirect_uri,
            $display,
            $scope,
            $state
        );
    }

    /**
     * @throws VKOAuthException
     * @throws HttpException
     * @throws VKClientException
     */
    public function getAccessToken(): string
    {
        $oauth = new VKOAuth();
        $client_id = env("VK_CLIENT_ID");
        $client_secret = env("VK_CLIENT_SECRET");
        $redirect_uri = env("VK_REDIRECT_URI");

        if (is_null($this->code)) {
            throw new HttpException("Код не указан", 400);
        }


        $response = $oauth->getAccessToken($client_id, $client_secret, $redirect_uri, $this->code);
        $this->accessToken = $response['access_token'];

        $user = User::query()->find(Auth::user()->id);

        $user->vk_access_token = $response["access_token"] ?? null;
        if (!is_null($response["expires_in"] ?? null))
            $user->vk_token_expired_at = Carbon::now()->addSeconds($response["expires_in"] ?? 0);
        $user->save();

        return $this->accessToken;
    }

    /**
     * @throws VKOAuthException
     * @throws VKApiParamGroupIdException
     * @throws VKApiException
     * @throws HttpException
     * @throws VKClientException
     */
    public function getGroupMembers($groupId, $offset = 0, $count = 100, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->groups()
            ->getMembers($this->accessToken, [
                "group_id" => $groupId,
                "offset" => $offset,
                "count" => $count,
                "fields" => "city,home_town,deactivated,common_count,bdate,can_write_private_message,is_closed,last_seen,photo_max_orig,universities,can_see_all_posts"
            ]);

    }

    /**
     * @throws VKOAuthException
     * @throws VKApiBlockedException
     * @throws VKApiException
     * @throws HttpException
     * @throws VKClientException
     */
    public function getWall($domain, $offset = 0, $count = 100, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->wall()
            ->get($this->accessToken, [
                "domain" => $domain,
                "offset" => $offset,
                "count" => $count,
            ]);

    }

    /**
     * @throws VKOAuthException
     * @throws VKApiBlockedException
     * @throws VKApiException
     * @throws HttpException
     * @throws VKClientException
     */
    public function post($message, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->wall()
            ->post($this->accessToken, [
                "message" => $message,
                "mute_notifications" => 1,
            ]);

    }

    /**
     * @throws VKOAuthException
     * @throws VKApiLikesReactionCanNotBeAppliedException
     * @throws VKApiException
     * @throws HttpException
     * @throws VKClientException
     */
    public function getLikes($ownerId, $postId, $type = "post", $offset = 0, $count = 100, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->likes()
            ->getList($this->accessToken, [
                "type" => $type,
                "owner_id" => $ownerId,
                "item_id" => $postId,
                "skip_own" => false,
                "extended" => 0,
                "offset" => $offset,
                "count" => $count,
            ]);

    }

    /**
     * @throws VKApiException
     * @throws VKClientException
     * @throws VKApiWallAccessRepliesException
     */
    public function getComments($ownerId, $postId, $offset = 0, $count = 100, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->wall()
            ->getComments($this->accessToken, [
                "owner_id" => $ownerId,
                "post_id" => $postId,
                "need_likes" => 1,
                "offset" => $offset,
                "count" => $count,
            ]);

    }

    public function getIdByName($name, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->utils()
            ->resolveScreenName($this->accessToken, [
                "screen_name" => $name,
            ]);

    }

    public function getUsers(string $ids, $version = '5.130'): mixed
    {

        $vk = new VKApiClient($version, VKLanguage::RUSSIAN);

        return $vk->users()
            ->get($this->accessToken, [
                "user_ids" => $ids,

                "fields" => "city,home_town,deactivated,common_count,bdate,can_write_private_message,is_closed,last_seen,photo_max_orig,universities,can_see_all_posts"

            ]);


    }

    protected function preparePostIds($items)
    {
        $ids = [];
        foreach ($items as $item) {
            $item = (object)$item;
            $ids[] = $item->id;

        }
        return $ids;
    }

    protected function prepareUsers($items, $group)
    {

        $users = [];
        foreach ($items as $item) {
            $item = (object)$item;

            $age = 0;
            if (!is_null($item->bdate ?? null)) {
                if (strlen($item->bdate) > 5)
                    $age = Carbon::now()->year - Carbon::parse($item->bdate)->year;
            }


            $tmp = [
                "name" => "$item->first_name $item->last_name",
                "vk_user_link" => "https://vk.com/id$item->id",
                "vk_id" => "$item->id",
                "city" => isset($item->city) ? $item->city["title"] : null,
                "birthday" => $item->bdate ?? null,
                "age" => $age,
                "vk_group_link" => "https://vk.com/$group",
                "from" => "парсер",
                "common_count" => $item->common_count ?? 0,
                "home_town" => $item->home_town ?? '-',
                "last_seen" => $item->last_seen["time"] ?? null,
                "is_profile_closed" => !($item->is_closed ?? true),
                "is_messages_closed" => !($item->can_write_private_message ?? true),
                "deactivated" => $item->deactivated ?? null,
                "owner_id" =>  $this->ownerId,
            ];

            $person = \App\Models\Person::query()
                ->where("vk_id", $item->id)
                ->first();

            if (is_null($person)) {
                \App\Models\Person::query()
                    ->create($tmp);

                $users[] = (object)$tmp;
            } /*else
                \App\Models\Person::query()
                    ->update($tmp);*/

           // $users[] = (object)$tmp;
        }

        return $users;
    }

    public function handler($group, $maxPostCount = 10)
    {
    /*    $state = json_decode(base64_decode($state));
        $group = $state->group ?? "profcom_dongu";


        $maxPostCount = $state->max_post_count ?? 100;*/

        $groupId = $this->getIdByName($group)["object_id"] ?? null;

        //dd($groupId);

        $result = $this->getWall($group, 0, $maxPostCount);


        //id
        //dd($result);


        $count = $result["count"];
        $postIds = $this->preparePostIds($result["items"]);



        /*  for ($offset = 100; $offset < min($count, $maxPostCount); $offset += 100) {
              $time = random_int(1, 3);
              sleep($time);

              $result = $vk->getWall($group, $offset);
              $postIds = [...$postIds, ...preparePostIds($result["items"])];
          }*/


        $userIds = [];
        $maxLikes = 100;
        foreach ($postIds as $postId) {
            $time = random_int(1, 3);
            sleep($time);

            $result = $this->getLikes("-" . $groupId, $postId, "post", 0, $maxLikes);

            $diff = array_diff(array_values($result["items"]), $userIds);

            $userIds = [...$userIds, ...$diff];

            $likesCount = $result["count"];
            /*
                    if ($likesCount > 100)
                        for ($offset = 100; $offset < min($count, $maxLikes); $offset += 100) {
                            $time = random_int(1, 3);
                            sleep($time);

                            $result  = $vk->getLikes("-" . $groupId, $postId, "post", $offset, $maxLikes);

                            $diff = array_diff($userIds, array_values($result["items"]));
                            $userIds = [...$userIds, ...$diff];
                        }*/
        }


        $users = [];
        if (count($userIds) > 200) {

            for ($offset = 0; $offset < count($userIds); $offset += 200) {
                $copyUserIds = array_slice($userIds, $offset, 200);
                $users = [...$users, ...$this->getUsers(implode(",", $copyUserIds))];
            }

        } else
            $users = $this->getUsers(implode(",", $userIds));

        return count($this->prepareUsers($users, $group));

    }
}
