#!/bin/bash

# Script per configurare Vercel automaticamente
# Usage: ./setup-vercel.sh

set -e

echo "🚀 Configurazione Vercel Automatica"
echo "===================================="
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📦 Installing Vercel CLI..."
    npm install -g vercel
fi

# Backend URL
BACKEND_URL="https://tech-portfoglio-new.onrender.com"

echo "⚙️  Configurazione environment variables..."
echo ""

# Set environment variables
vercel env add NEXT_PUBLIC_API_URL production <<< "${BACKEND_URL}/api"
vercel env add NEXT_PUBLIC_STORAGE_URL production <<< "${BACKEND_URL}/storage"
vercel env add NEXT_PUBLIC_BACKEND_URL production <<< "${BACKEND_URL}"

vercel env add NEXT_PUBLIC_API_URL preview <<< "${BACKEND_URL}/api"
vercel env add NEXT_PUBLIC_STORAGE_URL preview <<< "${BACKEND_URL}/storage"
vercel env add NEXT_PUBLIC_BACKEND_URL preview <<< "${BACKEND_URL}"

echo ""
echo "✅ Environment variables configurate!"
echo ""
echo "🔄 Triggering redeploy..."
vercel --prod

echo ""
echo "🎉 Deploy completato!"
echo ""
echo "📝 URL del tuo sito:"
vercel ls | grep production
