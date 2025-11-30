<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->
# Copilot instructions — cohort-sher-2.0

Purpose: help an AI coding agent be immediately productive in this repository (static front-end project made up of many paired HTML/CSS/JS/SCSS components).

- Project type: mostly static front-end files (HTML, CSS, SCSS, minimal JS). Entry point: `index.html` at repository root.
- No backend services or API layers are present in the repository (no server code discovered).

Key patterns and structure
- File pairing convention: most components are kept as triplets or pairs using the same base name.
  - Examples: `like.html` + `like.scss` (+ `like.js`), `reel.html` + `reel.scss` (+ `reel.js`).
  - Subfolders follow the same pattern, e.g., `piano/` and `practice-sec/` contain `*.html`, `*.scss`, and `*.js` together.
- SCSS usage: many `*.scss` files exist (e.g., `avez.scss`, `practice-sec/my.scss`). CSS is generally compiled from these SCSS files — there are no project scripts that perform this automatically.
- Naming quirks: some slightly different extensions appear (e.g., `next.htm`). Preserve exact filenames and extensions when editing or creating files.

Build / developer workflow (discoverable)
- There are no `scripts` in `package.json` for building or running the project. `package.json` only lists a dev dependency `prompt-sync`.
- Typical local dev steps an engineer uses (not present as scripts):
  - Install Dart Sass (if you need to compile SCSS): `npm i -g sass` or add as a devDependency.
  - Compile a single SCSS file to CSS (PowerShell example):
    ```powershell
    sass practice-sec/my.scss:practice-sec/my.css --no-source-map
    ```
  - Or watch a file while editing:
    ```powershell
    sass --watch practice-sec/my.scss:practice-sec/my.css
    ```
  - If you add automation, prefer adding an `npm` script (e.g., `"sass:watch": "sass --watch src:dest"`) rather than changing repo structure.

Conventions for edits and feature work
- When adding a new UI component, create matching files with the same base name: `foo.html`, `foo.scss`, and `foo.js` (place them alongside similar components).
- Keep styles local: prefer adding component-level SCSS files rather than editing a global `style.css` unless the change truly needs to be global.
- Minimal JS: scripts in this repo are small DOM helpers (see `like.js`, `light.js`, `team.js`). Make changes locally in the companion `.js` file.
- Avoid large refactors that move many files or rename lots of components; the repo relies on filename conventions used in many static HTML links.

Integration and dependencies
- No CI configuration or GitHub Actions detected. No explicit deploy instructions found.
- Single Node dependency found: `prompt-sync` (likely for experimental Node scripts). Do not add runtime Node assumptions for the site without user approval.

What an AI agent should do first when asked to modify the project
1. Open the matching trio/pair for the component (e.g., `foo.html`, `foo.scss`, `foo.js`).
2. Make minimal, focused edits — keep naming consistent and add only required CSS/JS.
3. If SCSS changes are made, include a note/comment in the PR about how to compile SCSS locally (example commands above).
4. Do not add build/tooling unless asked; instead, suggest `npm` scripts or a small `sass` devDependency to the user.

Files to reference for common patterns
- `index.html` — repository entry page and examples of linking local assets.
- `style.css` / `avez.scss` / `practice-sec/my.scss` — examples of global and component SCSS.
- `piano/`, `practice-sec/` directories — examples of component folder layout.

If anything here is unclear or you want different automation (scripts, CI, SCSS watch setup), tell me which approach you prefer and I will update the repo accordingly.
