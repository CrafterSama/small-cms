<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Page;

class PageController extends Controller
{
	use Helpers;

	public function index()	{
	    $currentUser = JWTAuth::parseToken()->authenticate();
	    return $currentUser
	        ->pages()
	        ->orderBy('created_at', 'DESC')
	        ->get()
	        ->toArray();
	}

	public function show($id)
    {
        $page = $this->currentUser()->pages()->find($id);
        if(!$page)
            throw new NotFoundHttpException;
        return $page;
    }

    public function store(Request $request)
    {
        $page = new Page;
        $page->name = $request->get('name');
        $page->content = $request->get('content');
        $page->media = $request->get('media');
        $page->slug = str_slug($request->get('name'));
        if($this->currentUser()->pages()->save($page))
            // return $this->response->created();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_create_page', 500);
    }

    public function update(Request $request, $id)
    {
        $page = $this->currentUser()->pages()->find($id);
        if(!$page)
            throw new NotFoundHttpException;
        $page->fill($request->all());
        if($page->save())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_update_page', 500);
    }

    public function destroy($id)
    {
        $page = $this->currentUser()->pages()->find($id);
        if(!$page)
            throw new NotFoundHttpException;
        if($page->delete())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_delete_page', 500);
    }

    private function currentUser() {
        return JWTAuth::parseToken()->authenticate();
    }

}
