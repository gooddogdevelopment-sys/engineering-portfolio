# Engineering Portfolio

A modern, responsive portfolio website showcasing professional experience, technical skills, and software engineering projects. Built with Next.js 16, React 19, and Mantine UI components.

## Features

- **Professional Introduction** - Overview of experience and expertise
- **Work Experience** - Detailed employment history with achievements and technologies
- **Technical Skills** - Comprehensive list of programming languages, frameworks, and tools
- **Project Showcase** - Portfolio of personal and professional projects with detailed descriptions
- **Education** - Academic background and certifications
- **Responsive Design** - Optimized for all device sizes
- **Performance Optimized** - Built with Next.js for fast page loads and SEO
- **Analytics Integration** - Google Analytics tracking for visitor insights

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Component Library**: Mantine UI 8.3
- **Styling**: Tailwind CSS 4 + PostCSS
- **Icons**: Tabler Icons, React Icons
- **Language**: TypeScript
- **Package Manager**: pnpm
- **Deployment**: Firebase Hosting
- **Analytics**: Google Analytics (via @next/third-parties)

## Getting Started

### Prerequisites

- Node.js 20 or higher
- pnpm 10.11.0 or higher

### Installation

```bash
# Install dependencies
pnpm install
```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_GA_ID=your_google_analytics_id
```

### Development

```bash
# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
pnpm build

# Start production server
pnpm start
```

### Code Quality

```bash
# Run ESLint
pnpm lint

# Fix ESLint issues
pnpm lint:fix

# Format code with Prettier
pnpm format

# Check formatting
pnpm format:check
```

### Lighthouse CI

```bash
# Run Lighthouse CI for performance audits
pnpm lhci
```

## Project Structure

```
├── app/
│   ├── components/          # React components
│   │   ├── Header.tsx
│   │   ├── Intro.tsx
│   │   ├── WorkExperience.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── AdditionalTools.tsx
│   │   └── Education.tsx
│   ├── data/               # Data files
│   │   ├── projects.ts
│   │   └── workExperience.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
│   ├── documents/          # Resume/CV files
│   └── img/               # Project images
├── .firebase/
├── firebase.json
└── package.json
```

## Deployment

This project is configured for deployment to Firebase Hosting:

```bash
# Build the static export
pnpm build

# Deploy to Firebase
firebase deploy
```

The `firebase.json` configuration exports the static site to the `out` directory.

## Customization

### Adding Projects

Edit `app/data/projects.ts` to add or modify projects. Each project includes:

- Title, description, and images
- Technologies and tags
- Status and completion date
- Live URL and GitHub repository
- Capabilities and future improvements

### Updating Work Experience

Edit `app/data/workExperience.ts` to update employment history with:

- Job title and company
- Duration and description
- Technologies used
- Key achievements

### Modifying Components

All UI components are located in `app/components/` and can be customized to fit your needs.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Brandon Decker - Senior Software Engineer

Visit the live site to view contact information and download resume.
