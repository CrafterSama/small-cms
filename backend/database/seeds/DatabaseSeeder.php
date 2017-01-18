<?php

use App\Role;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Role::create(array('name' => 'Administrator'));
        Role::create(array('name' => 'Supervisor'));
        Role::create(array('name' => 'User'));
    }
}
