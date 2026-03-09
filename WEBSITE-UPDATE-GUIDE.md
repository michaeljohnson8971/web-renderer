# DABL Studio — Website Update Guide

This guide maps every placeholder and editable content item across the site, organized by page. Use it to quickly find and update text, images, links, and configuration.

---

## Table of Contents

1. [Global (Header, Footer, Meta)](#global)
2. [Home Page](#home-page)
3. [About Page](#about-page)
4. [Services Page](#services-page)
5. [Portfolio Page (unpublished)](#portfolio-page)
6. [Images & Assets](#images--assets)
7. [Power Automate Integration](#power-automate-integration)

---

## Global

### Site Meta Tags & SEO
**File:** `index.html`

| Line | Item | Current Value |
|------|------|---------------|
| 22 | Page title | `DABL Studio \| Economic Development Strategy & Consulting` |
| 23 | Meta description | `DABL Studio is an economic development consultancy...` |
| 25 | Keywords | `economic development, community investment...` |
| 29 | OG URL | `https://dablstudio.com/` |
| 30 | OG title | Same as page title |
| 32 | OG image | `https://dablstudio.com/og-image.png` ⚠️ **PLACEHOLDER — file does not exist yet** |
| 39 | Twitter image | Same as OG image ⚠️ **PLACEHOLDER** |
| 45 | Canonical URL | `https://dablstudio.com/` |

**To update:** Edit the values directly in `index.html`. You'll also need to create/upload an `og-image.png` to the `public/` folder (recommended 1200×630px).

---

### Header / Navigation
**File:** `src/components/Header.tsx`

| Line | Item | Current Value |
|------|------|---------------|
| 19–24 | Brand name | `DABL` / `Studio` |
| 10–13 | Nav items | `Home`, `About`, `Work & Services` |

**To update:** Edit the `navItems` array (line 9–13) or the brand text (lines 19–24).

---

### Footer
**File:** `src/components/Footer.tsx`

| Line | Item | Current Value |
|------|------|---------------|
| 9–10 | Brand name | `DABL Studio` |
| 12–13 | Tagline | `Economic development consultancy working with cities...` |
| 31 | Email | `hello@dablstudio.com` |
| 36 | LinkedIn URL | `https://linkedin.com` ⚠️ **PLACEHOLDER — not a real profile link** |
| 50 | Privacy Policy | Static text, not linked ⚠️ **PLACEHOLDER** |

**To update:** Replace the LinkedIn `href` (line 36) with your actual profile URL. Add a real link to the Privacy Policy text (line 50).

---

## Home Page
**File:** `src/pages/Home.tsx`

### Hero Section (lines 73–107)
| Line | Item | Current Value |
|------|------|---------------|
| 76 | Hero image | `src/assets/hero-cityscape.jpg` (imported) |
| 84–86 | Headline | `Building Stronger Local Economies...` |
| 87–88 | Subheadline | `Economic development consultancy working with cities...` |
| 95 | CTA button text | `Let's Talk` |
| 102 | Secondary CTA text | `View Work & Services` |

### Value Pillars (lines 5–21)
Edit the `valuePillars` array. Each object has `title` and `description`.

### Professional Overview (lines 129–151)
| Line | Item |
|------|------|
| 134 | Section heading (`DABL Studio`) |
| 137 | First paragraph — company description |
| 140 | Second paragraph — company approach |

### Areas of Work (lines 23–48)
Edit the `expertise` array. Each object has `title`, `description`, and `items` (bullet list).

### Selected Experience (lines 50–67)
Edit the `experiences` array. Each object has `title` and `description`.

### Bottom CTA (lines 205–224)
| Line | Item |
|------|------|
| 207–208 | Heading |
| 210–211 | Description |

---

## About Page
**File:** `src/pages/About.tsx`

### Hero Section (lines 64–80)
| Line | Item |
|------|------|
| 70–71 | Headline (`The Work Behind the Work`) |
| 73–76 | Description |

### Bio / Founder Section (lines 83–125)
| Line | Item |
|------|------|
| 88 | Profile photo — `src/assets/about-profile.jpg` |
| 97–98 | Section heading |
| 101–120 | Bio paragraphs (3 paragraphs of text) |

### Credentials (lines 6–35)
Edit the `credentials` array. Three categories:
- **Education** — degree names (lines 11–12)
- **Professional Background** — experience items (lines 19–22)
- **Sector Experience** — sector items (lines 29–32)

### Values (lines 37–58)
Edit the `values` array. Each object has `title` and `description`.

### Values Image (line 185)
Uses `src/assets/community-engagement.jpg`.

### Bottom CTA (lines 208–225)
| Line | Item |
|------|------|
| 210–211 | Heading |
| 213–215 | Description |

---

## Services Page
**File:** `src/pages/Services.tsx`

### Hero Section (lines 120–141)
| Line | Item |
|------|------|
| 125–126 | Headline (`How We Work`) |
| 128–129 | Description |
| 134 | Hero image — `src/assets/community-planning.jpg` |

### Service Areas (lines 8–25)
Edit the `services` array. Four categories, each with `title` and `items` (bullet list).

### Engagement Models (lines 34–38)
Edit the `engagementModels` array. Each has `title` and `description`.

### Methodology (lines 27–32)
Edit the `methodology` array. Each has `step`, `title`, and `description`.

### Client Types (lines 40–45)
Edit the `clientTypes` array. Each has:
- `category` — group name
- `image` — ⚠️ **ALL USE `/placeholder.svg`** — replace with real images
- `items` — bullet list

**To update images:** Replace `/placeholder.svg` with paths to real images. Either:
1. Add images to `public/` folder and use `/your-image.jpg`
2. Add images to `src/assets/` and import them at the top of the file

### Contact Form (lines 250–316)
| Line | Item |
|------|------|
| 260 | Contact email | `hello@dablstudio.com` |
| 47 | Inquiry types dropdown | `inquiryTypes` array |
| 48 | Referral sources dropdown | `referralSources` array |

---

## Images & Assets

### Current images in `src/assets/`:
| File | Used In | Description |
|------|---------|-------------|
| `hero-cityscape.jpg` | Home hero | Main homepage background |
| `about-profile.jpg` | About bio section | Founder/team photo |
| `community-engagement.jpg` | About values section | Community photo |
| `community-planning.jpg` | Services hero | Planning session photo |

### Placeholder images needing replacement:
| Location | File | Current Value |
|----------|------|---------------|
| Services — Client Types (×4) | `src/pages/Services.tsx` line 41–44 | `/placeholder.svg` |
| OG/social share image | `index.html` line 32, 39 | `og-image.png` (doesn't exist) |

**To replace:** Add your images to `src/assets/`, import them at the top of the file, and replace the `/placeholder.svg` references.

---

## Power Automate Integration
**File:** `src/pages/Services.tsx`, line 67

```typescript
const POWER_AUTOMATE_WEBHOOK_URL = "";
```

**To activate:**
1. Create a Power Automate flow with a "When an HTTP request is received" trigger
2. Copy the HTTP POST URL from the trigger
3. Paste it as the value of `POWER_AUTOMATE_WEBHOOK_URL`

The form sends this JSON payload:
```json
{
  "name": "string",
  "email": "string",
  "phone": "string | null",
  "organization": "string",
  "inquiryType": "string | null",
  "referralSource": "string | null",
  "message": "string",
  "submittedAt": "ISO 8601 datetime"
}
```

Use this schema when configuring the "Parse JSON" step in Power Automate.

---

## Quick Checklist

- [ ] Replace LinkedIn placeholder URL in Footer
- [ ] Add Privacy Policy link in Footer
- [ ] Replace 4× Client Types placeholder images
- [ ] Replace 4× Portfolio project placeholder images
- [ ] Create and upload `og-image.png` (1200×630px)
- [ ] Add Power Automate webhook URL
- [ ] Review all bio/description text for accuracy
- [ ] Update canonical URL if not using `dablstudio.com`
- [ ] Publish Portfolio page when ready (see instructions above)
