// Dummy generator to satisfy build script when tools/generate-llms.js is absent
// This file intentionally does nothing. It prevents build failures on Windows
// where the package.json runs `node tools/generate-llms.js || true && vite build`.
console.log('No-op generate-llms script');
process.exit(0);
