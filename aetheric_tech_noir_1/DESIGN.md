---
name: Aetheric Tech-Noir
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b24'
  surface-container: '#1d1f28'
  surface-container-high: '#282a33'
  surface-container-highest: '#32343e'
  on-surface: '#e1e1ee'
  on-surface-variant: '#c3c5d8'
  inverse-surface: '#e1e1ee'
  inverse-on-surface: '#2e3039'
  outline: '#8d90a1'
  outline-variant: '#434655'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#00297a'
  primary-container: '#2f6bff'
  on-primary-container: '#000318'
  inverse-primary: '#0051e0'
  secondary: '#c6c6c7'
  on-secondary: '#2f3132'
  secondary-container: '#454748'
  on-secondary-container: '#b5b5b6'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#cb4f00'
  on-tertiary-container: '#ffffff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#e3e2e3'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1d'
  on-secondary-fixed-variant: '#454748'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7c2d00'
  background: '#11131b'
  on-background: '#e1e1ee'
  surface-variant: '#32343e'
  obsidian-base: '#050505'
  surface-elevation: '#0A0A0A'
  glass-tint: rgba(255, 255, 255, 0.05)
  glass-border: rgba(255, 255, 255, 0.12)
  electric-glow: rgba(47, 107, 255, 0.3)
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 120px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.05em
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 80px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  display-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 56px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  body-md:
    fontFamily: Hanken Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.2em
  mono-data:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
spacing:
  grid-margin-desktop: 5rem
  grid-margin-tablet: 2.5rem
  grid-margin-mobile: 1.5rem
  gutter: 2rem
  section-gap: 12rem
  element-gap: 2.5rem
  technical-line: 1px
---

## Brand & Style

This design system is a premium, high-fidelity manifestation of **Tech-Noir Minimalism**, specifically optimized for expansive desktop environments. It blends the cinematic depth of cyberpunk with the precision of a modern architectural blueprint. The aesthetic is defined by heavy negative space, aggressive geometric fragmentation, and high-energy focal points.

The target audience consists of high-growth technology firms and avant-garde luxury brands that prioritize digital craftsmanship and systematic rigor.

**Core Visual Principles:**
- **Kinetic Fragmentation:** The UI is inspired by the "shattered" geometry of the angular agency logo. Layouts avoid symmetry, favoring clipped edges and interlocking polygonal shapes.
- **Atmospheric Immersion:** By utilizing an absolute black base (#050505), the UI creates a void-like environment where depth is defined by light and glass rather than color or shadow.
- **HUD (Heads-Up Display) Precision:** Technical markers, 1px hairlines, and monospaced data points evoke the feeling of a sophisticated control interface.
- **Wide-Angle Composition:** On desktop, the system utilizes horizontal breadth and intentional "dead zones" (empty columns) to create a sense of scale and exclusivity.

## Colors

The color strategy is "Obsidian-First," designed to eliminate visual noise and focus the user’s eye on active technical elements.

- **Primary (Electric Blue):** Used as a "signal" color. It is reserved for interactive states, progress indicators, and critical data highlights. It should never be used for large backgrounds.
- **Secondary (Technical Silver):** Used for supporting text and iconography to provide legible contrast without the harshness of pure white.
- **Neutral (Obsidian):** The foundation of the system. Transitions between background (#050505) and surface (#0A0A0A) should be nearly imperceptible, differentiated primarily by texture or 1px strokes.
- **Glass System:** Desktop surfaces utilize larger glass planes. These are defined by a 5% white tint and a heavy backdrop blur. The "edge light" is captured by a 12% white border, mimicking the refraction of thick physical glass.

## Typography

Typography is a balance between editorial "brutalist" impact and developer-centric "systemic" utility.

- **Scale:** For wide viewports, we introduce `display-xl` to dominate the horizontal space. Headlines use aggressive negative letter-spacing to feel like solid architectural blocks.
- **Technical Accents:** The Geist font is strictly used for metadata, technical specifications, and navigational labels. These are often presented in all-caps with wide tracking (0.2em) to distinguish them from editorial content.
- **Hierarchy:** High contrast in scale is mandatory. A 120px headline should frequently be paired with 12px technical labels to emphasize the "Micro/Macro" design philosophy.

## Layout & Spacing

The layout is governed by a **12-column Precision Grid** designed for asymmetric wide-screen compositions.

- **The "8+4" and "6+6" Rules:** On desktop, avoid filling the full grid width with text. Prefer spanning content across 8 columns and leaving 4 columns entirely empty to create tension and focus. For image-heavy sections, use 6-column offsets to create staggered, overlapping effects.
- **Asymmetry:** Content should rarely be centered. Align primary headlines to the far left or right of the container, utilizing the 5rem margins as a hard "technical border."
- **Verticality:** Use 1px vertical hairlines that span the entire height of a section to visually connect components and reinforce the grid's presence.
- **Breakpoints:**
  - **Desktop (1440px+):** 12 columns | 5rem margins | 2rem gutters.
  - **Tablet (768px - 1439px):** 8 columns | 2.5rem margins | 1.5rem gutters.
  - **Mobile:** 4 columns | 1.5rem margins | 1rem gutters.

## Elevation & Depth

This system replaces traditional soft-drop shadows with **Luminous Stacking** and **Backdrop Refraction**.

- **Level 0 (The Void):** Pure #050505 background.
- **Level 1 (The Grid):** 1px hairlines and subtle 5% opacity dot-matrix patterns.
- **Level 2 (Refractive Surfaces):** Dark glass cards with a minimum 40px backdrop blur on desktop. These surfaces should feel like heavy panes of glass. They feature a 1px border (`glass-border`) and a subtle diagonal linear gradient (white @ 3% to transparent) to simulate light hitting a surface.
- **Level 3 (Illuminated Actions):** Active elements emit light. Primary buttons feature an external blue glow (`electric-glow`) with a 30px blur and -5px spread to keep the effect "focused" yet ethereal.

## Shapes

The shape language is strictly **Architectural and Asymmetrical**.

- **Sharp Edges:** All base corners have a 0px radius. 
- **Fragmented Clips:** Components like buttons, cards, and image containers must feature "clipped" corners using `clip-path` (diagonal cuts). On desktop, these cuts are typically 24px wide.
- **Geometric Signature:** Apply a clip to only one corner (e.g., top-right) or two opposite corners (top-right and bottom-left) to maintain the fragmented, technical look without becoming repetitive.

## Components

- **Clipped Action Buttons:** Rectangular with 0px radius and a 16px diagonal cut on the top-right corner. Primary buttons are #2F6BFF with white text and a blue holographic glow. Ghost buttons use a 1px `glass-border`.
- **Obsidian Glass Cards:** Large desktop surfaces with 40px backdrop blur. Use a 1px white border at 12% opacity. Add a small 2px Electric Blue "notch" or line segment in one corner to signify status or focus.
- **Technical Nav Bar:** A fixed, full-width 1px bottom-border line. Nav items are Geist-font labels. Upon hover, a 2px blue line "expands" from the center of the item.
- **HUD Input Fields:** No background; only a 1px bottom border. On focus, the border turns Electric Blue, and a subtle glow appears beneath the input. Use Geist for the input text.
- **Data Chips:** Small rectangles with sharp corners. Background is 10% white. Text is Geist 10px uppercase with 0.2em tracking.
- **Crosshair Separators:** Horizontal 1px lines that feature a small "+" or "L" bracket at the intersection of the grid columns, reinforcing the HUD aesthetic.