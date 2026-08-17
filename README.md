# Ocean Information & Services Solutions Blueprint results landing page

A small, dependency-free landing page for communicating early survey findings in plain language.

## Files

- `index.html` – page structure and copy
- `styles.css` – layout, typography, and responsive design
- `script.js` – loads the summarized survey data and renders charts/cards
- `data/results.json` – anonymized summary data used by the page

## Preview locally

Because the page loads `results.json`, preview it through a local web server rather than double-clicking `index.html`.

From this folder, run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a new GitHub repository.
2. Upload all files and folders in this directory to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/ (root)` folder.
6. Save. GitHub will provide the public Pages URL.

## Updating the results

Edit `data/results.json`. The page will update automatically after you commit and push the change to GitHub.

## Current counting choice

The prototype uses six unique respondents. Where the same respondent submitted more than once, the most recent submission is used.
