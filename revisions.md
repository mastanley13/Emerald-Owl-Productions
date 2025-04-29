# EmeraldOwlProductions — Next.js Rebuild Revision Brief
*(Compiled from Michael Meyer’s 29-minute walkthrough; treat every line as an action item unless marked “optional.”)*

---

## 0. Top-Level Priorities (do these first)

| Priority | Why it matters | What to do |
|----------|----------------|------------|
| **A. Fix Google/SEO presence** | Search results lead with old “Slime” content and no description (misrepresents brand). | • Add concise meta description & schema to the home page.<br>• Audit & update Open Graph/Twitter cards.<br>• Remove/de-index outdated Slime media; publish fresh laser/glow assets.<br>• Verify & refresh Google Business Profile. |
| **B. Unify IA & navigation** | Current pages are repetitive, misplaced, or broken. | • Final nav: **Home · Experiences · Initiatives · Pricing · Resources · Blog · Contact**.<br>• Move *Fundraisers* & *Gunge* under **Experiences**.<br>• Group *Do It Now*, *Dripping in Confidence*, *Green Light Movement* in **Initiatives** (link Dripping externally). |
| **C. Global design system** | Black background + neon-green text is hard to read; layouts inconsistent. | • Use white/light backgrounds; reserve dark strips for accent only.<br>• Replace neon-green copy with #FFFFFF or brand accent.<br>• Standard hero: 100 % width image/video, 60 vh max, white overlay title. |
| **D. Performance & mobile** | Hero video stalls on mobile; menu links fail (Laser Show tab). | • Lazy-load videos; prefer YouTube embed.<br>• Compress images; hero ≤ 1920 × 1080.<br>• QA mobile nav; fix broken links. |

---

## 1. Global Content & Style Rules

1. **Typography & alignment**  
   * Titles centered.  
   * Body text left-aligned.  
   * Base font 16 px; headings 24–32 px; line-height 1.6.  
2. **Call-to-Action placement** – one primary CTA per page (e.g., **Book Consultation**) above the fold and again at bottom.  
3. **Anchor-link sections** – Safety & Benefits pages get clickable bullets that smooth-scroll to matching sections. Add return-to-top button.  
4. **Pricing** – strip all inline pricing; create a single `/pricing` page & link from footer + every experience page.  
5. **Media sizing** – hero ≤ 60 vh; gallery uses 3-wide thumbnail grid; videos always top, 16∶9 ratio, poster image set.  

---

## 2. Page-by-Page Changes

| Page | Issues | Fixes |
|------|--------|-------|
| **Home** | • Green divider lines missing on homepage.<br>• Heavy hero video. | • Add green accent lines under nav.<br>• Replace hero with lighter 10-s loop (muted). |
| **Experiences** | Big slider forces vertical scroll. | Replace with thumbnail cards for each product. |
| **Laser Show** | Centered paragraphs, stray symbol, duplicate pricing. | Left-align text; remove broken symbol & pricing; add anchor bullet list. |
| **Safety** | Buried under Laser Show. | Stand-alone `/safety` page; bullet links jump to detail sections. |
| **Benefits** | Nested, dark theme. | Own `/benefits` page mirroring Safety layout; light background. |
| **Neon Nights** | Dark palette; add-ons look core. | Bright gradient background; “Optional Add-Ons” band linking to Foam, Glow Sports, Paint. |
| **Foam Parties** | CTA before explanation; huge photos. | Top highlight video; benefits grid; trim gallery to 6 thumbs. |
| **Sensory Friendly** | Wrong hero (lasers in snow); unsuitable video. | Replace hero with calm scene; delete video & pricing; await new copy. |
| **Water Games** | Hero too tall; big video. | Crop hero; play-icon overlay; 4-shot grid gallery. |
| **Celebrate America** | Video hidden low; dark theme. | Move video to hero; add red-white-blue accents. |
| **Special Occasions** | Broken “Upcoming events”; hero crop. | Remove link; adjust hero crop. |
| **Fundraisers** | Incomplete; children video privacy. | Promote to top nav; placeholder “Coming soon”; remove video. |
| **Gunge / Dripping** | Wrong hierarchy. | *Gunge* ➜ service; *Dripping in Confidence* ➜ external link. |
| **Initiatives (new)** | Needed hub. | Card grid for three initiatives. |
| **Our Team** | Outdated staff list. | Remove Jenny M., Carrie J., Jesse; add new roster. |
| **Gallery** | Overloaded. | Option A (remove) or Option B (minimal grid per experience). |
| **Careers** | Empty. | Remove link. |
| **Blog** | OK. | — |
| **Resources (new)** | Needed for laser-education. | Placeholder page. |

---

## 3. Technical Checklist (Next.js)

* **Routing** – use `app/` router with dynamic `[slug]` for experiences.  
* **CMS** – Markdown or Sanity/Strapi for copy editing.  
* **Image & Video** – `next/image` (WebP); lazy video via `<video>` or `react-player`.  
* **Styling** – Tailwind custom theme (`emerald`, `glow-green` accents). Optional dark-mode toggle.  
* **Accessibility/SEO** – alt text, semantic headings, Lighthouse > 90 mobile & desktop.  
* **Analytics** – GA4 + CTA event tracking.  

---

## 4. Pending Client Inputs

| Needed from Client | Purpose |
|--------------------|---------|
| New copy for Safety, Benefits, Sensory Friendly, Fundraisers, Pricing | Populate pages |
| Updated staff list & photos | Our Team |
| Final brand palette & fonts | Design system |
| External URLs for Do It Now, Green Light Movement | Initiatives hub |
| Approved hero videos (compressed) | Top sections |
| Decision: Keep or drop Gallery at MVP | Project scope |

---

