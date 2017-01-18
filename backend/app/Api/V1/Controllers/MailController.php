<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\LoginRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;

class MailController extends Controller
{
	public function SendContactForm (Request $request)
    {
    //guarda el valor de los campos enviados desde el form en un array
    $data = $request->all();

    //dd($request->all());

    //se envia el array y la vista lo recibe en llaves individuales {{ $email }} , {{ $subject }}...
    \Mail::send('emails.contact', $data, function($message) use ($data)
    {
        //remitente
        $message->from($data['email'], $data['name']);

        //asunto
        $message->subject($data['subject']);

        //receptor
        $message->to('info@softars.com', 'Admin');

        //dd($message);

    });
        return response()->json([
            'status' => 'ok',
            'message' => 'Mensaje Enviado, gracias por contactarnos'
        ], 201);
	}
}
