# 🔍 GitScope

GitScope is a GitHub developer analytics dashboard. Enter any public GitHub username to explore their profile, repositories, languages, activity, contribution heatmap and a downloadable developer card. You can also compare two developers side by side.

Built with **React, Vite, Tailwind CSS, Recharts** and the **GitHub Public REST API**. There is no backend and no login.

## Features
- Profile analytics: avatar, bio, followers, following, repositories and quick links
- Repository analytics: total stars and forks, popular and recently updated repositories
- Language distribution chart
- Activity breakdown chart and recent activity timeline
- Growth insights and a chart of repositories created per year
- Contribution heatmap (data from [github-contributions-api](https://github-contributions-api.jogruber.de))
- GitScope developer card you can download as a PNG
- Compare two developers

## Run locally
```bash
npm install
npm run dev
```

## Run with Docker
```bash
docker build -t gitscope .
docker run -p 8080:80 gitscope
```
Then open http://localhost:8080

## CI/CD
- **CI:** GitHub Actions (`.github/workflows/ci.yml`) installs packages, builds the app and builds and tests the Docker image on every push and pull request to `main`.
- **CD:** Import this repository on [Vercel](https://vercel.com). Vercel detects Vite and redeploys automatically on every push to `main`.

## GitHub API rate limit
Without a token, GitHub allows **60 requests per hour** per IP. GitScope shows when you can try again.

To raise it to **5,000 per hour**, create a fine-grained token at https://github.com/settings/personal-access-tokens with **no permissions** (public data only), then:
- **Locally:** create a `.env` file with `VITE_GITHUB_TOKEN=your_token` and restart `npm run dev`.
- **Vercel:** add `VITE_GITHUB_TOKEN` in Project → Settings → Environment Variables and redeploy.

Note: in a frontend-only app the token ends up in the browser code, so only use a token with no permissions.

## Team

| Member | Role |
|---|---|
| **Himanshu Soni** | Developer — architecture, GitHub API layer and hooks, all analytics, developer card, comparison |
| **Ayush Dubey** | UI/UX & Data Visualization — design system, charts, responsive layout and `src/components/` |
| **Hemant Kumar** | Data Logic & Analytics — calculations in `src/utils/`, error handling, edge cases |
| **Chandan Kumar** | DevOps, Testing & Documentation — Docker, CI/CD, Vercel, docs, testing |

Person A led the project and built the core application; B, C and D each owned one area end to end.

