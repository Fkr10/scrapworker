# ScrapWorker

## 📌 Project Overview

ScrapWorker offers reliable scrap collection and recycling services in India with eco-friendly solutions and fair pricing. We ensure a hassle-free, transparent process while promoting sustainability. Choose ScrapWorker for efficient scrap solutions.

## 🚀 Getting Started

### 1️⃣ Install Dependencies

```sh
git clone https://github.com/your-username/your-project.git
cd your-project
npm install
```

### 2️⃣ Run the Development Server

```sh
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

### 3️⃣ Build for Production

```sh
npm run build
npm start
```

## 📂 Folder Structure

```plaintext
scrapworker/
│── public/             # Static assets (images, icons, etc.)
│── src/                # Project files
│   ├── app/            # Next.js App Router (pages and layouts)
│   │   ├── layout.js   # Root layout (persists across pages)
│   │   ├── page.js     # Homepage ("/")
│   │   ├── scrap-metal/page.js    # Scrap Metal Page ("/scrap-metal")
│   │   ├── scrap-plastic/page.js  # Scrap Plastic Page ("/scrap-plastic")
│   │   ├── scrap-paper/page.js    # Scrap Paper Page ("/scrap-paper")
│   │   ├── api/        # Future API routes (authentication, data handling)
│   │   │   ├── auth/   # Future auth APIs (login.js, register.js)
│   │   │   ├── scrap/  # Future scrap-related APIs
│   ├── components/     # Reusable UI components (e.g., Navbar, Footer)
│   ├── lib/            # Utility functions (fetchers, helpers)
│   ├── hooks/          # Custom React hooks
│   ├── store/          # Future state management (Redux, Zustand)
│   ├── database/       # Future database connection logic
│   ├── middleware/     # Future middleware logic (e.g., auth check)
│   ├── styles/         # Global styles (CSS/SCSS)
│   ├── config/         # Configuration (API keys, environment variables)
│── .env                # Environment variables
│── next.config.js      # Next.js configuration
│── package.json        # Dependencies & scripts
│── .eslintrc.json      # Linting rules
│── .gitignore          # Git ignore file
```

## 🌱 Branching Strategy

This project follows a structured Git branching strategy:

### 🔹 Branches:

- **`master`** → Production-ready branch.
- **`dev`** → Active development branch.
- **`feature/{feature-name}`** → New features.
- **`bugfix/{bug-name}`** → Fixing identified bugs.
- **`release/{version}`** → Prepares for a new release.
- **`hotfix/{hotfix-name}`** → Urgent fixes in production.
- **`style/{style-name}`** → UI styling improvements.
- **`refactor/{refactor-name}`** → Code structure improvements.
- **`docs/{doc-name}`** → Documentation updates.

### 🔹 Workflow:

1. **New Feature:**
   ```sh
   git checkout -b feature/{feature-name} dev
   ```
2. **Bug Fix:**
   ```sh
   git checkout -b bugfix/{bug-name} dev
   ```
3. **Merge Feature into Dev:**
   ```sh
   git checkout dev
   git merge feature/{feature-name}
   git push origin dev
   ```
4. **Release to Production:**
   ```sh
   git checkout master
   git merge release/{version}
   git push origin master
   ```

## 🛠️ Running Tests

To run tests, use:

```sh
npm test
```

## 💡 Future Enhancements

- ✅ Authentication (NextAuth.js / Custom JWT)
- ✅ Database Integration (MongoDB, PostgreSQL, Firebase)
- ✅ API Development (Custom REST/GraphQL)
- ✅ UI Improvements and Styling

## 📌 Contributing

We welcome contributions! Follow the branch naming conventions and commit standards:

```sh
feat(auth): add user login functionality
fix(auth): correct login error
chore(release): prepare for version 1.2.0
```

---

### 📌 License

This project is licensed under the MIT License - see the LICENSE file for details.

### 📌 Contributors & Feedback

Feel free to contribute by opening a pull request or reporting issues! 🚀
