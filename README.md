# Applegate Christian Schools — Website

**Live URL:** https://www.applegateschool.sc.ke
**Location:** Off Kakamega-Webuye Road, Kakamega, Western Kenya  
**Stack:** Pure HTML5, CSS3, Vanilla JavaScript — no framework, no build step  
**Designed by:** Scaleora Digital  

---

## 📁 Project Structure

```
applegate/
├── index.html          # Main site — all 6 pages (SPA routing)
├── css/
│   └── style.css       # All styles — design tokens, components, responsive
├── js/
│   └── main.js         # All JS — cursor, routing, scroll reveal, form, FAQ
├── .htaccess           # Apache: HTTPS redirect, compression, security, caching
├── robots.txt          # Search engine crawl rules
├── sitemap.xml         # XML sitemap for Google Search Console
└── README.md           # This file
```

---

## 🚀 Deployment via cPanel Git Version Control

1. Push this repo to GitHub
2. Log into cPanel → **Git™ Version Control** → **Create Repository**
3. Toggle **Clone a Repository** ON
4. Enter:
   - **Clone URL:** `https://github.com/YOUR_USERNAME/applegate.git`
   - **Repository Path:** `/home/wwwapple/` *(as shown in your cPanel)*
   - **Repository Name:** `applegate`
5. Click **Create**
6. After cloning, go to **Manage** → **Pull or Deploy** to pull the latest code

> For subsequent updates: push to GitHub → cPanel → Git Version Control → Manage → Pull or Deploy

---

## 📧 Contact Form Setup (Required)

The contact form uses **Web3Forms** for real email delivery (free, no backend needed):

1. Go to [web3forms.com](https://web3forms.com)
2. Enter `admin@applegateschool.sc.ke` → click **Get Access Key**
3. Copy your access key
4. Open `js/main.js`
5. Find `YOUR_WEB3FORMS_ACCESS_KEY` and replace with your real key
6. Save and push to GitHub → redeploy

---

## 🔍 Google Search Console Setup

1. Go to [search.google.com/search-console](https://search.google.com/search-console)
2. Add property → **URL prefix** → enter `https://www.applegateschool.sc.ke`
3. Choose **HTML tag** verification method
4. Copy the `content="..."` value from the meta tag Google gives you
5. Open `index.html`, find the commented-out line:
   ```html
   <!-- <meta name="google-site-verification" content="YOUR_CODE"> -->
   ```
6. Uncomment it and replace `YOUR_CODE` with your actual code
7. Save, push, redeploy → then click **Verify** in Search Console
8. Submit `https://www.applegateschool.sc.ke/sitemap.xml` in the Sitemaps section

---

## 🎨 Brand Colours

| Role | Hex | Usage |
|------|-----|-------|
| Primary Purple | `#8c52ff` | Buttons, headings, nav CTA, accents |
| Purple Dark | `#6b3dd4` | Hover states |
| Alert Red | `#ef0806` | Notice bar only |
| Vibrant Gold | `#f8cb0c` | Hover underlines, icons, warmth accents |
| Near Black | `#100e1d` | Body text, dark sections, footer |

**60-30-10 rule:** White/off-white (60%) · Purple (30%) · Red + Gold (10%)

---

## 🔤 Typography

| Role | Font | Weight | Use |
|------|------|--------|-----|
| Display | Cinzel | 400, 600 | H1–H3, nav logo, footer |
| Serif Accent | Cormorant Garamond | 300, 300i | Sub-headings, testimonials, quotes |
| Body / UI | DM Sans | 300, 400, 500 | Body copy, buttons, labels |


---

## 💳 M-Pesa Payments

| Field | Value |
|-------|-------|
| **Paybill Number** | 928210 |
| **Account Number** | Pupil's Full Name and Class (e.g. *Jane Wanjiku Grade 4*) |
| **After payment** | Send M-Pesa confirmation to 0750 788 257 (WhatsApp) or admin@applegateschool.sc.ke |

---

## 📍 Location & Local SEO Notes

- School is located **off Kakamega-Webuye Road, Kakamega, Western Kenya**
- All SEO content targets Kakamega and Western Kenya (not Nairobi)
- Key ranking keywords: *Christian school Kakamega, CBC school Kakamega, best private school Kakamega, school fees Kakamega*
- Set up **Google My Business** at business.google.com with category "Private School" to appear in local maps searches
- Submit sitemap at search.google.com/search-console after going live
---

## 📱 Pages

| Page | ID | Description |
|------|----|-------------|
| Home | `page-home` | Hero, stats, tiers, why us, faith, testimonials |
| Our Schools | `page-schools` | Early Years, Primary, Junior, Co-curriculars |
| Admissions | `page-admissions` | Process, fees, open days, FAQs |
| Community | `page-community` | Chapel, events, gallery |
| About | `page-about` | Mission, values, history, team, accreditations |
| Contact | `page-contact` | Info card, Web3Forms contact form |

---

## ✅ Features

- **6-page SPA** — instant navigation, no page reloads
- **Custom cursor** — branded dot + ring, gold on hover, auto-disabled on touch
- **Scroll reveal animations** — IntersectionObserver, staggered delays
- **Animated stat counters** — fire once when scrolled into view
- **Real contact form** — Web3Forms API, validation, loading state, error handling
- **WhatsApp floating button** — direct link to school's WhatsApp
- **Back-to-top button** — appears after 400px scroll
- **Mobile navigation** — full-screen overlay hamburger menu
- **FAQ accordion** — keyboard-accessible, ARIA attributes
- **HTTPS redirect** — .htaccess forces SSL + www
- **Gzip compression** — .htaccess mod_deflate
- **Browser caching** — 1-year cache for assets, 1-hour for HTML
- **Security headers** — XSS, clickjacking, MIME-sniffing protection
- **SEO complete** — title, meta, canonical, OG, Twitter Card, Schema.org JSON-LD
- **Accessibility** — semantic HTML, ARIA labels/roles, focus-visible, alt text on all images
- **Mobile-first** — 3 responsive breakpoints (1024px, 768px, 480px)
- **Favicon** — inline SVG, no extra HTTP request
- **Touch fallback** — cursor:none removed on touch/mobile devices

---

## 🌐 Contact

**School:** Applegate Christian Schools, Off Kakamega-Webuye Road, Kakamega, Western Kenya  
**Phone:** 0750 788 257  
**Email:** admin@applegateschool.sc.ke  
**Web:** https://www.applegateschool.sc.ke  

**Built by:** [Scaleora Digital](mailto:admin@scaleora.co.ke)
