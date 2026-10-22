# Company Portfolio Website

A modern, responsive single-page portfolio website built with Tailwind CSS and AOS animations, featuring a complete dark mode implementation.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode Toggle**: Full dark/light mode support with smooth transitions
- **Smooth Animations**: AOS (Animate On Scroll) library for elegant animations
- **Modern UI**: Clean, professional design with gradient accents
- **Performance Optimized**: Lazy loading images and minified CSS
- **Accessibility**: Semantic HTML and keyboard navigation support

## Tech Stack

- HTML5
- Tailwind CSS (compiled locally with dark mode support)
- AOS.js (Animate On Scroll)
- Font Awesome icons
- Google Fonts (Inter)
- Vanilla JavaScript

## Dark Mode Implementation

The website includes a complete dark mode feature:
- **Toggle Button**: Available in both desktop and mobile navigation
- **Class-based Toggle**: Uses Tailwind's `dark:` utility classes
- **Smooth Transitions**: All elements transition smoothly between modes
- **Icon Updates**: Sun/moon icons change based on current mode
- **Comprehensive Coverage**: All sections, components, and elements support dark mode

### Dark Mode Features:
- Toggle buttons in navigation (desktop and mobile)
- Automatic icon switching (sun ☀️ for light mode, moon 🌙 for dark mode)
- All backgrounds, text, borders, and components adapt to dark theme
- Maintains visual hierarchy and readability in both modes
- Does not persist across browser reloads (session-only)

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd company-portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Build the CSS (this is already done, but you can rebuild if needed):
   ```bash
   npm run build
   ```

### Development

To watch for changes and automatically rebuild CSS:
```bash
npm run build-css
```

To serve the website locally:
```bash
npm run serve
```

## Project Structure

```
company-portfolio/
├── index.html          # Main HTML file with dark mode support
├── input.css           # Tailwind CSS source with dark mode styles
├── output.css          # Compiled Tailwind CSS
├── tailwind.config.js  # Tailwind configuration with darkMode: 'class'
├── package.json        # Node.js dependencies
├── js/                 # JavaScript files
├── css/                # Additional CSS files
└── assets/
    └── images/         # Images (logos, projects, etc.)
```

## Customization

### Colors

Edit the `tailwind.config.js` file to customize colors:
- `primary`: Main brand color (blue by default)
- `accent`: Accent color (purple by default)
- `dark`: Dark color palette for text and backgrounds

### Dark Mode

The dark mode implementation uses:
- `darkMode: 'class'` in `tailwind.config.js`
- `dark:` prefix for all dark mode styles
- JavaScript toggle functionality in `index.html`
- Automatic icon switching between sun and moon

### Content

Update the `index.html` file to modify:
- Company name and logo
- Section content
- Contact information
- Project portfolio items
- Testimonials

### Images

Add your images to the `assets/images/` folder and update the image paths in `index.html`:
- `team-photo.jpg` - About section team photo
- `project-1.jpg` to `project-6.jpg` - Portfolio project images
- Logo files as needed

### Animations

AOS animations can be customized by modifying the `data-aos` attributes in the HTML:
- `fade-up`, `fade-down`, `fade-left`, `fade-right`
- `zoom-in`, `zoom-out`
- `slide-up`, `slide-down`, `slide-left`, `slide-right`

## Dark Mode Usage

1. **Toggle Dark Mode**: Click the sun/moon icon in the navigation bar
2. **Mobile Support**: Dark mode toggle is also available in mobile navigation
3. **Visual Feedback**: Icons automatically switch between sun (light) and moon (dark)
4. **Smooth Transitions**: All elements transition smoothly between modes

## Sections

1. **Hero** - Main landing section with call-to-action
2. **About** - Company information and values
3. **Services** - List of services offered
4. **Portfolio** - Showcase of projects
5. **Testimonials** - Client reviews
6. **Contact** - Contact form and information

## Performance Tips

- Images are lazy-loaded using `loading="lazy"`
- CSS is minified for production
- Smooth scrolling is enabled
- AOS animations are optimized for performance
- Dark mode transitions use CSS transitions for smooth experience

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Technical Implementation

### Dark Mode Toggle JavaScript

The dark mode functionality is implemented using:
```javascript
function toggleDarkMode() {
    htmlElement.classList.toggle('dark');
    // Icon switching logic
}
```

### Tailwind Configuration

```javascript
module.exports = {
  darkMode: 'class', // Enable class-based dark mode
  // ... other config
}
```

### CSS Classes

All components use dark mode variants:
```css
.card {
  @apply bg-white dark:bg-gray-800 text-gray-900 dark:text-white;
}
```

## License

This project is open source and available under the MIT License.

## Support

For questions or support, please contact hello@digitalcorp.com
