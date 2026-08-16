# SOAR website design direction

## Three possible approaches

### Theme Name: Sunlit Study Hall
Very Brief Intro: A warm, editorial academic identity built from deep navy, paper white, sky blue, and the supplied gold mark. The experience feels organized and optimistic, like a well-run student study hall with sunlight across the desks.
Probability: 0.04

### Theme Name: Blue Hour Bulletin
Very Brief Intro: A dark, high-contrast bulletin-board aesthetic with electric blue accents, compact labels, and restrained glow. It emphasizes momentum and student initiative without drifting into a generic technology aesthetic.
Probability: 0.03

### Theme Name: Field Notes for Learning
Very Brief Intro: A tactile, documentary-inspired system using cream paper tones, ink-blue typography, hand-drawn rules, and modular note cards. It makes the site feel personal, resourceful, and grounded in real student work.
Probability: 0.02

## Chosen approach: Sunlit Study Hall

### Design Movement
Contemporary editorial education design with a civic-poster sensibility: clear hierarchy, generous paper-like space, and energetic primary-color accents used as signals rather than decoration.

### Core Principles
1. **Make progress legible.** Every section should explain what a student can do next: join, learn, practice, or contribute.
2. **Let the mark lead.** The supplied SOAR symbol is the visual anchor; the rest of the system supports its navy-and-gold contrast.
3. **Organize without institutional stiffness.** Use clean modules and clear labels, but soften the structure with curved shapes, warm surfaces, and peer-first language.
4. **Use proof carefully.** Impact numbers and coverage are presented as evidence with visible source context, not as inflated marketing.

### Color Philosophy
Deep navy creates trust and focus; golden yellow carries the warmth of peer encouragement and echoes the supplied mark; sky blue gives the site breathing room and a sense of open possibility; warm white keeps the whole experience closer to a printed study guide than a corporate dashboard. The ownable brand color is **SOAR Gold #F7C947**, used for key actions and active moments.

### Layout Paradigm
A staggered editorial flow rather than a centered marketing grid. The hero uses a two-column split with the logo and message on the left and a tall “study desk” visual field on the right. Content sections alternate between wide statements, offset cards, and rail-like labels so the page feels assembled like a thoughtful bulletin board.

### Signature Elements
- Navy “chapter labels” in small uppercase type with generous letter spacing.
- Gold marker strokes and soft oval shapes behind selected words or icons.
- A recurring open-book / orbit line motif rendered as thin sky-blue rules and curved borders.

### Interaction Philosophy
Interactions should feel like arranging useful notes: hover states lift cards slightly, filters update immediately, and buttons compress on press. Nothing should feel flashy or game-like; motion should reward orientation and make the next step clearer.

### Animation
Use short 180–240ms transitions for buttons, cards, and navigation. Reveal section elements with small upward movement and opacity only, staggered by 40–60ms. Allow the hero’s gold orb and orbit line to drift subtly when motion is allowed. Respect `prefers-reduced-motion` by disabling non-essential movement.

### Typography System
Headings use **Fraunces** in a confident editorial style with semibold to bold weights. Body and UI copy use **DM Sans** for clarity and friendliness. H1 is large and compact with controlled line length; section titles use Fraunces with a slight negative tracking; labels, buttons, and metadata use DM Sans semibold with intentional uppercase tracking.

### Brand Essence
SOAR is the student-led academic support network for learners who want a clearer path through the material, built by peers who have recently navigated it themselves. Personality: **encouraging, organized, capable**.

### Brand Voice
Headlines are specific, active, and confidence-building. CTAs sound like invitations into a community, not conversion language. Microcopy is concise and transparent about what is live versus placeholder.

Example lines:
- “Bring the question. Leave with a plan.”
- “Study with someone who remembers the hard part.”

### Wordmark & Logo
Use the supplied rocket-and-pencil symbol as the primary mark. Pair it with a custom-spaced uppercase SOAR wordmark in Fraunces semibold, with “STUDENT ORGANIZED ACADEMIC REFINEMENT” set as a small supporting line. The mark should remain recognizable at small sizes and sit in a gold square or circular seal when used as a favicon-style element.

### Signature Brand Color
SOAR Gold `#F7C947` — the warm, unmistakable accent that links the supplied logo to active states, highlights, and calls to action.

## Style Decisions
- Use the supplied logo as the only photographic/illustrative brand asset; build supporting visuals with CSS shapes and iconography.
- Keep the page light and paper-like, with deep navy sections used as visual anchors rather than a full dark theme.
- Treat organization-provided metrics as current supplied figures and distinguish them from independently sourced coverage.
- Never imply school endorsement, formal affiliation, or guaranteed outcomes.
