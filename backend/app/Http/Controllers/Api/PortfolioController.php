<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Certification;
use App\Models\Profile;
use App\Models\Project;
use App\Models\Skill;
use Illuminate\Http\Request;

class PortfolioController extends Controller
{
    public function index()
    {
        return response()->json([
            'profile' => Profile::first(),
            'skills' => Skill::all(),
            'projects' => Project::latest()->get(),
            'certifications' => Certification::orderBy('date', 'desc')->get(),
            'timeline' => \App\Models\TimelineEvent::orderBy('sort_order', 'asc')->get(),
            'stats' => \App\Models\Stat::orderBy('sort_order', 'asc')->get(),
        ]);
    }
}
