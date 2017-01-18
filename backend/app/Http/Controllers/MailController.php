<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class MailController extends Controller
{
	public function SendContactForm(Request $request)
    {
    	$data = $request->all();
		\Mail::send('emails.contact',
        ['data' => $data], function($mail) use($data){
	        $mail->from($data['email'], $data['name']);
            $mail->subject($data['subject']);
            $mail->to('info@softars.com', 'Admin');
	        $mail->message($data['message']);
	    });
        return response()->json([
            'status' => 'ok',
            'message' => 'Mensaje Enviado, gracias por contactarnos'
        ], 201);
	}    
}
