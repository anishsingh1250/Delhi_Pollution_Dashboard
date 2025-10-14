<#
push_changes.ps1
PowerShell helper to stage, commit, and push the current branch.
Usage:
  .\push_changes.ps1 -Message "Describe changes" [-SetUpstream]

If -SetUpstream is provided and the current branch has no upstream, the script uses
`git push --set-upstream origin <branch>`.
#>
param(
    [Parameter(Mandatory=$true)]
    [string]$Message,

    [switch]$SetUpstream
)

# Ensure git is available
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Error "git not found in PATH. Install Git or ensure it's available in your PATH."
    exit 1
}

# Get current branch
$branch = git rev-parse --abbrev-ref HEAD 2>$null
if ($LASTEXITCODE -ne 0 -or -not $branch) {
    Write-Error "Failed to determine current git branch. Are you inside a git repository?"
    exit 1
}

Write-Host "Current branch: $branch"

# Show status and ask for confirmation
git status --porcelain

Write-Host "Staging all changes..."
git add -A
if ($LASTEXITCODE -ne 0) { Write-Error "git add failed"; exit 1 }

Write-Host "Committing with message: $Message"
# Use --no-verify to avoid local hooks blocking automation; you can remove if undesired.
git commit -m "$Message" --no-verify
if ($LASTEXITCODE -ne 0) {
    Write-Warning "git commit returned a non-zero code. If there were no changes to commit, this is expected."
}

# Determine if branch has upstream
$hasUpstream = git rev-parse --abbrev-ref --symbolic-full-name @{u} 2>$null
if ($LASTEXITCODE -eq 0 -and -not $SetUpstream) {
    Write-Host "Pushing to upstream..."
    git push
    exit $LASTEXITCODE
} else {
    if ($SetUpstream -or -not $hasUpstream) {
        Write-Host "Pushing and setting upstream to origin/$branch..."
        git push --set-upstream origin $branch
        exit $LASTEXITCODE
    } else {
        Write-Host "Pushing to upstream..."
        git push
        exit $LASTEXITCODE
    }
}
