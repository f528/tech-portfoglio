<?php
 
namespace App\Http\Controllers;
 
use App\Mail\ContactMail;
use App\Models\Profile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Validator;
 
class ContactController extends Controller
{
    public function send(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);
 
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors()
            ], 422);
        }
 
        try {
            $profile = Profile::first();
            $adminEmail = $profile ? $profile->email : config('mail.from.address');
 
            if (!$adminEmail) {
                return response()->json([
                    'success' => false,
                    'message' => 'Recipient email not configured.'
                ], 500);
            }
 
            Mail::to($adminEmail)->send(new ContactMail($request->all()));
 
            return response()->json([
                'success' => true,
                'message' => 'Transmission complete. Message received.'
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Transmission failed. Please try again later.',
                'debug' => config('app.debug') ? $e->getMessage() : null
            ], 500);
        }
    }
}
