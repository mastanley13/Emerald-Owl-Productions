const fs = require('fs');
const path = require('path');

const moves = [
  { 
    from: 'src/components/Header.tsx', 
    to: 'src/components/shared/Layout/Header.tsx' 
  },
  { 
    from: 'src/components/Footer.tsx', 
    to: 'src/components/shared/Layout/Footer.tsx' 
  },
  { 
    from: 'src/components/Newsletter.tsx', 
    to: 'src/components/shared/UI/Newsletter.tsx' 
  },
  { 
    from: 'src/components/ImageSlider.tsx', 
    to: 'src/components/shared/UI/ImageSlider.tsx' 
  }
];

// Create directories if they don't exist
['src/components/shared/Layout', 'src/components/shared/UI'].forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log(`Created directory: ${dir}`);
  }
});

// Move files
moves.forEach(({ from, to }) => {
  if (fs.existsSync(from)) {
    // Create destination directory if it doesn't exist
    const destDir = path.dirname(to);
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
      console.log(`Created directory: ${destDir}`);
    }
    
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

console.log('Component reorganization complete!'); 