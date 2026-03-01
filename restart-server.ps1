# Script para reiniciar o servidor
Stop-Process -Name node -Force -ErrorAction SilentlyContinue
Start-Sleep -Seconds 1
Set-Location "c:\Users\pheux\OneDrive\Documentos\pr"
& "C:\Program Files\nodejs\node.exe" server.js
