Git Authentication Guidance (Windows)

Option 1 — SSH keys (recommended)
1. Open PowerShell.
2. Generate a key if you don't have one:
   ssh-keygen -t ed25519 -C "your_email@example.com"
   # or use rsa if ed25519 unavailable:
   ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
3. Start the ssh-agent and add the key:
   Start-Service ssh-agent; ssh-add $env:USERPROFILE\.ssh\id_ed25519
4. Copy your public key and add to Git host (GitHub/GitLab/Bitbucket):
   Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip
5. Ensure repository remote uses SSH (e.g., git@github.com:owner/repo.git)
   git remote set-url origin git@github.com:owner/repo.git

Option 2 — Git Credential Manager (HTTPS)
1. Install Git for Windows (includes GCM) from https://git-scm.com/download/win or via winget.
2. Configure credential manager:
   git config --global credential.helper manager-core
3. On next git push, sign in using the browser prompt that GCM opens.

Option 3 — Personal Access Token (PAT)
1. Create a PAT on your Git host (scopes: repo for GitHub)
2. When prompted for password during git push, paste the PAT. Use a credential helper to cache it.

Problems?
- "Permission denied" with SSH: ensure public key uploaded and agent has the private key.
- 403 on HTTPS: token scopes may be insufficient; try a new token with full repo scope.

If you'd like, I can add a sample `README` entry that documents these steps in your project. Run the included `push_changes.ps1` script locally to push changes made here. I cannot push from this environment because I don't have your credentials or network access to your remote repository.
