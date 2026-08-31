---
name: Aetheric Tech-Noir
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c3c5d8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8d90a1'
  outline-variant: '#434655'
  surface-tint: '#b5c4ff'
  primary: '#b5c4ff'
  on-primary: '#00297a'
  primary-container: '#2f6bff'
  on-primary-container: '#000318'
  inverse-primary: '#0051e0'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#c7c6c6'
  on-tertiary: '#2f3131'
  tertiary-container: '#767777'
  on-tertiary-container: '#040505'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b5c4ff'
  on-primary-fixed: '#00174d'
  on-primary-fixed-variant: '#003cac'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e3e2e2'
  tertiary-fixed-dim: '#c7c6c6'
  on-tertiary-fixed: '#1a1c1c'
  on-tertiary-fixed-variant: '#464747'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
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
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Hanken Grotesk
    fontSize: 18px
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
    letterSpacing: 0.15em
  mono-data:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.4'
    letterSpacing: 0em
spacing:
  grid-margin: 4rem
  grid-margin-mobile: 1.5rem
  gutter: 1.5rem
  section-gap: 8rem
  element-gap: 2rem
  technical-line-weight: 1px
---

## Brand & Style

This design system embodies a premium, futuristic, and highly technical aesthetic designed for a high-end digital agency. The visual narrative is driven by **Tech-Noir Minimalism**—a blend of deep cinematic blacks, precision engineering, and ethereal glass layers. 

The brand personality is authoritative, cutting-edge, and uncompromising. It targets high-growth tech firms and luxury brands that value precision and avant-garde thinking. 

**Core Visual Principles:**
- **Fragmented Geometry:** Inspired by the sharp, angular nature of the logo, the UI utilizes asymmetrical shapes and clipped corners to create a sense of motion and digital "shattering."
- **Deep Negative Space:** Large expanses of pure black (#050505) prioritize content and create a high-contrast environment for electric blue accents to pop.
- **Dark Glassmorphism:** Semi-transparent surfaces with heavy backdrop blurs (20px+) provide depth without breaking the dark, immersive atmosphere.
- **Technical Rigor:** Use of subtle 1px grid patterns and thin hairlines to evoke a "blueprint" or "HUD" (Heads-Up Display) feeling.

## Colors

The palette is strictly limited to maintain a high-end, technical feel.

- **Primary (Electric Blue):** Reserved for high-priority actions, focus states, and key data visualizations. It should be used sparingly to maximize impact against the dark backdrop.
- **Background & Surface:** The base is a deep obsidian (#050505). Secondary surfaces (#0A0A0A) use subtle tonal shifts to define hierarchy.
- **Glass System:** Translucent layers use a white tint at 5% opacity to create a "frosted obsidian" effect. This is paired with a 12% opacity white border to catch light, mimicking the edges of a physical glass pane.
- **Functional Gradients:** Use linear gradients from `primary_color_hex` to a transparent state for "glow" effects and directional lighting.

## Typography

The typography system relies on two high-performance typefaces: **Hanken Grotesk** for editorial impact and **Geist** for technical precision.

- **Editorial Presence:** Large headlines use tight tracking and heavy weights to create a "brutalist luxury" feel. Display sizes should be used for hero sections and major transitions.
- **Technical Labels:** Small uppercase labels using Geist (a developer-centric font) are used for category tags, breadcrumbs, and metadata to reinforce the futuristic/systemic theme.
- **Contrast:** High contrast between oversized headlines and small, spaced-out technical labels is a signature of this design system.

## Layout & Spacing

The layout is built on a **12-column precision grid** with significant negative space.

- **Composition:** Avoid centered layouts. Use asymmetrical alignments where content is pushed to the edges or spans across 8 columns, leaving 4 columns of empty space for atmospheric "breathing room."
- **Technical Accents:** Use 1px vertical and horizontal lines (at `glass_border` opacity) to visually subdivide sections. These lines should extend to the edges of the viewport to create a continuous "HUD" feel.
- **Breakpoints:**
  - **Desktop (1440px+):** 12 columns, 4rem margins.
  - **Tablet (768px - 1439px):** 8 columns, 2.5rem margins.
  - **Mobile (Up to 767px):** 4 columns, 1.5rem margins.

## Elevation & Depth

Hierarchy is established through **optical transparency** and **luminous glows** rather than traditional shadows.

- **Stacking Order:**
  - **Level 0 (Base):** #050505 background.
  - **Level 1 (Sub-surface):** Subtle 1px grid pattern overlays.
  - **Level 2 (Glass Layers):** Glass surfaces with 24px-40px backdrop blurs. These surfaces catch light only at the edges.
  - **Level 3 (Interactive):** Elements that "emit" light. Primary buttons and active states feature a soft blue outer glow (blur: 20px, spread: -5px, opacity: 0.3) to simulate a holographic projection.
- **Reflections:** Glass cards should feature a very subtle diagonal linear gradient (white at 3% to transparent) to mimic a light reflection on a screen.

## Shapes

The design system rejects traditional rounded corners in favor of **architectural angularity.**

- **Corner Treatment:** All primary containers use a 0px radius (sharp corners). 
- **Clipped Corners:** Use CSS `clip-path` (polygon) to create 16px-24px diagonal cuts on the top-right or bottom-left corners of cards and buttons. This mimics the fragmented geometry of the logo.
- **Asymmetry:** When clipping corners, only clip one or two non-adjacent corners to maintain a dynamic, non-uniform silhouette.

## Components

- **Floating Glass Navigation:** A fixed-position glass bar with a thin 1px border. On scroll, the background blur increases to ensure legibility over page content.
- **Asymmetrical Cards:** Containers with 0px radius and one diagonal "clipped" corner. The border should be a subtle white (12% opacity), with the electric blue used only for a small 2px "status indicator" line in the corner.
- **Buttons:**
  - **Primary:** Clipped-corner rectangle, Electric Blue background, white text. No rounded corners. Features a soft blue "inner glow."
  - **Ghost:** 1px white border (20% opacity), sharp corners, text in uppercase Geist.
- **Form Inputs:** Pure black backgrounds with 1px bottom-borders only. Upon focus, the border transitions to Electric Blue and emits a subtle blue glow beneath the field.
- **Chips / Tags:** Small, rectangular Geist-font labels with a semi-transparent white background and sharp corners.
- **Technical Separators:** 1px horizontal lines that feature a 4px "notch" or "crosshair" detail at the intersections of the grid.