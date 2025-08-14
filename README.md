# CIRISMedical Website

Official website for CIRISMedical - Bringing physician-supervised AI healthcare to 3.5 billion underserved people worldwide.

## 🏥 Mission

Healthcare for humanity. Using ethical AI to bridge the healthcare gap for half the world's population who lack access to essential medical services.

## 🌍 Overview

This website communicates:
- **WHY**: The humanitarian crisis - someone dies every 4 seconds from lack of basic healthcare
- **WHAT**: Ethical AI working alongside local healers and global physicians
- **HOW**: Domain-routed medical AI with only 1 line of custom code
- **SAFETY**: Comprehensive 5-layer safety architecture
- **LICENSING**: Why medical AI requires CML, not open source (liability & compliance)

## ✨ Key Features

- **Elegant Design**: Beautiful animations including the mesmerizing cursor effect
- **Humanitarian Focus**: Centers the needs of underserved populations
- **Safety Transparency**: Clear explanation of all safety measures
- **CML Licensing**: Detailed rationale for medical-specific licensing
- **Partnership Portal**: Pathways for NGOs, governments, and volunteers

## 🛠️ Technology Stack

Built with modern web technologies:
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TailwindCSS** - Utility-first styling
- **Motion** - Smooth animations (Framer Motion)
- **TypeScript** - Type safety throughout
- **Fumadocs** - Documentation system

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/CIRISAI/CIRISMedical-Website.git
cd CIRISMedical-Website

# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## 📝 Editing Content

The site uses reusable components that abstract complexity. Simply update the props:

```tsx
<HomeHeader
  headline="Healthcare for Humanity."
  subheadline="Bringing physician-supervised AI healthcare to 3.5 billion underserved people"
  description="Every 4 seconds, someone dies from lack of basic healthcare..."
/>
```

TypeScript will show available props on hover in VS Code.

## 📄 Pages Structure

- **`/`** - Homepage with humanitarian mission focus
- **`/safety`** - 5-layer safety architecture explanation
- **`/licensing`** - Why CML instead of open source
- **`/technology`** - Domain routing and technical details
- **`/partnership`** - Join the mission (NGOs, governments, doctors)
- **`/impact`** - Stories and statistics of lives changed

## 🚨 Critical Information

### Medical Liability Warning
⚠️ This represents **medical software**. All content must be reviewed by:
- Licensed medical professionals
- Legal counsel specializing in medical liability
- Regulatory compliance experts

### Not Open Source
🔒 CIRISMedical uses the **CIRIS Medical License (CML)** due to:
- Medical liability requirements
- FDA compliance needs
- Patient safety obligations
- Physician supervision mandates

### Safety Commitments
✅ Every page emphasizes that CIRISMedical:
- **Never** replaces doctors
- **Requires** physician supervision
- **Defers** high-risk decisions to humans
- **Maintains** 7-year audit trails (FDA requirement)
- **Blocks** autonomous diagnosis/prescription

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel deploy
```

### Cloudflare Pages
```bash
npm run build
# Deploy the .next folder
```

### Docker
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "start"]
```

## 🤝 Partnership Opportunities

### For NGOs
- Deploy in field operations
- Training and support provided
- Reduced licensing fees

### For Governments
- National health system integration
- Rural healthcare expansion
- Reduce urban hospital burden

### For Medical Volunteers
- Supervise AI remotely
- Multiply your impact
- Save lives globally

## 📞 Contact

- **Medical Inquiries**: medical@cirismedical.ai
- **Humanitarian Partnerships**: humanitarian@cirismedical.ai
- **Technical Questions**: tech@cirismedical.ai
- **Licensing**: licensing@cirismedical.ai

## 🙏 Acknowledgments

Built with love by the CIRIS team, inspired by:
- The 3.5 billion people without healthcare access
- Community health workers worldwide
- Traditional healers preserving cultural medicine
- Volunteer physicians dedicating their expertise
- Martin's elegant design aesthetic (that cursor animation! ✨)

## 📜 License

Website content: © 2025 CIRIS L3C
CIRISMedical software: CIRIS Medical License (CML)
CIRISAgent (non-medical): CIRIS Covenant (open source)

---

**"Healthcare is a human right. Let's make it a reality."**

*Every 4 seconds matters. Join us in democratizing healthcare access.*