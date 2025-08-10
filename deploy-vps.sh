#!/bin/bash

# VPS Deployment Script for Next.js (Port 3005)

echo "🚀 Starting VPS deployment build..."

# Check if we're on the VPS
if [ "$1" = "--production" ]; then
    echo "📡 Production VPS deployment mode"
    PRODUCTION_MODE=true
else
    echo "🔧 Development VPS deployment mode"
    PRODUCTION_MODE=false
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --production=false

# Build the application
echo "🏗️  Building Next.js application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    
    if [ "$PRODUCTION_MODE" = true ]; then
        echo "🌐 Starting production server on port 3005..."
        echo "Server will be available at:"
        echo "  - Local: http://localhost:3005"
        echo "  - Network: http://$(hostname -I | awk '{print $1}'):3005"
        echo ""
        echo "To stop the server, use Ctrl+C or kill the process"
        echo "To run in background: nohup npm run start:vps:production > server.log 2>&1 &"
        echo ""
        npm run start:vps:production
    else
        echo "🔧 Starting development server on port 3005..."
        echo "Server will be available at:"
        echo "  - Local: http://localhost:3005"
        echo "  - Network: http://$(hostname -I | awk '{print $1}'):3005"
        echo ""
        npm run start:vps
    fi
else
    echo "❌ Build failed!"
    exit 1
fi
