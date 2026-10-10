import fs from 'fs';
import sharp from 'sharp';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" width="1000" height="1000">
  <defs>
    <!-- Background Gradient -->
    <radialGradient id="bgGrad" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#0e0e0e"/>
      <stop offset="70%" stop-color="#040404"/>
      <stop offset="100%" stop-color="#000000"/>
    </radialGradient>

    <!-- Metallic Gold 3D Gradients -->
    <linearGradient id="gold3d" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF0A8"/>
      <stop offset="25%" stop-color="#E5B942"/>
      <stop offset="50%" stop-color="#C28F20"/>
      <stop offset="75%" stop-color="#FCDD79"/>
      <stop offset="100%" stop-color="#845706"/>
    </linearGradient>

    <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFFBE5"/>
      <stop offset="50%" stop-color="#DEB038"/>
      <stop offset="100%" stop-color="#8B5E0D"/>
    </linearGradient>

    <linearGradient id="goldText" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FFF8C7"/>
      <stop offset="35%" stop-color="#F3C853"/>
      <stop offset="70%" stop-color="#D4991E"/>
      <stop offset="100%" stop-color="#7B4E04"/>
    </linearGradient>

    <!-- Halo Radiance -->
    <radialGradient id="haloGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#FFF2A3" stop-opacity="1"/>
      <stop offset="35%" stop-color="#E2B134" stop-opacity="0.8"/>
      <stop offset="70%" stop-color="#B87B14" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0"/>
    </radialGradient>

    <!-- Lotus Petal Gradients -->
    <linearGradient id="petalTop" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#FF7FA7"/>
      <stop offset="50%" stop-color="#EA2264"/>
      <stop offset="100%" stop-color="#A5083E"/>
    </linearGradient>

    <linearGradient id="petalBack" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#F0437E"/>
      <stop offset="100%" stop-color="#800630"/>
    </linearGradient>

    <!-- Saree Red Gradient -->
    <linearGradient id="sareeRed" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#E52128"/>
      <stop offset="60%" stop-color="#B50E14"/>
      <stop offset="100%" stop-color="#730307"/>
    </linearGradient>

    <!-- Green Blouse -->
    <linearGradient id="blouseGreen" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#229342"/>
      <stop offset="100%" stop-color="#0D5422"/>
    </linearGradient>

    <!-- Coin Gold -->
    <radialGradient id="coinGrad" cx="40%" cy="40%" r="60%">
      <stop offset="0%" stop-color="#FFF9D2"/>
      <stop offset="60%" stop-color="#F5C02A"/>
      <stop offset="100%" stop-color="#A27107"/>
    </radialGradient>

    <!-- Shadow filters -->
    <filter id="goldDrop" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000" flood-opacity="0.8"/>
    </filter>
    <filter id="heavyDrop" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="#000" flood-opacity="0.9"/>
    </filter>
  </defs>

  <!-- Deep Black Canvas -->
  <rect width="1000" height="1000" fill="url(#bgGrad)" />

  <!-- Outer Beveled Gold Ring Frame -->
  <g filter="url(#heavyDrop)">
    <!-- Outer thick rim -->
    <circle cx="500" cy="490" r="440" fill="none" stroke="url(#gold3d)" stroke-width="22" />
    <circle cx="500" cy="490" r="449" fill="none" stroke="#FFF5B8" stroke-width="3" opacity="0.7"/>
    <circle cx="500" cy="490" r="431" fill="none" stroke="#6C4505" stroke-width="4" />
    
    <!-- Inner concentric golden hairline -->
    <circle cx="500" cy="490" r="416" fill="none" stroke="url(#gold3d)" stroke-width="4" opacity="0.85"/>
  </g>

  <!-- Symmetrical Lateral Gold Scroll Filigree (Flanking Wings) -->
  <g filter="url(#goldDrop)">
    <!-- Left Wing Flourish -->
    <path d="M 100 415 C 160 380 230 330 320 260 L 305 285 C 220 345 160 395 110 435 C 170 435 220 455 240 500 C 225 500 200 475 160 470 C 130 465 110 445 100 415 Z" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="1.5" />
    <path d="M 125 450 C 170 450 205 480 185 520 C 170 510 150 495 125 450 Z" fill="url(#goldHighlight)" />
    
    <!-- Right Wing Flourish -->
    <path d="M 900 415 C 840 380 770 330 680 260 L 695 285 C 780 345 840 395 890 435 C 830 435 780 455 760 500 C 775 500 800 475 840 470 C 870 465 890 445 900 415 Z" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="1.5" />
    <path d="M 875 450 C 830 450 795 480 815 520 C 830 510 850 495 875 450 Z" fill="url(#goldHighlight)" />
  </g>

  <!-- Divine Golden Sunburst Halo Behind Maa Laxmi -->
  <g transform="translate(500, 205)">
    <!-- Radiance circle -->
    <circle cx="0" cy="0" r="105" fill="url(#haloGlow)" />
    <!-- Beaded Gold Ring Aura -->
    <circle cx="0" cy="0" r="95" fill="none" stroke="url(#gold3d)" stroke-width="3" stroke-dasharray="3,4" />
    <circle cx="0" cy="0" r="90" fill="none" stroke="url(#gold3d)" stroke-width="1.5" />
    <!-- Radiating Ray Spikes -->
    <g stroke="url(#gold3d)" stroke-width="2" opacity="0.8">
      <line x1="0" y1="-102" x2="0" y2="-92" />
      <line x1="26" y1="-98" x2="23" y2="-89" />
      <line x1="51" y1="-88" x2="46" y2="-80" />
      <line x1="72" y1="-72" x2="65" y2="-65" />
      <line x1="88" y1="-51" x2="80" y2="-46" />
      <line x1="98" y1="-26" x2="89" y2="-23" />
      <line x1="102" y1="0" x2="92" y2="0" />
      <line x1="-26" y1="-98" x2="-23" y2="-89" />
      <line x1="-51" y1="-88" x2="-46" y2="-80" />
      <line x1="-72" y1="-72" x2="-65" y2="-65" />
      <line x1="-88" y1="-51" x2="-80" y2="-46" />
      <line x1="-98" y1="-26" x2="-89" y2="-23" />
      <line x1="-102" y1="0" x2="-92" y2="0" />
    </g>
  </g>

  <!-- Ornate Golden Mukut (Tiered Imperial Crown) -->
  <g transform="translate(500, 140)" filter="url(#goldDrop)">
    <!-- Crown Base Arch -->
    <path d="M -48 42 Q 0 35 48 42 L 40 18 Q 0 10 -40 18 Z" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="1.5" />
    <!-- Center Tower Spire -->
    <path d="M -24 18 L 0 -45 L 24 18 Z" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="1.5" />
    <!-- Flanking Tier Spires -->
    <path d="M -42 20 L -24 0 L -12 18 Z" fill="url(#gold3d)" />
    <path d="M 42 20 L 24 0 L 12 18 Z" fill="url(#gold3d)" />
    <!-- Ruby Gemstones on Crown -->
    <circle cx="0" cy="-22" r="6" fill="#D61828" stroke="#FFEFA6" stroke-width="1" />
    <circle cx="0" cy="5" r="5" fill="#D61828" />
    <circle cx="-20" cy="12" r="4" fill="#0C7838" />
    <circle cx="20" cy="12" r="4" fill="#0C7838" />
    <circle cx="0" cy="-44" r="3.5" fill="#FFEFA6" />
  </g>

  <!-- Goddess Maa Laxmi Face & Upper Body -->
  <g transform="translate(500, 205)">
    <!-- Divine Dark Hair Tendrils -->
    <path d="M -50 0 C -55 35 -40 60 -35 85 C -25 50 -35 15 -35 0 Z" fill="#1A1310" />
    <path d="M 50 0 C 55 35 40 60 35 85 C 25 50 35 15 35 0 Z" fill="#1A1310" />

    <!-- Radiant Divine Face Tone -->
    <path d="M -30 -10 C -30 25 -20 40 0 45 C 20 40 30 25 30 -10 C 20 -20 -20 -20 -30 -10 Z" fill="#FCE7D2" />
    
    <!-- Auspicious Vermilion Bindi & Sindoor Mark -->
    <circle cx="0" cy="-2" r="3.5" fill="#C4121B" />
    <line x1="0" y1="-10" x2="0" y2="-2" stroke="#C4121B" stroke-width="2" />

    <!-- Ornate Golden Jhumka Earrings -->
    <path d="M -36 5 L -32 20 L -40 20 Z" fill="url(#gold3d)" />
    <circle cx="-36" cy="23" r="3.5" fill="url(#gold3d)" />
    <path d="M 36 5 L 32 20 L 40 20 Z" fill="url(#gold3d)" />
    <circle cx="36" cy="23" r="3.5" fill="url(#gold3d)" />

    <!-- Emerald Green Blouse (Choli) -->
    <path d="M -38 42 L -50 80 L -30 95 L -15 65 Z" fill="url(#blouseGreen)" />
    <path d="M 38 42 L 50 80 L 30 95 L 15 65 Z" fill="url(#blouseGreen)" />

    <!-- Red Silk Saree Drape with Gold Zari Border -->
    <path d="M -35 60 C -15 60 15 60 35 60 L 55 125 C 25 145 -25 145 -55 125 Z" fill="url(#sareeRed)" />
    <!-- Ornate Gold Zari Border along Saree -->
    <path d="M -35 60 L -55 125 L -45 130 L -25 70 Z" fill="url(#gold3d)" />
    <path d="M 15 65 L 45 130 L 55 125 L 25 65 Z" fill="url(#gold3d)" />

    <!-- Tiered Golden Har (Necklaces) -->
    <path d="M -22 38 Q 0 55 22 38" fill="none" stroke="url(#gold3d)" stroke-width="4" />
    <path d="M -18 48 Q 0 68 18 48" fill="none" stroke="url(#gold3d)" stroke-width="5" />
    <circle cx="0" cy="68" r="5" fill="#D61828" stroke="url(#gold3d)" stroke-width="1.5" />
    <path d="M -14 58 Q 0 82 14 58" fill="none" stroke="url(#gold3d)" stroke-width="4" />
    <circle cx="0" cy="83" r="6" fill="url(#goldHighlight)" />
  </g>

  <!-- Maa Laxmi Arms, Hands & Divine Attributes -->
  <g transform="translate(500, 205)">
    <!-- Upper Left Arm Holding Lotus -->
    <path d="M -48 65 Q -85 45 -82 0" fill="none" stroke="#FCE7D2" stroke-width="15" stroke-linecap="round" />
    <!-- Gold Armlet & Bangles -->
    <rect x="-85" y="30" width="16" height="6" rx="2" fill="url(#gold3d)" />
    <rect x="-88" y="5" width="18" height="6" rx="2" fill="url(#gold3d)" />
    <!-- Pink Lotus Blossom (Upper Left) -->
    <g transform="translate(-82, -25)" filter="url(#goldDrop)">
      <path d="M 0 35 L 0 50" stroke="#1D8338" stroke-width="5" />
      <path d="M 0 0 C -22 -15 -35 15 0 35 C 35 15 22 -15 0 0 Z" fill="url(#petalTop)" />
      <path d="M -15 5 C -35 0 -40 25 -10 32 Z" fill="url(#petalBack)" />
      <path d="M 15 5 C 35 0 40 25 10 32 Z" fill="url(#petalBack)" />
    </g>

    <!-- Upper Right Arm Holding Lotus -->
    <path d="M 48 65 Q 85 45 82 0" fill="none" stroke="#FCE7D2" stroke-width="15" stroke-linecap="round" />
    <!-- Gold Armlet & Bangles -->
    <rect x="69" y="30" width="16" height="6" rx="2" fill="url(#gold3d)" />
    <rect x="70" y="5" width="18" height="6" rx="2" fill="url(#gold3d)" />
    <!-- Pink Lotus Blossom (Upper Right) -->
    <g transform="translate(82, -25)" filter="url(#goldDrop)">
      <path d="M 0 35 L 0 50" stroke="#1D8338" stroke-width="5" />
      <path d="M 0 0 C -22 -15 -35 15 0 35 C 35 15 22 -15 0 0 Z" fill="url(#petalTop)" />
      <path d="M -15 5 C -35 0 -40 25 -10 32 Z" fill="url(#petalBack)" />
      <path d="M 15 5 C 35 0 40 25 10 32 Z" fill="url(#petalBack)" />
    </g>

    <!-- Lower Right Hand (Abhaya Mudra - Blessing Posture) -->
    <g transform="translate(-48, 95)">
      <path d="M 0 0 L -8 20 Q -8 32 -22 28 Q -28 15 -25 -5 Z" fill="#FCE7D2" />
      <!-- Gold Bangles -->
      <rect x="-18" y="24" width="16" height="6" rx="2" fill="url(#gold3d)" />
      <!-- Red Om / Sacred Auspicious Henna Symbol on Palm -->
      <circle cx="-20" cy="5" r="4.5" fill="#C4121B" />
    </g>

    <!-- Lower Left Hand with Golden Kalash Pouring Stream of Wealth -->
    <g transform="translate(48, 90)">
      <!-- Arm -->
      <path d="M 0 0 Q 15 25 28 35" fill="none" stroke="#FCE7D2" stroke-width="14" stroke-linecap="round" />
      <rect x="18" y="22" width="16" height="6" rx="2" fill="url(#gold3d)" />

      <!-- Golden Kalash (Urn of Abundance) -->
      <g transform="translate(25, 30) rotate(-40)" filter="url(#goldDrop)">
        <!-- Vessel Body -->
        <ellipse cx="0" cy="18" rx="26" ry="22" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="2" />
        <!-- Vessel Rim -->
        <ellipse cx="0" cy="0" rx="16" ry="6" fill="#936814" stroke="url(#goldHighlight)" stroke-width="2" />
      </g>
    </g>
  </g>

  <!-- Cascading Stream of Golden Coins Flowing from Kalash -->
  <g transform="translate(560, 360)" filter="url(#goldDrop)">
    <g transform="translate(0, 0)">
      <ellipse cx="0" cy="0" rx="9" ry="7" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="-8" cy="12" rx="10" ry="8" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="6" cy="18" rx="9" ry="7" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="-4" cy="30" rx="11" ry="8.5" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="10" cy="38" rx="10" ry="7.5" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="-12" cy="50" rx="11" ry="8.5" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="2" cy="58" rx="12" ry="9" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="-6" cy="72" rx="12" ry="9" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="14" cy="78" rx="11" ry="8" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
      <ellipse cx="0" cy="92" rx="13" ry="9.5" fill="url(#coinGrad)" stroke="#FFE885" stroke-width="1.2" />
    </g>
  </g>

  <!-- Majestic Radiant Pink Lotus Throne (Padmasana) -->
  <g transform="translate(500, 460)" filter="url(#heavyDrop)">
    <!-- Back Row Petals (Darker Magenta) -->
    <path d="M -160 0 C -220 -45 -180 -95 -120 -80 C -80 -40 -110 0 -160 0 Z" fill="url(#petalBack)" />
    <path d="M 160 0 C 220 -45 180 -95 120 -80 C 80 -40 110 0 160 0 Z" fill="url(#petalBack)" />
    <path d="M -110 -25 C -150 -70 -110 -115 -50 -95 C -30 -55 -60 -10 -110 -25 Z" fill="url(#petalBack)" />
    <path d="M 110 -25 C 150 -70 110 -115 50 -95 C 30 -55 60 -10 110 -25 Z" fill="url(#petalBack)" />

    <!-- Front Row Petals (Luminous Pink & Red with Gold Tips) -->
    <path d="M -190 20 C -240 5 -220 -50 -150 -35 C -100 -5 -130 35 -190 20 Z" fill="url(#petalTop)" stroke="#FFB8CE" stroke-width="1.2" />
    <path d="M 190 20 C 240 5 220 -50 150 -35 C 100 -5 130 35 190 20 Z" fill="url(#petalTop)" stroke="#FFB8CE" stroke-width="1.2" />
    <path d="M -120 30 C -160 10 -150 -55 -70 -40 C -30 -10 -60 45 -120 30 Z" fill="url(#petalTop)" stroke="#FFB8CE" stroke-width="1.2" />
    <path d="M 120 30 C 160 10 150 -55 70 -40 C 30 -10 60 45 120 30 Z" fill="url(#petalTop)" stroke="#FFB8CE" stroke-width="1.2" />
    <!-- Center Dominant Petal -->
    <path d="M 0 -75 C -55 -35 -60 40 0 58 C 60 40 55 -35 0 -75 Z" fill="url(#petalTop)" stroke="#FFD4E2" stroke-width="2" />
    <path d="M -60 40 C -80 0 -50 -50 0 -60 C -15 -20 -15 30 -60 40 Z" fill="url(#petalBack)" opacity="0.6"/>
    <path d="M 60 40 C 80 0 50 -50 0 -60 C 15 -20 15 30 60 40 Z" fill="url(#petalBack)" opacity="0.6"/>

    <!-- Lotus Base Pedestal (Golden Filigree Fluting) -->
    <path d="M -140 45 Q 0 65 140 45 L 160 62 Q 0 85 -160 62 Z" fill="url(#gold3d)" stroke="#FFF5B8" stroke-width="2" />
  </g>

  <!-- ======================================================== -->
  <!-- BRAND TYPOGRAPHY ZONE                                    -->
  <!-- ======================================================== -->

  <!-- Top Headline: MAA LAXMI in 3D Sculpted Polished Gold -->
  <g transform="translate(500, 650)" filter="url(#heavyDrop)">
    <!-- Red Swoosh under/through the letter M -->
    <path d="M -418 25 C -390 -5 -320 -25 -275 8 C -330 0 -380 5 -418 25 Z" fill="#D61828" />

    <!-- 3D Beveled Shadow Drop behind MAA LAXMI -->
    <text x="0" y="0" text-anchor="middle" font-family="Georgia, serif" font-weight="900" font-size="124" letter-spacing="4" fill="#583904">
      MAA LAXMI
    </text>
    <text x="-3" y="-3" text-anchor="middle" font-family="Georgia, serif" font-weight="900" font-size="124" letter-spacing="4" fill="url(#goldText)" stroke="#FFE885" stroke-width="1.5">
      MAA LAXMI
    </text>

    <!-- Red dynamic stroke on left leg of initial M -->
    <path d="M -420 12 C -385 -10 -355 5 -370 20 C -395 18 -410 16 -420 12 Z" fill="#D61828" />
  </g>

  <!-- Horizontal Dividing Accent Line -->
  <g transform="translate(500, 678)" filter="url(#goldDrop)">
    <line x1="-320" y1="0" x2="320" y2="0" stroke="url(#gold3d)" stroke-width="4" stroke-linecap="round" />
    <line x1="-280" y1="5" x2="280" y2="5" stroke="url(#goldHighlight)" stroke-width="1.5" stroke-linecap="round" opacity="0.8"/>
  </g>

  <!-- Sub-Headline: STEEL &amp; SUPPLIERS in Crisp Bold White -->
  <g transform="translate(500, 742)" filter="url(#goldDrop)">
    <text x="0" y="0" text-anchor="middle" font-family="Georgia, sans-serif" font-weight="800" font-size="54" letter-spacing="9" fill="#FFFFFF">
      STEEL &amp; SUPPLIERS
    </text>
  </g>

  <!-- Bottom Lotus Flourish Ornament with Central Ruby Jewel -->
  <g transform="translate(500, 810)" filter="url(#goldDrop)">
    <!-- Central Ruby / Gold Lotus Bud -->
    <path d="M 0 -35 C -18 -15 -18 10 0 20 C 18 10 18 -15 0 -35 Z" fill="#D61828" stroke="url(#gold3d)" stroke-width="2" />
    <path d="M -12 -10 C -28 -5 -25 15 -5 18 Z" fill="url(#gold3d)" />
    <path d="M 12 -10 C 28 -5 25 15 5 18 Z" fill="url(#gold3d)" />

    <!-- Symmetrical Base Scroll Flourishes -->
    <path d="M -18 20 C -60 25 -110 5 -150 -20 C -115 -10 -75 0 -22 12 Z" fill="url(#gold3d)" />
    <circle cx="-150" cy="-20" r="5" fill="url(#goldHighlight)" />
    <path d="M 18 20 C 60 25 110 5 150 -20 C 115 -10 75 0 22 12 Z" fill="url(#gold3d)" />
    <circle cx="150" cy="-20" r="5" fill="url(#goldHighlight)" />

    <!-- Bottom Point Terminal -->
    <polygon points="0,22 -6,34 0,44 6,34" fill="url(#gold3d)" />
  </g>
</svg>`;

async function build() {
  fs.writeFileSync('public/images/maa-laxmi-steel-logo.svg', svg);
  console.log('Saved SVG');

  await sharp(Buffer.from(svg))
    .png({ quality: 100, compressionLevel: 8 })
    .toFile('public/images/maa-laxmi-steel-logo.png');
  console.log('Saved PNG to public/images/maa-laxmi-steel-logo.png');

  if (fs.existsSync('dist/images')) {
    fs.copyFileSync('public/images/maa-laxmi-steel-logo.png', 'dist/images/maa-laxmi-steel-logo.png');
    fs.copyFileSync('public/images/maa-laxmi-steel-logo.svg', 'dist/images/maa-laxmi-steel-logo.svg');
    console.log('Copied to dist/images');
  }
}

build().catch(console.error);
