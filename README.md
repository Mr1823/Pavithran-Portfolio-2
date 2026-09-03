# Pavithran S — Portfolio

> **AI & Data Science Student · Founder, BuildWithUs · Building toward Zoho**

My personal developer portfolio — built with React, styled-components, and a custom **Premium Black** theme.

🔗 **Live:** [mr1823.github.io/Pavithran-Portfolio](https://mr1823.github.io/Pavithran-Portfolio/)

---

## ✨ What's Inside

| Section        | Highlights                                                                  |
| -------------- | --------------------------------------------------------------------------- |
| **Home**       | Intro, tagline, resume download, social links                               |
| **Skills**     | AI Product Engineering · Full Stack & Mobile Dev · Tools, Databases & Cloud |
| **Education**  | B.Tech AI & Data Science — KCET, Anna University (2024–2028)                |
| **Experience** | Straw Labs (AI Intern) · Lamda Tech Softics · BuildWithUs (Founder)         |
| **Projects**   | Auto-fetched from GitHub via the data fetcher script                        |
| **Contact**    | Email, LinkedIn, phone, location                                            |

## 🛠️ Tech Stack

- **Frontend:** React 16, styled-components, React Router, React Reveal
- **Theme:** Custom Premium Black (dark body + gold accents)
- **Data:** GitHub GraphQL API for live project data
- **Deployment:** GitHub Pages

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/Mr1823/Pavithran-Portfolio-2.git
cd Pavithran-Portfolio-2

# Install dependencies
npm install

# Start the dev server
npm start
```

The app runs at `http://localhost:3000`.

## 📂 Project Structure

```
src/
├── portfolio.js        # All personal data (edit this to customize)
├── theme.js            # Color themes (Premium Black is active)
├── components/         # Reusable UI components
├── containers/         # Section containers (greeting, skills, etc.)
├── pages/              # Route pages (experience, education, contact, etc.)
├── assets/images/      # Logos, SVGs, and profile images
└── shared/opensource/  # Auto-generated GitHub data (JSON)
```

## 📡 Fetching GitHub Projects

To populate the Projects section with your repos:

1. Create a `.env` file in the project root:
   ```
   GITHUB_TOKEN=your_github_personal_access_token
   GITHUB_USERNAME=Mr1823
   ```
2. Generate a token at [github.com/settings/tokens](https://github.com/settings/tokens) (select `repo` scope)
3. Run the fetcher:
   ```bash
   node git_data_fetcher.mjs
   ```

## 🎨 Changing the Theme

Edit the last line of `src/theme.js`:

```js
// Switch to any theme: blueTheme, purpleTheme, materialDarkTheme, etc.
export const chosenTheme = premiumBlackTheme;
```

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## 📬 Contact

- **Email:** [paviofficial18@gmail.com](mailto:paviofficial18@gmail.com)
- **LinkedIn:** [linkedin.com/in/paviofficial](https://www.linkedin.com/in/paviofficial)
- **GitHub:** [github.com/Mr1823](https://github.com/Mr1823)
- **Phone:** +91 93637 50806
