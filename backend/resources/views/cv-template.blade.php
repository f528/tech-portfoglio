<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>{{ $profile->name }} - CV</title>
    <style>
        @page {
            margin: 0;
            size: a4;
        }
        body {
            font-family: 'Helvetica', 'Arial', sans-serif;
            margin: 0;
            padding: 0;
            color: #1a1a1a;
            line-height: 1.4;
            font-size: 10pt;
            background-color: #ffffff;
        }
        /* Using floats for DomPDF compatibility instead of flexbox */
        .sidebar {
            float: left;
            width: 30%;
            height: 100%;
            min-height: 29.7cm; /* A4 height approx */
            background-color: #0f172a;
            color: #ffffff;
            padding: 40px 20px;
        }
        .main {
            float: left;
            width: 60%;
            padding: 40px 30px;
            background-color: #ffffff;
        }
        .clearfix::after {
            content: "";
            clear: both;
            display: table;
        }
        .avatar-container {
            text-align: center;
            margin-bottom: 25px;
        }
        .avatar {
            width: 120px;
            height: 120px;
            border-radius: 15px;
            border: 3px solid #00f0ff;
        }
        .sidebar h2 {
            color: #00f0ff;
            font-size: 11pt;
            text-transform: uppercase;
            letter-spacing: 1px;
            border-bottom: 1px solid rgba(0, 240, 255, 0.2);
            padding-bottom: 5px;
            margin-top: 25px;
            margin-bottom: 15px;
        }
        .contact-item {
            margin-bottom: 10px;
        }
        .contact-label {
            color: #94a3b8;
            font-size: 7pt;
            text-transform: uppercase;
            display: block;
        }
        .contact-value {
            font-size: 8.5pt;
            word-wrap: break-word;
        }
        .skill-group {
            margin-bottom: 15px;
        }
        .skill-group-name {
            color: #cbd5e1;
            font-size: 8pt;
            font-weight: bold;
            margin-bottom: 5px;
            display: block;
            text-transform: capitalize;
        }
        .skill-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .skill-list li {
            font-size: 8pt;
            margin-bottom: 3px;
            color: #e2e8f0;
        }
        .skill-dot {
            color: #00f0ff;
        }
        .header {
            margin-bottom: 30px;
        }
        h1 {
            font-size: 28pt;
            margin: 0;
            color: #0f172a;
            text-transform: uppercase;
        }
        .job-title {
            font-size: 13pt;
            color: #0284c7;
            font-weight: bold;
            text-transform: uppercase;
            margin-top: 5px;
        }
        .section-title {
            color: #0f172a;
            font-size: 14pt;
            text-transform: uppercase;
            border-left: 4px solid #00f0ff;
            padding-left: 12px;
            margin-top: 30px;
            margin-bottom: 15px;
            font-weight: bold;
        }
        .summary-text {
            color: #475569;
            text-align: justify;
            margin-bottom: 20px;
        }
        .timeline-item {
            margin-bottom: 20px;
            clear: both;
        }
        .timeline-date {
            font-weight: bold;
            color: #0284c7;
            font-size: 8.5pt;
            margin-bottom: 2px;
            display: block;
        }
        .timeline-title {
            font-size: 11pt;
            font-weight: bold;
            color: #1e293b;
        }
        .timeline-org {
            color: #64748b;
            font-style: italic;
            margin-bottom: 5px;
        }
        .timeline-desc {
            color: #475569;
            font-size: 9.5pt;
        }
        .project-item {
            margin-bottom: 15px;
            padding: 12px;
            background-color: #f8fafc;
            border-radius: 5px;
            border-left: 3px solid #0284c7;
        }
        .project-title {
            font-weight: bold;
            color: #0f172a;
            font-size: 10pt;
        }
        .project-tech {
            color: #06b6d4;
            font-size: 7.5pt;
            font-weight: bold;
            text-transform: uppercase;
        }
        .cert-item {
            margin-bottom: 8px;
        }
        .cert-name {
            font-weight: bold;
            color: #e2e8f0;
            font-size: 8.5pt;
            display: block;
        }
        .cert-meta {
            color: #94a3b8;
            font-size: 7.5pt;
        }
        .footer {
            position: absolute;
            bottom: 20px;
            right: 40px;
            font-size: 7pt;
            color: #94a3b8;
        }
    </style>
</head>
<body class="clearfix">
    <div class="sidebar">
        <div class="avatar-container">
            @if($avatarBase64)
                <img src="{{ $avatarBase64 }}" class="avatar">
            @else
                <div style="width: 120px; height: 120px; background: #1e293b; border-radius: 15px; border: 3px solid #00f0ff; margin: auto;"></div>
            @endif
        </div>
        
        <h2>Contact</h2>
        <div class="contact-item">
            <span class="contact-label">Email</span>
            <span class="contact-value">{{ $profile->email }}</span>
        </div>
        @if($profile->location)
        <div class="contact-item">
            <span class="contact-label">Location</span>
            <span class="contact-value">{{ $profile->location }}</span>
        </div>
        @endif

        <h2>Tech Stack</h2>
        @foreach($skillsGrouped as $category => $categorySkills)
        <div class="skill-group">
            <span class="skill-group-name">{{ $category }}</span>
            <ul class="skill-list">
                @foreach($categorySkills as $skill)
                <li><span class="skill-dot">▸</span> {{ $skill->name }}</li>
                @endforeach
            </ul>
        </div>
        @endforeach

        <h2>Certifications</h2>
        @foreach($certifications->take(5) as $cert)
        <div class="cert-item">
            <span class="cert-name">{{ $cert->name }}</span>
            <span class="cert-meta">{{ $cert->issuer }} | {{ $cert->date }}</span>
        </div>
        @endforeach
    </div>

    <div class="main">
        <div class="header">
            <h1>{{ $profile->name }}</h1>
            <div class="job-title">{{ $profile->title }}</div>
        </div>

        <div class="section-title">Professional Summary</div>
        <div class="summary-text">{{ $profile->bio }}</div>

        <div class="section-title">Experience & Education</div>
        @foreach($timeline as $item)
        <div class="timeline-item">
            <span class="timeline-date">{{ $item->date }}</span>
            <div class="timeline-title">{{ $item->title }}</div>
            <div class="timeline-org">{{ $item->organization }}</div>
            <div class="timeline-desc">{{ $item->description }}</div>
        </div>
        @endforeach

        <div class="section-title">Featured Projects</div>
        @foreach($projects as $project)
        <div class="project-item">
            <div class="project-tech">{{ is_array($project->skills) ? implode(' • ', $project->skills) : $project->skills }}</div>
            <div class="project-title">{{ $project->title }}</div>
            <div class="timeline-desc">{{ $project->description }}</div>
        </div>
        @endforeach

        <div class="footer">
            Portfolio Platform • {{ date('M Y') }}
        </div>
    </div>
</body>
</html>
