$global:LastCommandStartTime = Get-Date

Set-PSReadLineOption -AddToHistoryHandler {
    $global:LastCommandStartTime = Get-Date
    return $true
}

function prompt {
    $caminhoAtual = $ExecutionContext.SessionState.Path.CurrentLocation.Path
    $pastaPessoal = $env:USERPROFILE
    $nameComputer = $env:COMPUTERNAME
    $namePessoal = $env:USERNAME

    # Substituir caminho por ~ se estiver dentro da pasta pessoal
    if ($caminhoAtual.StartsWith($pastaPessoal, [System.StringComparison]::OrdinalIgnoreCase)) {
        $caminhoModificado = "~" + $caminhoAtual.Substring($pastaPessoal.Length)
    } else {
        $caminhoModificado = $caminhoAtual
    }

    # Usuario@Computador
    Write-Host $namePessoal"@"$nameComputer" " -NoNewline -ForegroundColor Green

    # Caminho atual
    Write-Host $caminhoModificado -NoNewline -ForegroundColor Yellow

    # Duracao do ultimo comando
    $duration = (Get-Date) - $global:LastCommandStartTime
    $tempo = " [{0:N1}s]" -f $duration.TotalSeconds
    Write-Host "$tempo " -NoNewline -ForegroundColor DarkGray

    # Indicador de admin
    $isAdmin = ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)
    if ($isAdmin) {
        Write-Host "[ADMIN] " -NoNewline -ForegroundColor Red
    }

    # Status do Git
    $gitStatus = git status --porcelain 2>$null
    if (-not $gitStatus) {
        Write-Host " ✅" -NoNewline
    } elseif ($gitStatus -match "^\?\?" -or $gitStatus -match "(?m)^ M") {
        Write-Host " ⚠️" -NoNewline
    } else {
        Write-Host " ❌" -NoNewline
    }

    # Nome do branch
    $gitBranch = git branch --show-current 2>$null
    if ($gitBranch) {
        Write-Host " ($gitBranch)" -NoNewline -ForegroundColor Cyan
    }

    # Seta colorida
    if ($LASTEXITCODE -eq 0) {
        Write-Host " >" -NoNewline -ForegroundColor Green
    } else {
        Write-Host " >" -NoNewline -ForegroundColor Red
    }

    return " "
}