<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: 'Courier New', Courier, monospace; background-color: #0a0a0f; color: #e2e8f0; padding: 20px; }
        .container { max-width: 600px; margin: 0 auto; background: #111827; border: 1px solid #1f2937; border-left: 4px solid #ff006e; padding: 30px; border-radius: 8px; box-shadow: 0 0 20px rgba(0,0,0,0.5); }
        .header { border-bottom: 1px solid #374151; padding-bottom: 20px; margin-bottom: 20px; }
        .header h1 { font-size: 18pt; color: #ff006e; margin: 0; text-transform: uppercase; letter-spacing: 2px; }
        .label { color: #94a3b8; font-size: 9pt; text-transform: uppercase; display: block; margin-top: 15px; }
        .value { color: #00f0ff; font-size: 11pt; margin-bottom: 5px; }
        .message { background: #0a0a0f; padding: 20px; border-radius: 4px; border: 1px solid #1f2937; color: #cbd5e1; margin-top: 20px; white-space: pre-wrap; }
        .footer { margin-top: 40px; font-size: 8pt; color: #64748b; text-align: center; border-top: 1px solid #374151; padding-top: 20px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>_Transmission Received</h1>
        </div>
        
        <span class="label">Codename / Name</span>
        <div class="value">{{ $data['name'] }}</div>
 
        <span class="label">Frequency / Email</span>
        <div class="value">{{ $data['email'] }}</div>
 
        <span class="label">Objective / Subject</span>
        <div class="value">{{ $data['subject'] }}</div>
 
        <span class="label">Payload / Message</span>
        <div class="message">{{ $data['message'] }}</div>
 
        <div class="footer">
            Portfolio System • Handshake Initialized via {{ config('app.url') }}
        </div>
    </div>
</body>
</html>
