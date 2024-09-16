<?php

namespace Tests\Feature\Http\Controllers;

use App\Models\Owner;
use App\Models\Person;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use JMac\Testing\Traits\AdditionalAssertions;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

/**
 * @see \App\Http\Controllers\PersonController
 */
final class PersonControllerTest extends TestCase
{
    use AdditionalAssertions, RefreshDatabase, WithFaker;

    #[Test]
    public function index_displays_view(): void
    {
        $people = Person::factory()->count(3)->create();

        $response = $this->get(route('people.index'));

        $response->assertOk();
        $response->assertViewIs('person.index');
        $response->assertViewHas('people');
    }


    #[Test]
    public function create_displays_view(): void
    {
        $response = $this->get(route('people.create'));

        $response->assertOk();
        $response->assertViewIs('person.create');
    }


    #[Test]
    public function store_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\PersonController::class,
            'store',
            \App\Http\Requests\PersonStoreRequest::class
        );
    }

    #[Test]
    public function store_saves_and_redirects(): void
    {
        $age = $this->faker->numberBetween(-10000, 10000);
        $is_profile_closed = $this->faker->boolean();
        $is_messages_closed = $this->faker->boolean();
        $deactivated = $this->faker->boolean();
        $owner = Owner::factory()->create();

        $response = $this->post(route('people.store'), [
            'age' => $age,
            'is_profile_closed' => $is_profile_closed,
            'is_messages_closed' => $is_messages_closed,
            'deactivated' => $deactivated,
            'owner_id' => $owner->id,
        ]);

        $people = Person::query()
            ->where('age', $age)
            ->where('is_profile_closed', $is_profile_closed)
            ->where('is_messages_closed', $is_messages_closed)
            ->where('deactivated', $deactivated)
            ->where('owner_id', $owner->id)
            ->get();
        $this->assertCount(1, $people);
        $person = $people->first();

        $response->assertRedirect(route('people.index'));
        $response->assertSessionHas('person.id', $person->id);
    }


    #[Test]
    public function show_displays_view(): void
    {
        $person = Person::factory()->create();

        $response = $this->get(route('people.show', $person));

        $response->assertOk();
        $response->assertViewIs('person.show');
        $response->assertViewHas('person');
    }


    #[Test]
    public function edit_displays_view(): void
    {
        $person = Person::factory()->create();

        $response = $this->get(route('people.edit', $person));

        $response->assertOk();
        $response->assertViewIs('person.edit');
        $response->assertViewHas('person');
    }


    #[Test]
    public function update_uses_form_request_validation(): void
    {
        $this->assertActionUsesFormRequest(
            \App\Http\Controllers\PersonController::class,
            'update',
            \App\Http\Requests\PersonUpdateRequest::class
        );
    }

    #[Test]
    public function update_redirects(): void
    {
        $person = Person::factory()->create();
        $age = $this->faker->numberBetween(-10000, 10000);
        $is_profile_closed = $this->faker->boolean();
        $is_messages_closed = $this->faker->boolean();
        $deactivated = $this->faker->boolean();
        $owner = Owner::factory()->create();

        $response = $this->put(route('people.update', $person), [
            'age' => $age,
            'is_profile_closed' => $is_profile_closed,
            'is_messages_closed' => $is_messages_closed,
            'deactivated' => $deactivated,
            'owner_id' => $owner->id,
        ]);

        $person->refresh();

        $response->assertRedirect(route('people.index'));
        $response->assertSessionHas('person.id', $person->id);

        $this->assertEquals($age, $person->age);
        $this->assertEquals($is_profile_closed, $person->is_profile_closed);
        $this->assertEquals($is_messages_closed, $person->is_messages_closed);
        $this->assertEquals($deactivated, $person->deactivated);
        $this->assertEquals($owner->id, $person->owner_id);
    }


    #[Test]
    public function destroy_deletes_and_redirects(): void
    {
        $person = Person::factory()->create();

        $response = $this->delete(route('people.destroy', $person));

        $response->assertRedirect(route('people.index'));

        $this->assertModelMissing($person);
    }
}
