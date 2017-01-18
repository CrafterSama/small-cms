<?php

namespace App\Api\V1\Controllers;

use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Tymon\JWTAuth\JWTAuth;
use App\Http\Controllers\Controller;
use App\Api\V1\Requests\LoginRequest;
use Tymon\JWTAuth\Exceptions\JWTException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactForm;

class MailController extends Controller
{
	public function SendContactForm (Request $request)
    {
        //guarda el valor de los campos enviados desde el form en un array
        $data = $request->all();

        Mail::to(['Admin' => 'info@softars.com'])->cc([$data['name'] => $data['email']])->send(new ContactForm($data));

        return response()->json([
            'status' => 'ok',
            'message' => 'Mensaje Enviado, gracias por contactarnos'
        ], 201);
	}
}
