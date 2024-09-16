<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PersonStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     */
    public function rules(): array
    {
        return [
            'name' => ['nullable', 'string', 'max:255'],
            'age' => ['required', 'integer'],
            'birthday' => ['nullable', 'string', 'max:255'],
            'vk_group_link' => ['nullable', 'string', 'max:255'],
            'vk_user_link' => ['nullable', 'string', 'max:255'],
            'city' => ['nullable', 'string', 'max:255'],
            'from' => ['nullable', 'string', 'max:255'],
            'common_count' => ['nullable', 'string', 'max:255'],
            'home_town' => ['nullable', 'string', 'max:255'],
            'last_seen' => ['nullable', 'string', 'max:255'],
            'is_profile_closed' => ['required'],
            'is_messages_closed' => ['required'],
            'deactivated' => ['required'],
            'owner_id' => ['required', 'integer', 'exists:owners,id'],
        ];
    }
}
