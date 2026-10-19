# Portfolio — Ayomide Oloyede

This is a modern, responsive portfolio scaffold built with HTML, CSS, and vanilla JavaScript. It includes:
- Hero, About, Skills, Projects, Contact, Footer
- AOS scroll animations, Typed.js, GSAP micro-animations
- Particle canvas background
- Dark/light toggle
- Contact form (client-side demo)
- Responsive styles

## Structure
portfolio/
├── index.html
├── css/
│   ├── style.css
│   ├── animations.css
│   └── responsive.css
├── js/
│   ├── script.js
│   ├── animation.js
│   └── particles.js
├── images/
│   ├── profile.png
│   ├── about.jpg
│   └── projects/
├── resume/
│   └── Ayomide_Oloyede_CV.pdf
└── README.md

## Setup
1. Replace placeholder images in `images/` (profile, about, project screenshots).
2. Place your CV at `resume/Ayomide_Oloyede_CV.pdf`.
3. Update links (GitHub, LinkedIn, email) in `index.html`.
4. Open `index.html` in a browser to preview.
5. Deploy: push to GitHub and enable GitHub Pages, or deploy to Netlify/Vercel.

## Notes
- Contact form is a client-side demo. Hook it to an email provider (Formspree, Netlify forms, or your backend) to receive messages.
- To convert to React / Next.js, use this structure as a reference and port components.

# README additions — image workflow & filenames

Place your high-resolution source images in:
- images/originals/profile.jpg
- images/originals/about.jpg
- images/originals/ai-pdf.jpg
- images/originals/school.jpg
- ... (other project originals)

Generate responsive images (requires Node.js and sharp):
1. Install sharp: `npm install sharp`
2. Run the helper script for each source:
   - `node scripts/generate-images.js images/originals/profile.jpg profile`
   - `node scripts/generate-images.js images/originals/about.jpg about`
   - `node scripts/generate-images.js images/originals/ai-pdf.jpg projects/ai-pdf`
   - `node scripts/generate-images.js images/originals/school.jpg projects/school`

This produces:
- images/profile-1200.jpg, profile-800.jpg, profile-400.jpg
- images/about-1200.jpg, about-800.jpg, about-400.jpg
- images/projects/ai-pdf-1200.jpg, ai-pdf-800.jpg, ai-pdf-400.jpg
- images/projects/school-1200.jpg, school-800.jpg, school-400.jpg
and so on.

Finally:
- Put your resume at `resume/Ayomide_Oloyede_CV.pdf`.
- Update `index.html` placeholders:
  - Email (mailto:)
  - LinkedIn URL
  - Any project Live Demo / GitHub links