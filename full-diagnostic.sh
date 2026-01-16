#!/bin/bash
# Complete System Diagnostic Script

echo "🔍 COMPLETE SYSTEM DIAGNOSTIC"
echo "================================"
echo ""

# 1. Backend Health Check
echo "1️⃣ BACKEND RENDER STATUS"
echo "------------------------"
BACKEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://tech-portfoglio-new.onrender.com/api/portfolio 2>&1)
echo "API Endpoint: https://tech-portfoglio-new.onrender.com/api/portfolio"
echo "HTTP Status: $BACKEND_STATUS"

if [ "$BACKEND_STATUS" = "200" ]; then
    echo "✅ Backend is UP and responding"
else
    echo "❌ Backend is DOWN or ERROR (HTTP $BACKEND_STATUS)"
fi
echo ""

# 2. Admin Panel Check
echo "2️⃣ ADMIN PANEL STATUS"
echo "---------------------"
ADMIN_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://tech-portfoglio-new.onrender.com/admin 2>&1)
echo "Admin URL: https://tech-portfoglio-new.onrender.com/admin"
echo "HTTP Status: $ADMIN_STATUS"

if [ "$ADMIN_STATUS" = "302" ] || [ "$ADMIN_STATUS" = "200" ]; then
    echo "✅ Admin panel accessible"
else
    echo "❌ Admin panel ERROR (HTTP $ADMIN_STATUS)"
fi
echo ""

# 3. Frontend Vercel Check
echo "3️⃣ FRONTEND VERCEL STATUS"
echo "-------------------------"
FRONTEND_STATUS=$(curl -s -o /dev/null -w "%{http_code}" https://tech-portfoglio-new.vercel.app 2>&1)
echo "Frontend URL: https://tech-portfoglio-new.vercel.app"
echo "HTTP Status: $FRONTEND_STATUS"

if [ "$FRONTEND_STATUS" = "200" ]; then
    echo "✅ Frontend is UP"
else
    echo "❌ Frontend ERROR (HTTP $FRONTEND_STATUS)"
fi
echo ""

# 4. CORS Check
echo "4️⃣ CORS CONFIGURATION"
echo "---------------------"
CORS_HEADER=$(curl -s -I -H "Origin: https://tech-portfoglio-new.vercel.app" https://tech-portfoglio-new.onrender.com/api/portfolio 2>&1 | grep -i "access-control-allow-origin")
if [ -n "$CORS_HEADER" ]; then
    echo "✅ CORS headers present"
    echo "$CORS_HEADER"
else
    echo "❌ CORS headers MISSING"
fi
echo ""

# 5. API Data Check
echo "5️⃣ API DATA VERIFICATION"
echo "------------------------"
API_RESPONSE=$(curl -s https://tech-portfoglio-new.onrender.com/api/portfolio 2>&1)
PROFILE_CHECK=$(echo "$API_RESPONSE" | grep -o '"profile"' | head -1)
SKILLS_CHECK=$(echo "$API_RESPONSE" | grep -o '"skills"' | head -1)

if [ -n "$PROFILE_CHECK" ]; then
    echo "✅ Profile data present"
else
    echo "❌ Profile data MISSING"
fi

if [ -n "$SKILLS_CHECK" ]; then
    echo "✅ Skills data present"
else
    echo "❌ Skills data MISSING"
fi
echo ""

# 6. Summary
echo "================================"
echo "📊 DIAGNOSTIC SUMMARY"
echo "================================"
echo ""

if [ "$BACKEND_STATUS" = "200" ] && [ "$FRONTEND_STATUS" = "200" ]; then
    echo "✅ ALL SYSTEMS OPERATIONAL"
    echo ""
    echo "Access URLs:"
    echo "- Backend API: https://tech-portfoglio-new.onrender.com/api/portfolio"
    echo "- Admin Panel: https://tech-portfoglio-new.onrender.com/admin"
    echo "- Frontend: https://tech-portfoglio-new.vercel.app"
else
    echo "❌ SYSTEM ISSUES DETECTED"
    echo ""
    echo "Failed Components:"
    [ "$BACKEND_STATUS" != "200" ] && echo "- Backend (HTTP $BACKEND_STATUS)"
    [ "$FRONTEND_STATUS" != "200" ] && echo "- Frontend (HTTP $FRONTEND_STATUS)"
    [ "$ADMIN_STATUS" != "302" ] && [ "$ADMIN_STATUS" != "200" ] && echo "- Admin Panel (HTTP $ADMIN_STATUS)"
fi

echo ""
echo "🔍 For detailed analysis, check:"
echo "- Render Dashboard: https://dashboard.render.com"
echo "- Vercel Dashboard: https://vercel.com/dashboard"
echo ""
