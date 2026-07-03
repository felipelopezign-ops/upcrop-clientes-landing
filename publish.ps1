# Publicar landing en GitHub (para v0 / Vercel)
# Ejecutar desde PowerShell después de: gh auth login

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

$repoName = "upcrop-clientes-landing"

Write-Host "Creando repositorio $repoName en GitHub..." -ForegroundColor Cyan
gh repo create $repoName --public --source=. --remote=origin --push --description "Landing page de clientes Up Crop"

Write-Host ""
Write-Host "Listo. Repositorio:" -ForegroundColor Green
gh repo view --web 2>$null
Write-Host "https://github.com/$(gh api user -q .login)/$repoName"
