# IMPLEMENTATION_METADATA.md

## Overview
The goal is to enhance the website's SEO and social sharing capabilities by replacing default Bolt previews with a custom site snapshot and implementing a comprehensive metadata structure.

## Proposed Meta Content
The following data will be used to enhance the website's presence across search engines and social media:

- **Title**: "B2B AI Automation Lead Gen Agency | Scale with Intelligent Automation"
- **Description**: "Automate your B2B lead generation with cutting-edge AI. We build custom precision-engineered automation systems that scale your business efficiency and ROI."
- **Keywords**: B2B AI Automation, Lead Gen AI, Sales Automation, Business Efficiency, AI Agency
- **Theme Color**: #000000 (Matches the dark premium aesthetic)

## Implementation Steps

### 1. Site Snapshot Generation
We will capture a high-quality snapshot of the landing page's hero section to replace the current Bolt default image.
- **Process**: Start local development server, use browser automation to capture a 1200x630 (aspect ratio 1.91:1) screenshot of the landing page.
- **Output**: `public/og-image.png`

### 2. Favicon & Branding
- Create or update high-resolution favicons (`favicon.svg`, `apple-touch-icon.png`).
- Host icons in the `/public` directory.

### 3. index.html Cleanup & Enhancement
Update the `<head>` of `index.html` with:
- **Primary Meta Tags**: Standard HTML title, description, and keywords.
- **Open Graph (Facebook/LinkedIn/Discord)**: 
  - `og:type`: website
  - `og:url`: Your deployed URL
  - `og:title`: Branded title
  - `og:description`: Compelling summary
  - `og:image`: Path to the generated snapshot (`/og-image.png`)
- **Twitter Card**:
  - `twitter:card`: summary_large_image
  - `twitter:title`: Branded title
  - `twitter:description`: Compelling summary
  - `twitter:image`: Path to the generated snapshot

### 4. Technical SEO Files
Create standard files for search engine crawlers:
- **`public/robots.txt`**: Standard crawl permissions.
- **`public/sitemap.xml`**: Indexing guide for search engines.

## Success Criteria
- [ ] No more "Bolt" mentions in social media previews.
- [ ] High-quality screenshot of the site appears when the link is shared.
- [ ] SEO titles and descriptions are consistent and professional.
- [ ] Site passes standard SEO metadata audits.
