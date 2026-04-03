# Rose & Stone Salon — Image Guide

This guide explains exactly how to add real photos to the website. Every image slot is pre-built — you just need to drop in the files.

---

## Quick Start

1. Save your photos to the correct folder (see below)
2. Name them exactly as listed
3. Push to GitHub → Vercel auto-deploys

---

## Image Locations

### Hero Background
**File:** `/public/images/hero-bg.jpg`
**Current:** Already set (the woman with flowing hair)
**Ideal replacement:** A wide, cinematic shot of the salon interior, a styling session in progress, or a beautiful hair close-up. Should be atmospheric with warm, soft lighting.
**Size:** 1920x1080px minimum (landscape)

### Story Section
**File:** `/public/images/salon-interior.jpg` *(currently using gold-texture.jpeg as placeholder)*
**Ideal:** Photo of the salon interior, both stylists together, or a candid moment in the studio. Should feel warm and inviting.
**Size:** 800x1000px minimum (portrait, 4:5 ratio)
**To activate:** In `src/components/Story.tsx`, change `src="/images/gold-texture.jpeg"` to `src="/images/salon-interior.jpg"`

### Stylist Portraits
**Files:**
- `/public/images/betty.jpg` — Betty's portrait (already set)
- `/public/images/bree.jpg` — Bree's portrait (already set)

**Ideal:** Professional headshots or styled portraits. Consistent lighting and background between both photos. Should feel approachable but polished.
**Size:** 800x1000px minimum (portrait, 3:4 ratio)

### Before/After Transformations
**Folder:** `/public/images/transformations/`

**Files needed (6 pairs):**
| Slot | Before | After | Caption Theme |
|------|--------|-------|---------------|
| 1 | `transform-1-before.jpg` | `transform-1-after.jpg` | Brassy to Icy Blonde (Betty) |
| 2 | `transform-2-before.jpg` | `transform-2-after.jpg` | Box Dye Color Correction (Bree) |
| 3 | `transform-3-before.jpg` | `transform-3-after.jpg` | Beachy Balayage (Betty) |
| 4 | `transform-4-before.jpg` | `transform-4-after.jpg` | Warm Copper Transformation (Bree) |
| 5 | `transform-5-before.jpg` | `transform-5-after.jpg` | Lived-In Blonde Refresh (Betty) |
| 6 | `transform-6-before.jpg` | `transform-6-after.jpg` | Thinning Hair Recovery (Bree) |

**To activate:** In `src/components/Transformations.tsx`, change `const hasImages = false` to `const hasImages = true`

**Size:** 600x800px minimum each (portrait, 3:4 ratio)
**Source:** Pull your best before/after shots from Instagram (@bettywiththegoodhair_ and @colourmebree)

### Instagram Feed Section
**Folder:** `/public/images/feed/`

**Files needed (8 photos):**
- `feed-1.jpg` through `feed-8.jpg`

**Ideal:** A mix of finished styles, close-up texture shots, process shots, and candid salon moments. Variety is key.
**Size:** 600x600px minimum (square, 1:1 ratio)
**To activate:** Update `src/components/InstagramFeed.tsx` to use `<Image>` components instead of placeholder divs

---

## Photo Tips for Luxury Feel

1. **Lighting:** Soft, warm, natural light. Avoid harsh flash.
2. **Consistency:** Similar color temperature across all photos.
3. **Composition:** Clean backgrounds, good framing, subject centered.
4. **Quality:** Use highest resolution available. Next.js will optimize automatically.
5. **Variety:** No photo should appear in more than one section.

---

## How Next.js Handles Images

All images use `next/image` which automatically:
- Converts to WebP/AVIF (smaller file size)
- Generates responsive sizes
- Lazy loads images below the fold
- Serves from CDN cache

You don't need to manually compress or resize — just use the highest quality original.

---

## Layout System

The site uses a consistent container: `max-w-[1280px] mx-auto px-6`

When adding new sections, always wrap content in:
```jsx
<div className="w-full max-w-[1280px] mx-auto px-6">
  {/* your content */}
</div>
```

This ensures everything stays centered and aligned across all screen sizes.
