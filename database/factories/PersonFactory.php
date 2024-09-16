<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;
use App\Models\Material;
use App\Models\Person;

class PersonFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Person::class;

    /**
     * Define the model's default state.
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->name(),
            'age' => $this->faker->numberBetween(-10000, 10000),
            'birthday' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'vk_group_link' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'vk_user_link' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'city' => $this->faker->city(),
            'from' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'common_count' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'home_town' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'last_seen' => $this->faker->regexify('[A-Za-z0-9]{255}'),
            'is_profile_closed' => $this->faker->boolean(),
            'is_messages_closed' => $this->faker->boolean(),
            'deactivated' => $this->faker->boolean(),
            'owner_id' => Material::factory(),
        ];
    }
}
