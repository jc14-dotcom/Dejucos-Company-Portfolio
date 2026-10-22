@echo off
echo =================================
echo  Company Portfolio Setup
echo =================================
echo.

echo Installing dependencies...
call npm install

echo.
echo Building Tailwind CSS...
call npx tailwindcss -i ./input.css -o ./output.css --minify

echo.
echo =================================
echo  Setup Complete!
echo =================================
echo.
echo To start development:
echo 1. Run "npm run build-css" to watch for CSS changes
echo 2. Run "npm run serve" to start local server
echo 3. Open your browser and go to the displayed URL
echo.
echo Your portfolio website is ready!
pause
