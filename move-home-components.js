const fs = require('fs');
const path = require('path');

const moves = [
  { 
    from: 'src/components/HeroBanner.tsx', 
    to: 'src/components/home/HeroBanner.tsx' 
  },
  { 
    from: 'src/components/VideoHighlight.tsx', 
    to: 'src/components/home/VideoHighlight.tsx' 
  },
  { 
    from: 'src/components/AmericaBanner.tsx', 
    to: 'src/components/home/AmericaBanner.tsx' 
  },
  { 
    from: 'src/components/ServiceHighlights.tsx', 
    to: 'src/components/home/ServiceHighlights.tsx' 
  },
  { 
    from: 'src/components/FeaturedSlider.tsx', 
    to: 'src/components/home/FeaturedSlider.tsx' 
  }
];

// Create home directory if it doesn't exist
if (!fs.existsSync('src/components/home')) {
  fs.mkdirSync('src/components/home', { recursive: true });
  console.log('Created directory: src/components/home');
}

// Move files
moves.forEach(({ from, to }) => {
  if (fs.existsSync(from)) {
    // Copy file content and write to new location
    try {
      const content = fs.readFileSync(from, 'utf8');
      fs.writeFileSync(to, content);
      // Only delete source file if write was successful
      fs.unlinkSync(from);
      console.log(`Moved: ${from} → ${to}`);
    } catch (err) {
      console.error(`Error moving ${from}: ${err.message}`);
    }
  } else {
    console.log(`Source file not found: ${from}`);
  }
});

console.log('Home component reorganization complete!'); 