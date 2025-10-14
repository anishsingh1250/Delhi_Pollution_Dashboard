push_changes.ps1 — Usage

This repository includes `push_changes.ps1`, a PowerShell helper to stage, commit, and push the current branch.

Usage examples (run in repo root from PowerShell):

# Basic commit and push (uses existing upstream if set)
.\push_changes.ps1 -Message "Update styles and UI components"

# Force push and set upstream for new branch
.\push_changes.ps1 -Message "Initial commit for feature" -SetUpstream

Notes
- The script requires `git` to be installed and available in PATH.
- If there are no changes to commit, `git commit` will return non-zero and the script will continue to push.

Authentication
- Git push requires authentication with your remote (GitHub/GitLab/Bitbucket). Configure one of the following:
  - SSH keys: generate a key with `ssh-keygen`, add the public key to your Git host account, and use an SSH remote (git@github.com:...)
  - Git Credential Manager (Windows): `winget install --id=Git.Git -e --source winget` (installs Git which bundles GCM) or install GCM separately.
  - Personal Access Token (HTTPS): use a PAT instead of your password when prompted or cache it in a credential helper.

If you want me to run `git push` from here, I can't: this environment doesn't have your credentials or network access to your repo. Run the script locally to push changes.
