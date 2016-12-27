<?php

namespace App\Api\V1\Controllers;

use Config;
use App\User;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\LoginRequest;
use Symfony\Component\HttpKernel\Exception\HttpException;

class SignUpController extends Controller
{
    public function signUp(LoginRequest $request, JWTAuth $JWTAuth)
    {
        // $user = new User($request->all());

        $user = new User;
        //return $request;
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        $user->password = $request->get('password');

        if(\App\User::all()->count() == 0):
            $user->role_id = '1';
        else:
            $user->role_id = '3';
        endif;

        if(!$user->save()) {
            throw new HttpException(500);
        }

        if(!Config::get('boilerplate.sign_up.release_token')) {
            return response()->json([
                'status' => 'ok'
            ], 201);
        }

        $token = $JWTAuth->fromUser($user);
        return response()->json([
            'status' => 'ok',
            'token' => $token
        ], 201);
    }
}
