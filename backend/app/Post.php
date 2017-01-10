<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
 	/**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $fillable = [
        'name', 'content', 'media', 'slug', 'updated_by', 'user_id'
 	];

 	public function users()
    {
        return $this->hasOne('App\User', 'id', 'user_id');
    }
}
