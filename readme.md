# Cyber-Retro Portfolio

A high-performance personal portfolio website built with Next.js 14, featuring a unique Cyber-Retro aesthetic with pixel art, holographic effects, and smooth animations.

## 🚀 Features

- **Next.js 14 App Router** with TypeScript
- **Static Export** ready for GitHub Pages deployment
- **Cyber-Retro Design** with neon colors and pixel art
- **Anime.js Animations** including holographic pixel distortion
- **3D Card Effects** with CSS transforms
- **Responsive Design** optimized for all devices
- **Performance Optimized** with minimal dependencies

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS
- **Animations:** Anime.js
- **Icons:** Lucide React
- **Fonts:** Orbitron, Space Mono, Press Start 2P

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/your-repo-name.git

# Navigate to project directory
cd your-repo-name

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🚢 Deployment to GitHub Pages

1. **Update `next.config.js`:**
   - Replace `your-repo-name` with your actual GitHub repository name

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy to GitHub Pages:**
   - Create a GitHub repository
   - Push your code to the repository
   - Go to repository Settings > Pages
   - Set source to "GitHub Actions" or deploy the `/out` folder

4. **GitHub Actions (Recommended):**
   Create `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [main]
   
   jobs:
     build-and-deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v3
         - uses: actions/setup-node@v3
           with:
             node-version: '18'
         - run: npm ci
         - run: npm run build
         - uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./out
   ```

## 📁 Project Structure

```
├── app/
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── projects/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Footer.tsx
│   ├── Hologram.tsx
│   ├── Navbar.tsx
│   └── PokemonCard.tsx
├── public/
│   └── me.png (add your photo here)
├── next.config.js
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to customize the neon color palette:
```typescript
colors: {
  'cyber-black': '#0a0a0f',
  'neon-blue': '#00f0ff',
  'neon-pink': '#ff006e',
  // Add more colors...
}
```

### Content
- Update personal information in each page component
- Replace `/me.png` with your photo in the `public/` folder
- Modify project data in `app/projects/page.tsx`
- Update social links in `components/Footer.tsx`

## 🎯 Key Components

### Hologram Component
The `Hologram.tsx` component creates a pixelated image that distorts on hover using Anime.js. The effect simulates a holographic display with scattered pixels.

### Pokemon Card Component
The `PokemonCard.tsx` component features a 3D tilt effect on hover with CSS perspective transforms and glowing borders.

### Live Clock
The footer includes a real-time digital clock that updates every second using `date-fns`.

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**
- GitHub: [@Danish7x7](https://github.com/danish7x7)
- LinkedIn: [Danishbir Singh Bhatti](https://linkedin.com/in/danishbir-singh-bhatti)

---

⭐ Star this repo if you find it helpful!