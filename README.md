Simple CRM (React) — minimal CRM for Leads (create, read, update, delete), team members, tags, stages, and assignments. Uses localStorage for persistence so you can try it immediately without backend. Designed to be uploaded to GitHub and deployed on Vercel.


## Local setup (optional)
1. Install Node.js (LTS). Download from https://nodejs.org/ if you don't have it.
2. In the project folder, run:


```bash
npm install
npm start
```


Then open http://localhost:3000


## Files included
All source files are inside the `src/` folder. `package.json` has scripts for `start`, `build`, and `deploy` (deploy is optional if you use Vercel).


## How to upload to GitHub and deploy on Vercel (step-by-step for non-technical users)


STEP A — Create GitHub repository
1. Go to https://github.com and sign in / create an account.
2. Click **New** to create a repository.
3. Name it e.g. `crm-simple-react`, set visibility to Public (or Private), **do NOT** initialize with README (we already have files). Click **Create repository**.


STEP B — Upload project files to GitHub (simple web method)
Option 1: Use GitHub website drag-and-drop (easiest for non-technical):
1. On your new repository page, click **uploading an existing file** or **Add file → Upload files**.
2. Drag the entire project files and folders (README.md, package.json, public/, src/) to the upload area.
3. Wait for upload to finish, then click **Commit changes** at bottom.


Option 2: Use Git (if you have Git installed) — commands (run in the project folder):
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```


STEP C — Connect GitHub to Vercel and deploy
1. Create a free account at https://vercel.com (sign in with GitHub recommended).
2. Click **New Project** → **Import Git Repository** → choose the repo you just uploaded.
3. Vercel auto-detects React. Use default build command `npm run build` and output directory `build`.
4. Click **Deploy**. Wait a minute — Vercel will build and publish your CRM. You will get a URL like `https://your-repo-name.vercel.app`.


STEP D — Test
1. Open the deployed URL from Vercel.
2. Add a few team members and leads. Data persists in the browser.


---
