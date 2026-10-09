/**
 * Visual Project Gallery and Capabilities Examples
 * Clearly marked as illustrative examples of manufacturing capabilities and custom execution.
 */

export interface PortfolioItem {
  id: string;
  title: string;
  category: 'gi-metal' | 'fabrication' | 'signage' | 'printing' | 'stalls';
  categoryLabel: string;
  scopeSummary: string;
  keyMaterials: string[];
  dimensionsExample: string;
  imageUrl: string;
  imageFallbackUrl: string;
  imageAlt: string;
}

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', label: 'All Projects' },
  { id: 'gi-metal', label: 'GI & Metal Products' },
  { id: 'fabrication', label: 'Fabrication' },
  { id: 'signage', label: 'Signage' },
  { id: 'printing', label: 'Printing' },
  { id: 'stalls', label: 'Stalls & Events' },
] as const;

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'proj-gi-trunks',
    title: 'Reinforced Metal Utility Trunks & Boxes',
    category: 'gi-metal',
    categoryLabel: 'GI & Metal Products',
    scopeSummary: 'Heavy-gauge galvanized iron utility boxes fabricated with continuous corner seams, reinforced handles, and padlocking hasps.',
    keyMaterials: ['Galvanized Iron Sheet', 'Heavy-Duty Hinges', 'Welded Corner Braces'],
    dimensionsExample: 'Custom built to order',
    imageUrl: '/images/gallery/metal-trunks.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic example of heavy-duty galvanized metal utility storage trunks and boxes',
  },
  {
    id: 'proj-led-commercial',
    title: '3D Frontlit Acrylic Commercial LED Signboard',
    category: 'signage',
    categoryLabel: 'Signage',
    scopeSummary: 'Custom storefront illuminated signage with precision laser-cut acrylic letters, ACP composite base plate, and high-efficiency LED modules.',
    keyMaterials: ['Cast Acrylic', 'ACP Sheet', 'IP65 LED Modules', 'Welded Frame'],
    dimensionsExample: '18 ft × 3.5 ft display face',
    imageUrl: '/images/gallery/led-signboard.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of commercial illuminated 3D LED storefront letter signage at night',
  },
  {
    id: 'proj-exhibition-booth',
    title: 'Modular Trade Fair Exhibition Stall Assembly',
    category: 'stalls',
    categoryLabel: 'Stalls & Events',
    scopeSummary: 'Fast-erecting structural steel stall framework with overhead branding fascia, spotlight fixtures, and branded perimeter panels.',
    keyMaterials: ['Mild Steel Box Sections', 'Printed Brand Panels', 'Modular Connectors'],
    dimensionsExample: '6m × 3m footprint',
    imageUrl: '/images/gallery/exhibition-booth.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of professional trade exhibition booths and modular display stall structures',
  },
  {
    id: 'proj-custom-cabin',
    title: 'Structural Steel Site Office & Security Cabin',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    scopeSummary: 'Welded steel tube framework with weatherproof sheet exterior, perimeter ventilation, and reinforced access door.',
    keyMaterials: ['Structural Hollow Sections', 'Corrugated GI Cladding', 'Steel Door Frame'],
    dimensionsExample: '10 ft × 8 ft × 8.5 ft',
    imageUrl: '/images/gallery/custom-cabin.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic example of custom prefabricated steel site cabin and security enclosure',
  },
  {
    id: 'proj-large-flex',
    title: 'High-Density Backlit Flex Signage Face',
    category: 'printing',
    categoryLabel: 'Printing',
    scopeSummary: 'Wide-format flex printing with vibrant weather-resistant solvent inks designed for long-lasting illuminated GSB shopfronts.',
    keyMaterials: ['Heavyweight Backlit Media', 'UV-Resistant Inks', 'Reinforced Edges'],
    dimensionsExample: 'Multi-meter continuous roll',
    imageUrl: '/images/gallery/flex-printing.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1562654501-a0ccc0fc3fb1?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of industrial large-format roll printer executing vibrant banner media',
  },
  {
    id: 'proj-steel-truss',
    title: 'Heavy Angle & Pipe Framework Fabrication',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    scopeSummary: 'Rigid welded structural skeletons for equipment housing, industrial sheds, and heavy storage racks.',
    keyMaterials: ['MS Angle Iron', 'GI Hollow Pipes', 'Gusset Plates'],
    dimensionsExample: 'Built to structural drawings',
    imageUrl: '/images/gallery/steel-framework.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic example of heavy welded structural steel framework and angle iron trusses',
  },
  {
    id: 'proj-bread-moulds',
    title: 'Multi-Gang Bakery Bread Mould Sets',
    category: 'gi-metal',
    categoryLabel: 'GI & Metal Products',
    scopeSummary: 'Food-safe metal strapped loaf mould sets built for uniform thermal heat transfer and bakery batch production.',
    keyMaterials: ['Food-Grade Sheet Metal', 'Reinforcing Tie Straps'],
    dimensionsExample: '4-in-1 gang assemblies',
    imageUrl: '/images/gallery/bread-moulds.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic example of commercial metal bakery loaf baking pans and moulds',
  },
  {
    id: 'proj-gsb-retail',
    title: 'Double-Sided Illuminated GSB Storefront Board',
    category: 'signage',
    categoryLabel: 'Signage',
    scopeSummary: 'Welded internal box frame with internal fluorescent/LED tube runs and high-tension flex face mounted on heavy brackets.',
    keyMaterials: ['Galvanized Box Frame', 'Translucent Flex Skin', 'Internal Tube Channels'],
    dimensionsExample: '12 ft × 3 ft shopfront',
    imageUrl: '/images/gallery/gsb-illuminated.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of double-sided illuminated commercial glow sign board storefront advertising',
  },
  {
    id: 'proj-gi-sheets-profile',
    title: 'Galvanized Plain & Corrugated GI Sheets',
    category: 'gi-metal',
    categoryLabel: 'GI & Metal Products',
    scopeSummary: 'Galvanized iron sheet fabrication, tailored shearing, and corrugated profiles for protective enclosures and roofing.',
    keyMaterials: ['Zinc-Coated GI Sheets', 'Custom Sheared Edges'],
    dimensionsExample: 'Cut to client specifications',
    imageUrl: '/images/gallery/metal-sheets.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of manufactured galvanized iron sheets and architectural metal surface panels',
  },
  {
    id: 'proj-workshop-fabrication',
    title: 'Custom Metal Workshop Fabrication & Assembly',
    category: 'fabrication',
    categoryLabel: 'Fabrication',
    scopeSummary: 'Precision cutting, machine bending, and arc welding of custom brackets, guards, and industrial assemblies.',
    keyMaterials: ['Mild Steel', 'Galvanized Sheet', 'Engineered Weld Wire'],
    dimensionsExample: 'Engineered per drawing',
    imageUrl: '/images/gallery/industrial-fabrication.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of metal fabrication workshop machinery and structural steel assembly process',
  },
  {
    id: 'proj-event-structures',
    title: 'Promotional Event Structures & Staging',
    category: 'stalls',
    categoryLabel: 'Stalls & Events',
    scopeSummary: 'Sturdy truss structures, registration counters, and backdrop framing for corporate expos and outdoor cultural gatherings.',
    keyMaterials: ['Modular Steel Trusses', 'Branded Tension Fabric', 'Staging Risers'],
    dimensionsExample: 'Tailored event layout',
    imageUrl: '/images/gallery/event-structures.jpg',
    imageFallbackUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80',
    imageAlt: 'Photographic view of indoor promotional event pavilion and custom structural staging setup',
  },
];
