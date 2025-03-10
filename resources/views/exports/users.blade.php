<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Активные пользователи</title>
</head>
<body>

<p>Число собранных пользователей {{count($users)}}</p>
<table>
    <thead>
    <tr>
        @if(in_array("id", $fields))
        <th>#</th>
        @endif
        @if(in_array("name", $fields))
        <th style="width: 200px;">Ф.И.О.</th>
        @endif

        @if(in_array("vk_user_link", $fields))
        <th style="width: 200px;">Ссылка ВК</th>
        @endif
        @if(in_array("vk_group_link", $fields))
            <th style="width: 200px;">Группа вк</th>
        @endif
        @if(in_array("status", $fields))
            <th style="width: 200px;">Статус</th>
        @endif
        @if(in_array("age", $fields))
            <th>Возраст</th>
        @endif
        @if(in_array("city", $fields))
        <th>Город проживания</th>
        @endif
        @if(in_array("home_town", $fields))
        <th style="width: 200px;">Родной город</th>
        @endif
        @if(in_array("birthday", $fields))
        <th>День рождения</th>
        @endif
        @if(in_array("from", $fields))
        <th>От кого</th>
        @endif
        @if(in_array("last_seen", $fields))
        <th style="width: 200px;">Дата последнего онлайн</th>
        @endif
        @if(in_array("common_count", $fields))
        <th>Общих друзей</th>
        @endif
        @if(in_array("is_profile_closed", $fields))
        <th>Закрытый профиль</th>
        @endif
        @if(in_array("is_messages_closed", $fields))
        <th>Закрытый лс</th>
        @endif
        @if(in_array("deactivated", $fields))
        <th>Удалён\Заблокирован</th>
        @endif
    </tr>
    </thead>
    <tbody>

    @if(count($users)>0)
        @php
            $index = 1;
        @endphp

        @foreach($users as $user)

            @php
                $user = (object)$user;
            @endphp
            <tr>
                @if(in_array("id", $fields))
                    <td>{{ $index }}</td>
                @endif
                @if(in_array("name", $fields))
                    <td style="width: 200px;">{{ $user->name ?? '-' }}</td>
                @endif
                @if(in_array("vk_user_link", $fields))
                    <td style="width: 200px;">{{ $user->vk_user_link ?? '-' }}</td>
                @endif
                @if(in_array("vk_group_link", $fields))
                    <td style="width: 200px;">{{ $user->vk_group_link ?? '-' }}</td>
                @endif
                @if(in_array("status", $fields))
                    <td style="width: 200px;">
                        @switch($user->status)
                            @case(0)
                                <span>Только добавлен</span>
                                @break
                            @case(1)
                                <span>Взят в обработку</span>
                                @break
                            @case(2)
                                <span>Отказ</span>
                                @break
                            @case(3)
                                <span>Сомневается</span>
                                @break
                            @case(4)
                                <span>Успех</span>
                                @break
                            @default
                                <span>Неизвестный статус</span>
                        @endswitch
                    </td>
                @endif
                @if(in_array("age", $fields))
                    <td>{{ $user->age ?? '-' }}</td>
                @endif
                @if(in_array("city", $fields))
                    <td>{{ $user->city ?? '-' }}</td>
                @endif
                @if(in_array("home_town", $fields))
                    <td style="width: 200px;">{{ $user->home_town ?? '-' }}</td>
                @endif
                @if(in_array("birthday", $fields))
                    <td>{{ $user->birthday ?? '-' }}</td>
                @endif
                @if(in_array("from", $fields))
                    <td>{{ $user->from ?? '-' }}</td>
                @endif
                @if(in_array("last_seen", $fields))
                    <td style="width: 200px;">{{ !is_null($user->last_seen) ? \Carbon\Carbon::parse($user->last_seen)->format("Y-m-d H:i:s") : '-' }}</td>
                @endif
                @if(in_array("common_count", $fields))
                    <td>{{ $user->common_count ?? 0 }}</td>
                @endif
                @if(in_array("is_profile_closed", $fields))
                    <td>{{ ($user->is_profile_closed ?? false) ? "Закрытый" : "Открытый" }}</td>
                @endif
                @if(in_array("is_messages_closed", $fields))
                    <td>{{ ($user->is_messages_closed ?? false) ? "Закрыты" : "Открыты" }}</td>
                @endif
                @if(in_array("deactivated", $fields))
                    <td>{{ $user->deactivated ?? '-' }}</td>
                @endif
            </tr>

            @php
                $index++;
            @endphp
        @endforeach
    @endif
    </tbody>
</table>
</body>
</html>
