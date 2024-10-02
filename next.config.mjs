import { decompress } from 'brotli';
import fs from 'fs';
import path from 'path';

export default {
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Decompress Brotli files during build
      const unityBuildDir = path.join(process.cwd(), 'public', 'Game', 'Build');
      fs.readdirSync(unityBuildDir).forEach(file => {
        if (file.endsWith('.br')) {
          const compressedPath = path.join(unityBuildDir, file);
          const decompressedPath = path.join(unityBuildDir, file.slice(0, -3));
          const compressed = fs.readFileSync(compressedPath);
          const decompressed = decompress(compressed);
          fs.writeFileSync(decompressedPath, decompressed);
          console.log(`Decompressed: ${file}`);
        }
      });
    }
    return config;
  },
}