<?php

namespace App\Api\V1\Controllers;

use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\LoginRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class LoginController extends Controller
{
    public function login(LoginRequest $request, JWTAuth $JWTAuth)
    {
        /*if(!Config::get('boilerplate.login.validation_rules')) {*/

            $credentials = $request->only(['email', 'password']);

            try {
                $token = $JWTAuth->attempt($credentials);
                $currentUser = \Auth::user();

                if(!$token) {
                    throw new AccessDeniedHttpException();
                }

            } catch (JWTException $e) {
                throw new HttpException(500);
            }

            return response()
                ->json([
                    'status' => 'ok',
                    'user' => $currentUser,
                    'token' => $token
                ], 201);

        /*} else {

           return response()
                ->json([
                    'status' => 'error',
                    'message' => 'You have an error in your credentials'
                ], 403);

        }*/
    }
}
