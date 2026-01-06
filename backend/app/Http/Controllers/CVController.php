<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\Skill;
use App\Models\Project;
use App\Models\Certification;
use App\Models\TimelineEvent;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Http\Request;

class CVController extends Controller
{
    public function download()
    {
        $profile = Profile::first();
        if (!$profile) {
            return response()->json(['error' => 'No profile found'], 404);
        }

        $skills = Skill::orderBy('level', 'desc')->get()->groupBy('category');
        $projects = Project::where('featured', true)->get();
        $certifications = Certification::orderBy('date', 'desc')->get();
        $timeline = TimelineEvent::orderBy('sort_order', 'asc')->get();

        $avatarBase64 = null;
        if ($profile->avatar) {
            $path = public_path('storage/' . $profile->avatar);
            if (file_exists($path)) {
                $type = pathinfo($path, PATHINFO_EXTENSION);
                $data = file_get_contents($path);
                $avatarBase64 = 'data:image/' . $type . ';base64,' . base64_encode($data);
            }
        }

        $data = [
            'profile' => $profile,
            'avatarBase64' => $avatarBase64,
            'skillsGrouped' => $skills,
            'projects' => $projects,
            'certifications' => $certifications,
            'timeline' => $timeline,
        ];

        $pdf = Pdf::loadView('cv-template', $data);
        
        // Optional: Custom paper size and orientation
        $pdf->setPaper('a4', 'portrait');

        return $pdf->download('Portfolio_CV_' . date('Y-m-d') . '.pdf');
    }
}
