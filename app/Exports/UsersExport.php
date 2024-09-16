<?php

namespace App\Exports;

use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\FromView;
use Illuminate\Contracts\View\View;

class UsersExport implements FromView
{
    public $fields;
    public $users;

    public function __construct($fields = [], $users = [])
    {
        $this->users = $users;
        $this->fields = $fields;
    }

    public function view(): View
    {
        return view('exports.users', [
            'users' => $this->users,
            'fields'=>$this->fields
        ]);
    }
}
