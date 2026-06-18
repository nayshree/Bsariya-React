# B Sariya Website — HTML to React Conversion Guide

---

## Table of Contents
1. [Project Overview](#1-project-overview)
2. [Step 1 — Scaffold React Project](#2-step-1--scaffold-react-project)
3. [Step 2 — Install Dependencies](#3-step-2--install-dependencies)
4. [Step 3 — Copy Assets](#4-step-3--copy-assets)
5. [Step 4 — Clean Up Default Vite Files](#5-step-4--clean-up-default-vite-files)
6. [Step 5 — Setup main.jsx](#6-step-5--setup-mainjsx)
7. [Step 6 — Create Folder Structure](#7-step-6--create-folder-structure)
8. [Step 7 — Setup Routing in App.jsx](#8-step-7--setup-routing-in-appjsx)
9. [Step 8 — Create Placeholder Pages](#9-step-8--create-placeholder-pages)
10. [Step 9 — Create Header Component](#10-step-9--create-header-component)
11. [Step 10 — Create Footer Component](#11-step-10--create-footer-component)
12. [Q&A — Doubts Asked During Conversion](#12-qa--doubts-asked-during-conversion)
13. [HTML to JSX Cheatsheet](#13-html-to-jsx-cheatsheet)
14. [Package Reference](#14-package-reference)

---

## 1. Project Overview

### Current Stack (Before)
- 5 HTML pages: index.html, about.html, services.html, service_detail.html, contact.html
- jQuery + Bootstrap 5
- Owl Carousel (hero slider)
- Wow.js (scroll animations)
- SlickNav (mobile menu)
- Odometer (animated numbers)

### Target Stack (After)
| Old | New |
|---|---|
| Plain HTML files | React components (.jsx) |
| jQuery | React state & hooks |
| Owl Carousel | Swiper.js |
| Wow.js | AOS (Animate on Scroll) |
| Odometer | react-countup |
| `<a href="page.html">` | `<Link to="/page">` from react-router-dom |

### Final Folder Structure
```
bsariya-react/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── images/       ← copied from old project
│   └── fonts/        ← copied from old project
└── src/
    ├── main.jsx      ← entry point, global CSS imports
    ├── App.jsx       ← routes defined here
    ├── assets/
    │   ├── custom.css
    │   ├── style.css
    │   └── font-awesome.min.css
    ├── components/
    │   ├── Header.jsx
    │   └── Footer.jsx
    └── pages/
        ├── Home.jsx
        ├── About.jsx
        ├── Services.jsx
        ├── ServiceDetail.jsx
        └── Contact.jsx
```

---

## 2. Step 1 — Scaffold React Project

### Command
```powershell
cd d:\
npm create vite@latest bsariya-react -- --template react
cd bsariya-react
npm install
```

### What each part means
- `cd d:\` — go to parent folder (so new project is created at D:\bsariya-react, not inside D:\bsariya)
- `npm create vite@latest` — creates a new Vite project
- `bsariya-react` — name of the new folder
- `--template react` — use React + JavaScript template (not TypeScript)
- `npm install` — installs default packages

### To open project in VS Code
```powershell
code .
```

### To run the project
```powershell
npm run dev
```
Then open browser at `http://localhost:5173`

To stop the server: press `Ctrl + C` in terminal.

---

## 3. Step 2 — Install Dependencies

```powershell
npm install react-router-dom bootstrap swiper aos react-countup
```

| Package | Purpose |
|---|---|
| `react-router-dom` | Navigate between pages without page reload |
| `bootstrap` | Same Bootstrap CSS, imported via npm |
| `swiper` | Hero slider (replaces Owl Carousel) |
| `aos` | Scroll animations (replaces Wow.js) |
| `react-countup` | Animated numbers (replaces Odometer) |

---

## 4. Step 3 — Copy Assets

Copy from `D:\bsariya\` to `D:\bsariya-react\public\`:
- `images\` folder (entire folder with all subfolders)
- `fonts\` folder

Copy from `D:\bsariya\` to `D:\bsariya-react\src\assets\`:
- `css\custom.css`
- `css\font-awesome.min.css`
- `style.css`

> IMPORTANT: Always copy files FIRST before writing any import statements.
> The import will fail if the file does not exist.

---

## 5. Step 4 — Clean Up Default Vite Files

1. **Delete** `src/App.css` — not needed
2. **Clear** `src/index.css` — delete all content, leave empty
3. **Replace** `src/App.jsx` with minimal version:

```jsx
function App() {
  return (
    <div>
      <h1>Hello React</h1>
    </div>
  )
}

export default App
```

Check browser — should show "Hello React".

---

## 6. Step 5 — Setup main.jsx

Replace the full content of `src/main.jsx`:

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './assets/custom.css'
import './assets/style.css'
import './assets/font-awesome.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

> `main.jsx` is the entry point of the entire app.
> CSS imported here is available on every page automatically.
> Bootstrap JS is needed for mobile hamburger menu to work.

---

## 7. Step 6 — Create Folder Structure

In VS Code, right-click on `src/` folder:
- New Folder → `components`
- New Folder → `pages`

No files yet — just the folders.

---

## 8. Step 7 — Setup Routing in App.jsx

Replace `src/App.jsx` with:

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import Contact from './pages/Contact'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
```

### How routing works
- `path="/"` → visiting homepage shows `<Home />` component
- `path="/about"` → shows `<About />` component
- `<BrowserRouter>` → enables URL-based navigation
- Browser will show errors until page files are created (Step 8)

---

## 9. Step 8 — Create Placeholder Pages

Create these 5 files in `src/pages/`. Each is a simple placeholder:

**src/pages/Home.jsx**
```jsx
export default function Home() {
  return <div>Home Page</div>
}
```

**src/pages/About.jsx**
```jsx
export default function About() {
  return <div>About Page</div>
}
```

**src/pages/Services.jsx**
```jsx
export default function Services() {
  return <div>Services Page</div>
}
```

**src/pages/ServiceDetail.jsx**
```jsx
export default function ServiceDetail() {
  return <div>Service Detail Page</div>
}
```

**src/pages/Contact.jsx**
```jsx
export default function Contact() {
  return <div>Contact Page</div>
}
```

Test: visit `localhost:5173` → "Home Page", visit `localhost:5173/about` → "About Page"

---

## 10. Step 9 — Create Header Component

Create `src/components/Header.jsx`:

```jsx
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header_section" id="site-header">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link className="navbar-brand" to="/">
            <img src="/images/img/final_logo.png" alt="" className="img-fluid" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
              <li className="nav-item"><a className="nav-link" href="#team_section">Our Team</a></li>
              <li className="nav-item"><a className="nav-link" href="#contact_section">Contact Us</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  )
}
```

### Changes from original HTML
| HTML | JSX | Reason |
|---|---|---|
| `class=` | `className=` | `class` is reserved in JavaScript |
| `<a href="index.html">` | `<Link to="/">` | React navigation, no page reload |
| `<a href="about.html">` | `<Link to="/about">` | React navigation |
| `<a href="services.html">` | `<Link to="/services">` | React navigation |
| `href="#team_section"` | kept as `<a>` | Anchor scroll links stay as normal `<a>` tags |
| `src="images/..."` | `src="/images/..."` | `/` at start points to `public/` folder |

### Add Header to a page
```jsx
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
      <div>Page content here</div>
    </div>
  )
}
```

---

## 11. Step 10 — Create Footer Component

Create `src/components/Footer.jsx`:

```jsx
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
      <section id="contact_section" className="footer">
        <div className="footer-widgets">
          <div className="row">
            <div className="col-sm-4">
              <div className="footer-widget">
                <h5>CONTACT US</h5>
                <ul className="posts">
                  <li><span>ADDRESS:</span> A/7, Arihant Apartments, Saibaba Nagar, Borivali West, Mumbai 400 092</li>
                  <li><span>PHONE:</span> +91 (22) 28072653 | +91-93249 17517 | +91-9619820027</li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget">
                <h5>OUR PAGES</h5>
                <ul className="posts">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/about">About Us</Link></li>
                  <li><Link to="/services">Services</Link></li>
                  <li><a href="#team_section">Our Team</a></li>
                </ul>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="footer-widget">
                <h5>WORKING DAYS</h5>
                <ul className="posts">
                  <li>Monday to Saturday (10 AM to 7.00PM) <br />Sunday (Week off)</li>
                  <li><span>EMAIL:</span> rachit@bsariya.com <br />baboolal@bsariya.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="copyright">
        <div className="row">
          <div className="col-sm-4">
            <p>Copyright <Link to="/">B Sariya &amp; Associates</Link> All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </>
  )
}
```

> Note: `<br>` in HTML becomes `<br />` in JSX (must be self-closing).
> Note: `&` in HTML becomes `&amp;` in JSX inside text content.

---

## 12. Q&A — Doubts Asked During Conversion

### Q: Why `--template react` in the Vite command?
The `--template react` flag tells Vite to scaffold a JavaScript React project.
Without it, Vite asks you to pick a framework interactively.
Options: `react` (JS), `react-ts` (TypeScript), `vue`, `vanilla`.

### Q: What does "outside bsariya" mean?
It means running the command in the **parent folder** of `bsariya`, not inside it.
If you run `npm create vite@latest bsariya-react` inside `D:\bsariya`, it creates a nested folder `D:\bsariya\bsariya-react` which is messy.
The correct structure is both projects side-by-side:
```
D:\
├── bsariya\        ← old HTML project
└── bsariya-react\  ← new React project
```

### Q: How to go to parent directory?
```powershell
cd ..
```
This moves up one level. From `D:\bsariya` it takes you to `D:\`.

### Q: I can't see the bsariya-react folder in VS Code sidebar?
VS Code was still showing the old `bsariya` folder.
Run `code .` from inside `D:\bsariya-react` to open the new project in VS Code.

### Q: Do I need to create Header/Footer in Step 6?
No. Step 6 only requires creating two empty folders: `components/` and `pages/`.
Header and Footer are created later in Steps 9 and 10.

### Q: I got an error because style.css was not found?
You must copy the CSS files from the old project BEFORE writing import statements.
Order: copy file → then import it. Import fails if file does not exist.

### Q: How to add `<Header />` to a page?
First create the Header component, then in each page file:
```jsx
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Header />
    </div>
  )
}
```
`import` brings the component in. `<Header />` places it on the page like an HTML tag.

---

## 13. HTML to JSX Cheatsheet

| HTML | JSX |
|---|---|
| `class="..."` | `className="..."` |
| `<a href="about.html">` | `<Link to="/about">` |
| `<br>` | `<br />` |
| `<img src="...">` | `<img src="..." />` |
| `<input>` | `<input />` |
| `onclick="fn()"` | `onClick={fn}` |
| `src="images/logo.png"` | `src="/images/logo.png"` |
| `<!-- comment -->` | `{/* comment */}` |
| `for="inputId"` | `htmlFor="inputId"` |
| `style="color:red"` | `style={{ color: 'red' }}` |

---

## 14. Package Reference

### jQuery Plugin → React Equivalent
| jQuery Plugin | React Package | Install Command |
|---|---|---|
| Owl Carousel | swiper | `npm install swiper` |
| Wow.js | aos | `npm install aos` |
| Odometer | react-countup | `npm install react-countup` |
| SlickNav (mobile menu) | Built with React state | No package needed |
| Magnific Popup | Custom or react-modal | `npm install react-modal` |

### Useful Commands
```powershell
npm run dev       # start development server
npm run build     # build for production
Ctrl + C          # stop the server
```

---

*Guide created during B Sariya HTML to React conversion project.*
