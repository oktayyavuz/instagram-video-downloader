@echo off
echo Next.js Projesi Kurulum ve Calistirma Scripti
echo ----------------------------------------------

where node >nul 2>&1
if %ERRORLEVEL% NEQ 0 (
    echo Node.js bulunamadi! Lutfen Node.js yukleyin.
    pause
    exit /b 1
)

echo Paketler yukleniyor...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Paket yukleme islemi basarisiz oldu! --force deneyecegim...
    call npm install --force
    if %ERRORLEVEL% NEQ 0 (
        echo Paket yukleme islemi basarisiz oldu! --legacy-peer-deps deneyecegim...
        call npm install --legacy-peer-deps
        if %ERRORLEVEL% NEQ 0 (
            echo Paket yukleme islemi basarisiz oldu!
            pause
            exit /b 1
        )
    )
)

echo Build islemi baslatiliyor...
call npm run build
if %ERRORLEVEL% EQU 0 (
    echo Build basarili! Uygulama production modunda baslatiliyor...
    call npm start
) else (
    echo Build islemi basarisiz oldu. Uygulama development modunda baslatiliyor...
    call npm run dev
)

pause
