<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\User;

class UserController extends Controller
{
	use Helpers;

	public function index()	{
	    $currentUser = JWTAuth::parseToken()->authenticate();
	    return \App\User::orderBy('created_at', 'DESC')
	        ->get()
	        ->toArray();
	}

	public function show($id)
    {
        // $user = $this->currentUser()->users()->find($id);
        $users = $this->currentUser()->users()->find($id);
        if(!$users)
            throw new NotFoundHttpException;
        return $users;
    }

    public function update(Request $request, $id)
    {
        $user = $this->currentUser()->users()->find($id);
        if(!$user)
            throw new NotFoundHttpException;
        $user->fill($request->all());
        if($user->save())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_update_user', 500);
    }

    public function destroy($id)
    {
        $user = $this->currentUser()->users()->find($id);
        if(!$user)
            throw new NotFoundHttpException;
        if($user->delete())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_delete_user', 500);
    }

    private function currentUser() {
        return JWTAuth::parseToken()->authenticate();
    }
}
