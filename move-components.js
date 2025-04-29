const fs = require('fs');
const path = require('path');

// Define the moves we want to make
const moves = [
  { src: 'src/components/Header.tsx', dest: 'src/components/shared/Layout/Header.tsx' },
  { src: 'src/components/Footer.tsx', dest: 'src/components/shared/Layout/Footer.tsx' },
  { src: 'src/components/Newsletter.tsx', dest: 'src/components/shared/UI/Newsletter.tsx' },
  { src: 'src/components/ImageSlider.tsx', dest: 'src/components/shared/UI/ImageSlider.tsx' },
  { src: 'src/components/HeroBanner.tsx', dest: 'src/components/home/HeroBanner.tsx' },
  { src: 'src/components/ServiceHighlights.tsx', dest: 'src/components/home/ServiceHighlights.tsx' },
  { src: 'src/components/VideoHighlight.tsx', dest: 'src/components/home/VideoHighlight.tsx' },
  { src: 'src/components/AmericaBanner.tsx', dest: 'src/components/home/AmericaBanner.tsx' },
  { src: 'src/components/FeaturedSlider.tsx', dest: 'src/components/home/FeaturedSlider.tsx' }
];

// Create directories if they don't exist
const directories = [
  'src/components/shared/Layout',
  'src/components/shared/UI',
  'src/components/home'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Move files
moves.forEach(({ src, dest }) => {
  try {
    if (fs.existsSync(src)) {
      // Ensure directory exists
      const destDir = path.dirname(dest);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      
      // Read the source file
      const content = fs.readFileSync(src, 'utf8');
      
      // Write to destination
      fs.writeFileSync(dest, content);
      
      // Only delete the source file if the write was successful
      fs.unlinkSync(src);
      
      console.log(`Moved: ${src} → ${dest}`);
    } else {
      console.log(`Source file not found: ${src}`);
    }
  } catch (error) {
    console.error(`Error moving ${src} to ${dest}:`, error);
  }
});

console.log('Component reorganization complete!'); 