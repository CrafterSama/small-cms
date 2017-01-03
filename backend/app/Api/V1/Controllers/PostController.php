<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

use Dingo\Api\Routing\Helpers;
use JWTAuth;
use App\Post;


class PostController extends Controller
{
	use Helpers;

    public function index() {
        //$currentUser = JWTAuth::parseToken()->authenticate();
        $posts = \App\Post::orderBy('created_at', 'DESC')->get()->toArray();
	    return $posts;
	}

	public function show($id)
    {
        $post = \App\Post::find($id);
        if(!$post)
            throw new NotFoundHttpException;
        return $post;
    }

    public function store(Request $request)
    {
        $post = new Post;
        $post->title = $request->get('title');
        $post->content = $request->get('content');
        $post->media = $request->get('media');
        $post->slug = str_slug($request->get('title'));
        if($this->currentUser()->posts()->save($post))
            // return $this->response->created();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_create_post', 500);
    }

    public function update(Request $request, $id)
    {
        $post = $this->currentUser()->posts()->find($id);
        if(!$post)
            throw new NotFoundHttpException;
        $post->fill($request->all());
        if($post->save())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_update_post', 500);
    }

    public function destroy($id)
    {
        $post = $this->currentUser()->posts()->find($id);
        if(!$post)
            throw new NotFoundHttpException;
        if($post->delete())
            // return $this->response->noContent();
            return response()->json([
                'status' => 'ok'
            ], 201);
        else
            return $this->response->error('could_not_delete_post', 500);
    }

    private function currentUser() {
        return JWTAuth::parseToken()->authenticate();
    }
}
