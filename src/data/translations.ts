export type Language = 'en' | 'or';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    products: string;
    fabrication: string;
    signage: string;
    events: string;
    gallery: string;
    about: string;
    contact: string;
    requestQuote: string;
    callUs: string;
  };
  // Hero
  hero: {
    brandTag: string;
    titlePart1: string;
    titlePart2: string;
    titlePart3: string;
    subTagline: string;
    bullet1: string;
    bullet2: string;
    bullet3: string;
    bullet4: string;
    exploreBtn: string;
    quoteBtn: string;
    verifiedTag: string;
    heroCardSubtitle: string;
    heroCardBtn: string;
    giSheetBoxTitle: string;
    giSheetBoxDesc: string;
    signageStallsTitle: string;
    signageStallsDesc: string;
    scrollHint: string;
  };
  // Service Strip
  services: {
    giTitle: string;
    giSubtitle: string;
    metalTitle: string;
    metalSubtitle: string;
    signageTitle: string;
    signageSubtitle: string;
    flexTitle: string;
    flexSubtitle: string;
    stallsTitle: string;
    stallsSubtitle: string;
  };
  // Products
  products: {
    kicker: string;
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    showing: string;
    of: string;
    items: string;
    all: string;
    giCategory: string;
    framesCategory: string;
    specialtyCategory: string;
    signageCategory: string;
    eventsCategory: string;
    customSizing: string;
    priceOnRequest: string;
    enquireNow: string;
    whatsapp: string;
    noResults: string;
    noResultsDesc: string;
    resetFilters: string;
  };
  // Fabrication
  fabrication: {
    kicker: string;
    titlePart1: string;
    titlePart2: string;
    description: string;
    p1Title: string;
    p1Desc: string;
    p2Title: string;
    p2Desc: string;
    p3Title: string;
    p3Desc: string;
    ctaBtn: string;
    ctaHint: string;
    fab1Tag: string;
    fab1Title: string;
    fab1Desc: string;
    fab2Tag: string;
    fab2Title: string;
    fab2Desc: string;
    fab3Tag: string;
    fab3Title: string;
    fab3Desc: string;
    fab4Tag: string;
    fab4Title: string;
    fab4Desc: string;
  };
  // Signage
  signage: {
    kicker: string;
    titlePart1: string;
    titlePart2: string;
    lightingPreview: string;
    day: string;
    nightGlow: string;
    simulatedTagline: string;
    nightDesc: string;
    dayDesc: string;
    highlights: string;
    ctaTitle: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  // Events
  events: {
    kicker: string;
    titlePart1: string;
    titlePart2: string;
    subtitle: string;
    configLabel: string;
    requestStallQuote: string;
    calloutTitle: string;
    calloutDesc: string;
    bookConsultation: string;
  };
  // Gallery
  gallery: {
    kicker: string;
    title: string;
    infoNotice: string;
    all: string;
    viewDetails: string;
    refPhoto: string;
    scopeSpec: string;
    materials: string;
    refDimension: string;
    enquireSimilar: string;
    close: string;
  };
  // How it works
  howItWorks: {
    kicker: string;
    title: string;
    subtitle: string;
    step1Title: string;
    step1Desc: string;
    step2Title: string;
    step2Desc: string;
    step3Title: string;
    step3Desc: string;
    step4Title: string;
    step4Desc: string;
  };
  // About
  about: {
    kicker: string;
    titlePart1: string;
    titlePart2: string;
    p1: string;
    p2: string;
    p3: string;
    pillar1Title: string;
    pillar1Desc: string;
    pillar2Title: string;
    pillar2Desc: string;
    pillar3Title: string;
    pillar3Desc: string;
    philTitle: string;
    f1Title: string;
    f1Desc: string;
    f2Title: string;
    f2Desc: string;
    f3Title: string;
    f3Desc: string;
    directContact: string;
  };
  // Enquiry Form
  enquiry: {
    kicker: string;
    title: string;
    subtitle: string;
    fullName: string;
    fullNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    email: string;
    emailPlaceholder: string;
    optional: string;
    productService: string;
    quantity: string;
    dimensions: string;
    dimensionsPlaceholder: string;
    location: string;
    locationPlaceholder: string;
    description: string;
    descriptionPlaceholder: string;
    sendWhatsapp: string;
    sendEmail: string;
    errorName: string;
    errorPhone: string;
    successWhatsapp: string;
    successEmail: string;
    directNotice: string;
  };
  // Contact
  contact: {
    kicker: string;
    title: string;
    subtitle: string;
    phoneTitle: string;
    phoneDesc: string;
    whatsappTitle: string;
    whatsappDesc: string;
    whatsappAction: string;
    emailTitle: string;
    emailDesc: string;
    hoursNotice: string;
    openForm: string;
  };
  // Footer
  footer: {
    description: string;
    quickWhatsapp: string;
    categoriesTitle: string;
    servicesTitle: string;
    contactTitle: string;
    rights: string;
    terms: string;
    privacy: string;
  };
  // Floating
  floating: {
    whatsappTooltip: string;
    backToTop: string;
  };
  // Quick Quote Modal
  quickQuote: {
    kicker: string;
    title: string;
    productLabel: string;
    quantityLabel: string;
    dimensionsLabel: string;
    dimensionsPlaceholder: string;
    nameLabel: string;
    namePlaceholder: string;
    phoneLabel: string;
    phonePlaceholder: string;
    notesLabel: string;
    notesPlaceholder: string;
    submitWhatsApp: string;
    sentSuccess: string;
    openFullForm: string;
    callUs: string;
    close: string;
  };
  // Product Detail Modal
  productDetail: {
    kicker: string;
    specsTitle: string;
    customSizeAvailable: string;
    dimensions: string;
    dimensionsPlaceholder: string;
    quantity: string;
    notes: string;
    notesPlaceholder: string;
    name: string;
    namePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    requestWhatsApp: string;
    directCall: string;
    close: string;
    sentSuccess: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      products: 'Products',
      fabrication: 'Fabrication',
      signage: 'Signage',
      events: 'Events & Stalls',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
      requestQuote: 'Request a Quote',
      callUs: 'Call',
    },
    hero: {
      brandTag: 'MAA LAXMI STEEL & SUPPLIERS',
      titlePart1: 'Quality Steel.',
      titlePart2: 'Trusted Supply.',
      titlePart3: 'Custom Solutions.',
      subTagline:
        'Your Partner for GI Products, Metal Fabrication, Steel Frames, Signage and Custom-Built Solutions.',
      bullet1: 'Standard & Custom Sizing',
      bullet2: 'Commercial & Retail Supply',
      bullet3: 'Fabrication & Welding Workshop',
      bullet4: 'Direct Quotes on Specification',
      exploreBtn: 'Explore Our Products',
      quoteBtn: 'Request a Quote',
      verifiedTag: 'Verified Supplier',
      heroCardSubtitle: 'Custom GI Products • Metal Fabrication • Signage & Stalls',
      heroCardBtn: 'Request Quotation With Your Specs',
      giSheetBoxTitle: 'GI & Sheet Metal',
      giSheetBoxDesc: 'Sheets, storage trunks, utility boxes & drums.',
      signageStallsTitle: 'Signage & Stalls',
      signageStallsDesc: 'LED boards, flex printing, cabins & structures.',
      scrollHint: 'Explore Catalogue',
    },
    services: {
      giTitle: 'GI Products',
      giSubtitle: 'Plain & Corrugated Sheets, Boxes',
      metalTitle: 'Metal Fabrication',
      metalSubtitle: 'Frames, Khatias, Pipes & Cabins',
      signageTitle: 'Signage Solutions',
      signageSubtitle: '3D LED Boards & GSB Storefronts',
      flexTitle: 'Flex Printing',
      flexSubtitle: 'Large Format Banners & Backlit Flex',
      stallsTitle: 'Stalls & Cabins',
      stallsSubtitle: 'Exhibition Setups & Site Cabins',
    },
    products: {
      kicker: 'PRECISION STEEL & FABRICATION CATALOGUE',
      title: 'Products & Supplies',
      subtitle:
        'From galvanized iron utility boxes and structural frames to illuminated signage and event setups — all fabricated to your exact dimensional requirements.',
      searchPlaceholder: 'Search products (e.g., GI Boxes, LED, Khatia, Chimneys)...',
      showing: 'Showing',
      of: 'of',
      items: 'items',
      all: 'All Products',
      giCategory: 'GI & Metal Boxes',
      framesCategory: 'Frames & Cabins',
      specialtyCategory: 'Specialty Fabrication',
      signageCategory: 'Signage & Print',
      eventsCategory: 'Event Stalls',
      customSizing: 'Custom Sizing',
      priceOnRequest: 'Price on Request',
      enquireNow: 'Enquire Now',
      whatsapp: 'WhatsApp',
      noResults: 'No products match your search',
      noResultsDesc: 'Try adjusting your search terms or view all categories.',
      resetFilters: 'Reset Filters',
    },
    fabrication: {
      kicker: 'PRECISION METAL FABRICATION',
      titlePart1: 'Your Requirements.',
      titlePart2: 'Our Fabrication.',
      description:
        'Every project comes with unique site dimensions, metal gauges, and functional requirements. Whether you require reinforced galvanized iron utility trunks, custom angle frames, heavy cot structures, or architectural cabins — our workshop builds directly around your specifications.',
      p1Title: 'Precision Sheet Metal Work',
      p1Desc:
        'Cutting, folding, and riveting of galvanized iron sheets for boxes, drums, light enclosures, and bakeries.',
      p2Title: 'Structural Angle & Pipe Welding',
      p2Desc:
        'Heavy-duty welded assemblies for machine bases, khatia bed frames, shed framing, and portable security cabins.',
      p3Title: 'Specialty & Ceremonial Metalcraft',
      p3Desc:
        'Made-to-order stepped homa kunds, decorative mandir temples, kitchen exhaust hoods, and custom metal fixtures.',
      ctaBtn: 'Discuss Your Project',
      ctaHint: 'No standard limits — custom dimensions welcomed',
      fab1Tag: 'FAB-01 // CUT & FOLD',
      fab1Title: 'Sheet Metal Forming',
      fab1Desc:
        'Galvanized sheets sheared and machine-folded with reinforced hemmed edges for maximum rigidity.',
      fab2Tag: 'FAB-02 // WELDING',
      fab2Title: 'Structural Joint Welding',
      fab2Desc:
        'Continuous and stitch welding across tubular steel sections, angle channels, and plate gussets.',
      fab3Tag: 'FAB-03 // ASSEMBLY',
      fab3Title: 'Modular Unit Construction',
      fab3Desc:
        'Prefabricated cabin panels, security kiosks, and exhibition frame sections built for on-site erection.',
      fab4Tag: 'FAB-04 // DISPATCH',
      fab4Title: 'Dimensional Verification',
      fab4Desc:
        'Inspection of overall tolerances, latch alignments, and corner welds prior to client handover.',
    },
    signage: {
      kicker: 'SIGNAGE & ADVERTISING SOLUTIONS',
      titlePart1: 'Make Your Storefront',
      titlePart2: 'Stand Out 24/7.',
      lightingPreview: 'Lighting Preview:',
      day: 'Day',
      nightGlow: 'Night Glow',
      simulatedTagline: 'GSB BOARDS · 3D ACRYLIC LED · FLEX PRINTING',
      nightDesc:
        'Night Illumination Simulation Active — Backlit diffusion & high-intensity LED channel preview',
      dayDesc: 'Daylight View Simulation Active — Clean high-contrast signage visibility',
      highlights: 'Highlights',
      ctaTitle: 'Need custom dimensions for your storefront or hoarding?',
      ctaDesc:
        'Provide your required board length, height, and lighting preference for an accurate quote.',
      ctaBtn: 'Enquire About Signage',
    },
    events: {
      kicker: 'FABRICATION & EVENT SOLUTIONS',
      titlePart1: 'Spaces That',
      titlePart2: 'Bring Ideas to Life.',
      subtitle:
        'From promotional stalls and exhibition pavilions to robust site cabins and event stage frameworks — manufactured according to your event footprint and layout.',
      configLabel: 'Configuration:',
      requestStallQuote: 'Request Stall Quote',
      calloutTitle: 'Planning an upcoming exhibition or trade showcase?',
      calloutDesc:
        'Share your stall dimensions, layout requirements, and event dates for turnkey metal structure fabrication.',
      bookConsultation: 'Book Stall Consultation',
    },
    gallery: {
      kicker: 'STEEL SUPPLY & FABRICATION GALLERY',
      title: 'Craftsmanship & Products in Focus',
      infoNotice:
        'Real reference photographs illustrating our fabrication scopes, materials, and production capabilities.',
      all: 'All Projects',
      viewDetails: 'View Details',
      refPhoto: 'Reference Photograph',
      scopeSpec: 'Scope & Specification',
      materials: 'Key Materials & Techniques',
      refDimension: 'Standard Reference Dimension',
      enquireSimilar: 'Enquire for Similar Project',
      close: 'Close',
    },
    howItWorks: {
      kicker: 'SIMPLE & TRANSPARENT PROCESS',
      title: 'How It Works',
      subtitle:
        'From initial sketch or dimensions to completed metalwork — a seamless 4-step collaboration.',
      step1Title: 'Share Your Requirement',
      step1Desc:
        'Explain the product, dimensions, sheet gauge, quantity, or specific intended usage via our form or direct WhatsApp.',
      step2Title: 'Discuss the Details',
      step2Desc:
        'Our team reviews the dimensions and fabrication requirements, clarifying any technical fittings or site parameters.',
      step3Title: 'Receive a Quote',
      step3Desc:
        'Receive transparent pricing, material scope, and estimated manufacturing timeline tailored directly to your project.',
      step4Title: 'Confirm Your Order',
      step4Desc:
        'Production, metal fabrication, or event setup arrangements begin promptly once commercial terms are confirmed.',
    },
    about: {
      kicker: 'ABOUT THE BUSINESS',
      titlePart1: 'Practical Solutions.',
      titlePart2: 'Custom-Built Results.',
      p1: 'MAA LAXMI STEEL & SUPPLIERS is an established steel supplier and multi-disciplinary fabrication enterprise providing specialized galvanized iron (GI) products, custom metal structures, illuminated signage, flex printing, and exhibition stall arrangements.',
      p2: 'Rather than offering rigid one-size-fits-all items, our manufacturing is built around customer requirements. We work directly with individuals, contractors, commercial enterprises, and event organizers to produce products tailored to their dimensional specifications, load demands, and functional objectives.',
      p3: 'Whether you need a single custom-dimension storage trunk, heavy welded pipe frames, roadside LED display boards, or a complete modular exhibition stall framework — we ensure clear communication, transparent quotations, and reliable execution.',
      pillar1Title: 'Direct Communication',
      pillar1Desc:
        'Discuss sizes and requirements directly with our team for timely quotation.',
      pillar2Title: 'Custom Fabrication',
      pillar2Desc: 'Cut, folded, welded, and assembled to exact client measurements.',
      pillar3Title: 'Comprehensive Range',
      pillar3Desc:
        'Steel products, retail signage, flex prints, and event setups under one roof.',
      philTitle: 'Service Philosophy',
      f1Title: 'No Hidden Figures',
      f1Desc:
        'Clear material specifications and quotes based on confirmed project requirements.',
      f2Title: 'Built for Utility',
      f2Desc:
        'Heavy-gauge materials and rigid joins engineered for practical day-to-day longevity.',
      f3Title: 'Adaptable Sizing',
      f3Desc:
        'Every box, sheet cut, frame, and banner can be customized to your exact dimensions.',
      directContact: 'Direct Contact:',
    },
    enquiry: {
      kicker: 'GET A CUSTOM QUOTE',
      title: 'Request Your Estimate',
      subtitle:
        'Submit your dimensions, quantity, and requirements. Our team will review the details and provide a direct quote.',
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. Ramesh Chandra',
      phone: 'Phone Number',
      phonePlaceholder: 'e.g. +91 98765 43210',
      email: 'Email Address',
      emailPlaceholder: 'e.g. name@example.com',
      optional: '(Optional)',
      productService: 'Product or Service',
      quantity: 'Quantity Needed',
      dimensions: 'Required Dimensions',
      dimensionsPlaceholder: 'e.g. 4 ft × 2.5 ft or 20 gauge',
      location: 'City or Delivery Location',
      locationPlaceholder: 'e.g. City, Industrial Area, or Project Site',
      description: 'Project Description & Specific Requirements',
      descriptionPlaceholder:
        'Describe your design, gauge thickness, corner latches, mounting style, or delivery urgency...',
      sendWhatsapp: 'Send via WhatsApp',
      sendEmail: 'Send via Email',
      errorName: 'Please enter your full name.',
      errorPhone: 'Please provide a valid contact phone number.',
      successWhatsapp:
        'Enquiry prefilled in WhatsApp. Tap send to share directly with MAA LAXMI STEEL & SUPPLIERS.',
      successEmail: 'Email draft created. Please send to complete your enquiry.',
      directNotice: 'Direct inquiry routes: WhatsApp & Mailto',
    },
    contact: {
      kicker: 'GET IN TOUCH',
      title: 'Direct Contact & Inquiries',
      subtitle:
        'Reach out directly for quotations, dimension reviews, and production schedules.',
      phoneTitle: 'Telephone Inquiries',
      phoneDesc: 'Speak directly regarding product availability, sizes, and orders.',
      whatsappTitle: 'WhatsApp Messaging',
      whatsappDesc: 'Send sketches, photos, dimension sheets, and ask for instant quotes.',
      whatsappAction: 'Chat on WhatsApp',
      emailTitle: 'Email Correspondence',
      emailDesc: 'Send tender files, drawing PDFs, and purchase orders.',
      hoursNotice: 'Monday – Saturday: 9:00 AM – 7:30 PM (IST)',
      openForm: 'Open Custom Quote Form',
    },
    footer: {
      description:
        'Quality galvanized iron (GI) products, heavy-gauge steel frame fabrication, illuminated 3D LED signage, GSB boards, flex printing, and modular exhibition stall solutions built to customer specifications.',
      quickWhatsapp: 'Quick WhatsApp Enquiry',
      categoriesTitle: 'Product Categories',
      servicesTitle: 'Services & Solutions',
      contactTitle: 'Direct Contact',
      rights: 'All rights reserved.',
      terms: 'Order & Quotation Terms',
      privacy: 'Privacy Policy',
    },
    floating: {
      whatsappTooltip: 'Chat with Maa Laxmi Steel',
      backToTop: 'Back to top of page',
    },
    quickQuote: {
      kicker: 'FAST SPECIFICATION & QUOTE',
      title: 'Request a Quick Quote',
      productLabel: 'Select Product / Service',
      quantityLabel: 'Quantity Needed',
      dimensionsLabel: 'Required Dimensions / Sheet Gauge',
      dimensionsPlaceholder: 'e.g., 3 ft × 2 ft, 20 gauge, custom',
      nameLabel: 'Your Full Name',
      namePlaceholder: 'e.g., Rajesh Kumar',
      phoneLabel: 'Contact Phone Number',
      phonePlaceholder: 'e.g., +91 98765 43210',
      notesLabel: 'Specific Notes / Fittings (Optional)',
      notesPlaceholder: 'e.g., Need handles, padlock hasp, urgent delivery...',
      submitWhatsApp: 'Send Quote Request on WhatsApp',
      sentSuccess: 'Opening WhatsApp with your formatted inquiry...',
      openFullForm: 'Need to enter detailed specs? Open full enquiry form',
      callUs: 'Call for immediate quotation',
      close: 'Close',
    },
    productDetail: {
      kicker: 'SPECIFICATION SHEET',
      specsTitle: 'Customizable Parameters',
      customSizeAvailable: 'Custom dimensions and gauge available on request',
      dimensions: 'Dimensions / Gauge',
      dimensionsPlaceholder: 'e.g., 4ft × 2ft × 1.5ft or gauge thickness',
      quantity: 'Quantity Needed',
      notes: 'Custom Specifications / Notes',
      notesPlaceholder: 'Mention locking hasps, handles, finish or accessories...',
      name: 'Your Name',
      namePlaceholder: 'Your Name',
      phone: 'Phone Number',
      phonePlaceholder: 'Phone Number',
      requestWhatsApp: 'Request Quote on WhatsApp',
      directCall: 'Call for Quote',
      close: 'Close',
      sentSuccess: 'Opening WhatsApp with your request...',
    },
  },
  or: {
    nav: {
      home: 'ପ୍ରଧାନ ପୃଷ୍ଠା',
      products: 'ଉତ୍ପାଦ ସମୂହ',
      fabrication: 'ଫ୍ୟାବ୍ରିକେସନ',
      signage: 'ସାଇନେଜ୍ ବୋର୍ଡ',
      events: 'ଷ୍ଟଲ୍ ଓ ଇଭେଣ୍ଟ',
      gallery: 'ଗ୍ୟାଲେରୀ',
      about: 'ଆମ ବିଷୟରେ',
      contact: 'ଯୋଗାଯୋଗ',
      requestQuote: 'କୋଟେସନ୍ ମାଗନ୍ତୁ',
      callUs: 'କଲ୍ କରନ୍ତୁ',
    },
    hero: {
      brandTag: 'ମାଁ ଲକ୍ଷ୍ମୀ ଷ୍ଟିଲ୍ ଆଣ୍ଡ ସପ୍ଲାୟର୍ସ',
      titlePart1: 'ଉଚ୍ଚମାନର ଷ୍ଟିଲ୍।',
      titlePart2: 'ବିଶ୍ୱସ୍ତ ଯୋଗାଣ।',
      titlePart3: 'କଷ୍ଟମ୍ ସମାଧାନ।',
      subTagline:
        'ଜି.ଆଇ. ସାମଗ୍ରୀ, ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ, ଷ୍ଟିଲ୍ ଫ୍ରେମ୍, ସାଇନେଜ୍ ବୋର୍ଡ ଏବଂ ଅର୍ଡର ମୁତାବକ ସମାଧାନ ପାଇଁ ଆପଣଙ୍କ ବିଶ୍ୱସ୍ତ ସହଯୋଗୀ।',
      bullet1: 'ଷ୍ଟାଣ୍ଡାର୍ଡ ଓ କଷ୍ଟମ୍ ସାଇଜ୍ ଉପଲବ୍ଧ',
      bullet2: 'ବ୍ୟବସାୟିକ ଓ ଖୁଚୁରା ଯୋଗାଣ',
      bullet3: 'ଫ୍ୟାବ୍ରିକେସନ ଓ ୱେଲ୍ଡିଂ ୱାର୍କସପ୍',
      bullet4: 'ମାପ ଅନୁସାରେ ତୁରନ୍ତ ଦର କୋଟେସନ୍',
      exploreBtn: 'ଆମର ଉତ୍ପାଦ ଦେଖନ୍ତୁ',
      quoteBtn: 'କୋଟେସନ୍ ମାଗନ୍ତୁ',
      verifiedTag: 'ପ୍ରମାଣିତ ଯୋଗାଣକାରୀ',
      heroCardSubtitle: 'ଜି.ଆଇ. ସାମଗ୍ରୀ • ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ • ସାଇନେଜ୍ ଓ ଷ୍ଟଲ୍',
      heroCardBtn: 'ଆପଣଙ୍କ ମାପ ସହ କୋଟେସନ୍ ମାଗନ୍ତୁ',
      giSheetBoxTitle: 'ଜି.ଆଇ. ସିଟ୍ ଓ ବାକ୍ସ',
      giSheetBoxDesc: 'ପ୍ଲେନ୍ ଓ କରୁଗେଟେଡ୍ ସିଟ୍, ଟ୍ରଙ୍କ୍, ୟୁଟିଲିଟି ବାକ୍ସ ଏବଂ ଡ୍ରମ୍।',
      signageStallsTitle: 'ସାଇନେଜ୍ ଓ ଷ୍ଟଲ୍',
      signageStallsDesc: 'ଏଲ୍.ଇ.ଡି. ବୋର୍ଡ, ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ, କ୍ୟାବିନ୍ ଓ ଷ୍ଟ୍ରକଚର୍।',
      scrollHint: 'କାଟାଲଗ୍ ଅନୁସନ୍ଧାନ କରନ୍ତୁ',
    },
    services: {
      giTitle: 'ଜି.ଆଇ. ସାମଗ୍ରୀ',
      giSubtitle: 'ପ୍ଲେନ୍ ଓ କରୁଗେଟେଡ୍ ସିଟ୍, ବାକ୍ସ, ଡ୍ରମ୍',
      metalTitle: 'ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ',
      metalSubtitle: 'ଫ୍ରେମ୍, ଖଟିଆ, ପାଇପ୍ ଓ ସାଇଟ୍ କ୍ୟାବିନ୍',
      signageTitle: 'ସାଇନେଜ୍ ବୋର୍ଡ',
      signageSubtitle: '୩ଡି ଏଲ୍.ଇ.ଡି. ବୋର୍ଡ ଓ ଜି.ଏସ୍.ବି. ଲାଇଟ୍ ବୋର୍ଡ',
      flexTitle: 'ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ',
      flexSubtitle: 'ହାଇ-ରିଜୋଲ୍ୟୁସନ ବ୍ୟାନର ଓ ବ୍ୟାକଲିଟ୍ ଫ୍ଲେକ୍ସ',
      stallsTitle: 'ଷ୍ଟଲ୍ ଓ କ୍ୟାବିନ୍',
      stallsSubtitle: 'ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ ଓ ମଡ୍ୟୁଲାର ସାଇଟ୍ କ୍ୟାବିନ୍',
    },
    products: {
      kicker: 'ପ୍ରିସିସନ୍ ଷ୍ଟିଲ୍ ଓ ଫ୍ୟାବ୍ରିକେସନ କାଟାଲଗ୍',
      title: 'ଉତ୍ପାଦ ଏବଂ ସାମଗ୍ରୀ ସମୂହ',
      subtitle:
        'ଗାଲଭାନାଇଜ୍ଡ ଆଇରନ ୟୁଟିଲିଟି ବାକ୍ସ, ଷ୍ଟ୍ରକଚରାଲ ଫ୍ରେମ୍ ଠାରୁ ଆଲୋକିତ ସାଇନେଜ୍ ଏବଂ ଇଭେଣ୍ଟ ଷ୍ଟଲ୍ — ସବୁକିଛି ଆପଣଙ୍କ ମାପ ମୁତାବକ ତିଆରି।',
      searchPlaceholder: 'ଉତ୍ପାଦ ଖୋଜନ୍ତୁ (ଯଥା: ଜି.ଆଇ. ବାକ୍ସ, ଏଲ୍.ଇ.ଡି, ଖଟିଆ, ଚିମନି)...',
      showing: 'ଦର୍ଶାଯାଉଛି',
      of: '/',
      items: 'ସାମଗ୍ରୀ',
      all: 'ସମସ୍ତ ଉତ୍ପାଦ',
      giCategory: 'ଜି.ଆଇ. ଓ ମେଟାଲ ବାକ୍ସ',
      framesCategory: 'ଫ୍ରେମ୍ ଓ କ୍ୟାବିନ୍',
      specialtyCategory: 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ',
      signageCategory: 'ସାଇନେଜ୍ ଓ ପ୍ରିଣ୍ଟ',
      eventsCategory: 'ଇଭେଣ୍ଟ ଷ୍ଟଲ୍',
      customSizing: 'କଷ୍ଟମ୍ ସାଇଜ୍',
      priceOnRequest: 'ଅନୁରୋଧ କ୍ରମେ ଦର',
      enquireNow: 'ଅର୍ଡର ପାଇଁ ପଚାରନ୍ତୁ',
      whatsapp: 'ହ୍ୱାଟସ୍‌ଆପ୍',
      noResults: 'କୌଣସି ଉତ୍ପାଦ ମିଳିଲା ନାହିଁ',
      noResultsDesc: 'ଅନ୍ୟ ଶବ୍ଦ ଖୋଜନ୍ତୁ କିମ୍ବା ସମସ୍ତ କ୍ୟାଟାଗୋରୀ ଦେଖନ୍ତୁ।',
      resetFilters: 'ଫିଲ୍ଟର୍ ରିସେଟ୍ କରନ୍ତୁ',
    },
    fabrication: {
      kicker: 'ସ୍ପେସିଆଲ ମେଟାଲ ଫ୍ୟାବ୍ରିକେସନ',
      titlePart1: 'ଆପଣଙ୍କ ଆବଶ୍ୟକତା।',
      titlePart2: 'ଆମର ଫ୍ୟାବ୍ରିକେସନ।',
      description:
        'ପ୍ରତ୍ୟେକ ପ୍ରୋଜେକ୍ଟର ନିଜସ୍ୱ ସାଇଟ୍ ମାପ, ମେଟାଲ ଗେଜ୍ ଏବଂ କାର୍ଯ୍ୟକ୍ଷମ ଆବଶ୍ୟକତା ରହିଥାଏ। ଆପଣଙ୍କୁ ମଜଭୁତ ଜି.ଆଇ. ଷ୍ଟୋରେଜ୍ ଟ୍ରଙ୍କ୍, କୋଣ ଫ୍ରେମ୍, ଖଟିଆ ଫ୍ରେମ୍ କିମ୍ବା ସାଇଟ୍ କ୍ୟାବିନ୍ ଦରକାର ଥାଉ — ଆମ ୱାର୍କସପ୍ ସିଧାସଳଖ ଆପଣଙ୍କ ମାପ ଅନୁଯାୟୀ ନିର୍ମାଣ କରେ।',
      p1Title: 'ପ୍ରିସିସନ୍ ସିଟ୍ ମେଟାଲ କାର୍ଯ୍ୟ',
      p1Desc:
        'ବାକ୍ସ, ଡ୍ରମ୍, ଆଲୋକ ଆବରଣ ଏବଂ ବେକେରୀ ସାମଗ୍ରୀ ପାଇଁ ଗାଲଭାନାଇଜ୍ଡ ସିଟ୍ କଟିଂ, ବେଣ୍ଡିଂ ଓ ରିଭେଟିଂ।',
      p2Title: 'ଷ୍ଟ୍ରକଚରାଲ ଆଙ୍ଗେଲ୍ ଓ ପାଇପ୍ ୱେଲ୍ଡିଂ',
      p2Desc:
        'ମେସିନ୍ ବେସ୍, ଖଟିଆ ବେଡ୍ ଫ୍ରେମ୍, ସେଡ୍ ଫ୍ରେମ୍ ଏବଂ ପୋର୍ଟେବଲ୍ ସୁରକ୍ଷା କ୍ୟାବିନ୍ ପାଇଁ ହେଭି-ଡ୍ୟୁଟି ୱେଲ୍ଡିଂ।',
      p3Title: 'ପୂଜା ଓ ସ୍ୱତନ୍ତ୍ର ଧାତୁ କାରିଗରୀ',
      p3Desc:
        'ଅର୍ଡର ମୁତାବକ ସୋପାନବିଶିଷ୍ଟ ହୋମକୁଣ୍ଡ, ଆକର୍ଷଣୀୟ ମନ୍ଦିର, ରୋଷେଇ ଘର ଚିମନି ହୁଡ୍ ଏବଂ କଷ୍ଟମ ଫିକ୍ସଚର।',
      ctaBtn: 'ଆପଣଙ୍କ ପ୍ରୋଜେକ୍ଟ ବିଷୟରେ କଥା ହୁଅନ୍ତୁ',
      ctaHint: 'କୌଣସି ନିର୍ଦ୍ଦିଷ୍ଟ ସୀମା ନାହିଁ — ଯେକୌଣସି ମାପ ସ୍ୱାଗତଯୋଗ୍ୟ',
      fab1Tag: 'FAB-01 // କଟିଂ ଓ ବେଣ୍ଡିଂ',
      fab1Title: 'ସିଟ୍ ମେଟାଲ୍ ଫର୍ମିଂ',
      fab1Desc:
        'ସର୍ବାଧିକ ଦୃଢ଼ତା ପାଇଁ ଗାଲଭାନାଇଜ୍ଡ ସିଟ୍‌କୁ ମେସିନ୍ ଦ୍ୱାରା କଟାଯାଇ ଫୋଲ୍ଡ କରାଯାଏ।',
      fab2Tag: 'FAB-02 // ୱେଲ୍ଡିଂ',
      fab2Title: 'ଷ୍ଟ୍ରକଚରାଲ ଜଏଣ୍ଟ ୱେଲ୍ଡିଂ',
      fab2Desc:
        'ଟ୍ୟୁବୁଲାର୍ ଷ୍ଟିଲ୍ ସେକ୍ସନ, ଆଙ୍ଗେଲ୍ ଚ୍ୟାନେଲ୍ ଏବଂ ପ୍ଲେଟ୍ ମଧ୍ୟରେ ନିରନ୍ତର ଓ ମଜଭୁତ ୱେଲ୍ଡିଂ।',
      fab3Tag: 'FAB-03 // ଆସେମ୍ବ୍ଲି',
      fab3Title: 'ମଡ୍ୟୁଲାର୍ ୟୁନିଟ୍ ନିର୍ମାଣ',
      fab3Desc:
        'ପ୍ରିଫାବ୍ରିକେଟେଡ୍ କ୍ୟାବିନ୍ ପ୍ୟାନେଲ୍, ସିକ୍ୟୁରିଟି କିଓସ୍କ ଏବଂ ପ୍ରଦର୍ଶନୀ ଫ୍ରେମ୍ ସାଇଟ୍‌ରେ ସ୍ଥାପନ ପାଇଁ ପ୍ରସ୍ତୁତ।',
      fab4Tag: 'FAB-04 // ଡେଲିଭରୀ',
      fab4Title: 'ଗୁଣବତ୍ତା ଯାଞ୍ଚ ଓ ହସ୍ତାନ୍ତର',
      fab4Desc:
        'ଗ୍ରାହକଙ୍କୁ ପ୍ରଦାନ ପୂର୍ବରୁ ସମଗ୍ର ମାପ, ଲକ୍ ଆଲାଇନ୍‌ମେଣ୍ଟ ଏବଂ କୋଣ ୱେଲ୍ଡ ଯାଞ୍ଚ କରାଯାଏ।',
    },
    signage: {
      kicker: 'ସାଇନେଜ୍ ଓ ବିଜ୍ଞାପନ ସମାଧାନ',
      titlePart1: 'ଆପଣଙ୍କ ଦୋକାନକୁ କରନ୍ତୁ',
      titlePart2: 'ଦିନରାତି ଆକର୍ଷଣୀୟ।',
      lightingPreview: 'ଆଲୋକ ପୂର୍ବାବଲୋକନ:',
      day: 'ଦିନ ବେଳା',
      nightGlow: 'ରାତ୍ରି ଆଲୋକ',
      simulatedTagline: 'ଜି.ଏସ୍.ବି. ବୋର୍ଡ · ୩ଡି ଏକ୍ରିଲିକ୍ ଏଲ୍.ଇ.ଡି. · ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ',
      nightDesc:
        'ରାତ୍ରି ଆଲୋକ ସିମ୍ୟୁଲେସନ ସକ୍ରିୟ — ବ୍ୟାକଲିଟ୍ ଡିଫ୍ୟୁଜନ ଏବଂ ଉଚ୍ଚ ଆଲୋକିତ ଏଲ୍.ଇ.ଡି. ପ୍ରଦର୍ଶନ',
      dayDesc: 'ଦିନ ଆଲୋକ ସିମ୍ୟୁଲେସନ ସକ୍ରିୟ — ପରିଷ୍କାର ଓ ଉଚ୍ଚ କଣ୍ଟ୍ରାଷ୍ଟ ସାଇନେଜ୍ ଦୃଶ୍ୟମାନତା',
      highlights: 'ବିଶେଷତା',
      ctaTitle: 'ଆପଣଙ୍କ ଦୋକାନ ବା ହୋର୍ଡିଂ ପାଇଁ ସ୍ୱତନ୍ତ୍ର ମାପ ଆବଶ୍ୟକ କି?',
      ctaDesc:
        'ସଠିକ୍ କୋଟେସନ୍ ପାଇଁ ଆବଶ୍ୟକ ଲମ୍ବ, ଉଚ୍ଚତା ଏବଂ ଆଲୋକ ପସନ୍ଦ ଜଣାନ୍ତୁ।',
      ctaBtn: 'ସାଇନେଜ୍ ପାଇଁ ପଚାରନ୍ତୁ',
    },
    events: {
      kicker: 'ଫ୍ୟାବ୍ରିକେସନ ଓ ଇଭେଣ୍ଟ ସମାଧାନ',
      titlePart1: 'ଏପରି ସ୍ଥାନ ଯାହା',
      titlePart2: 'କଳ୍ପନାକୁ ଜୀବନ୍ତ କରେ।',
      subtitle:
        'ପ୍ରଚାରମୂଳକ ଷ୍ଟଲ୍ ଓ ପ୍ରଦର୍ଶନୀ ପାଭିଲିୟନ ଠାରୁ ଆରମ୍ଭ କରି ମଜଭୁତ ସାଇଟ୍ କ୍ୟାବିନ୍ ଏବଂ ଷ୍ଟେଜ୍ ଫ୍ରେମ୍ — ଆପଣଙ୍କ ଆବଶ୍ୟକତା ଅନୁସାରେ ତିଆରି।',
      configLabel: 'କନଫିଗରେସନ୍:',
      requestStallQuote: 'ଷ୍ଟଲ୍ କୋଟେସନ୍ ମାଗନ୍ତୁ',
      calloutTitle: 'ଆଗାମୀ ପ୍ରଦର୍ଶନୀ ବା ମେଳା ପାଇଁ ଯୋଜନା କରୁଛନ୍ତି କି?',
      calloutDesc:
        'ସମ୍ପୂର୍ଣ୍ଣ ମେଟାଲ ଷ୍ଟ୍ରକଚର ଫ୍ୟାବ୍ରିକେସନ ପାଇଁ ଷ୍ଟଲ୍ ମାପ, ଲେଆଉଟ୍ ଏବଂ ତାରିଖ ଜଣାନ୍ତୁ।',
      bookConsultation: 'ଷ୍ଟଲ୍ ପରାମର୍ଶ ବୁକ୍ କରନ୍ତୁ',
    },
    gallery: {
      kicker: 'ଷ୍ଟିଲ୍ ଯୋଗାଣ ଓ ଫ୍ୟାବ୍ରିକେସନ ଗ୍ୟାଲେରୀ',
      title: 'କାରିଗରୀ ଏବଂ ଉତ୍ପାଦର ଝଲକ',
      infoNotice:
        'ଆମର ଫ୍ୟାବ୍ରିକେସନ ପରିସର, ସାମଗ୍ରୀ ଏବଂ ଉତ୍ପାଦନ କ୍ଷମତା ପ୍ରଦର୍ଶନ କରୁଥିବା ପ୍ରକୃତ ରେଫରେନ୍ସ ଫଟୋଗ୍ରାଫ୍।',
      all: 'ସମସ୍ତ ପ୍ରୋଜେକ୍ଟ',
      viewDetails: 'ବିବରଣୀ ଦେଖନ୍ତୁ',
      refPhoto: 'ରେଫରେନ୍ସ ଫଟୋଗ୍ରାଫ୍',
      scopeSpec: 'ପରିସର ଓ ସ୍ପେସିଫିକେସନ୍',
      materials: 'ମୁଖ୍ୟ ସାମଗ୍ରୀ ଓ କୌଶଳ',
      refDimension: 'ଷ୍ଟାଣ୍ଡାର୍ଡ ରେଫରେନ୍ସ ମାପ',
      enquireSimilar: 'ଏହିଭଳି ପ୍ରୋଜେକ୍ଟ ପାଇଁ ପଚାରନ୍ତୁ',
      close: 'ବନ୍ଦ କରନ୍ତୁ',
    },
    howItWorks: {
      kicker: 'ସରଳ ଓ ସ୍ୱଚ୍ଛ ପ୍ରକ୍ରିୟା',
      title: 'ଏହା କିପରି କାମ କରେ',
      subtitle:
        'ପ୍ରାରମ୍ଭିକ ଡ୍ରଇଂ ବା ମାପ ଠାରୁ ସମ୍ପୂର୍ଣ୍ଣ ଧାତୁ ନିର୍ମାଣ ପର୍ଯ୍ୟନ୍ତ — ଏକ ନିରବଚ୍ଛିନ୍ନ ୪-ପାହାଚ ବିଶିଷ୍ଟ ସହଯୋଗ।',
      step1Title: 'ଆବଶ୍ୟକତା ଜଣାନ୍ତୁ',
      step1Desc:
        'ଆମ ଫର୍ମ କିମ୍ବା ହ୍ୱାଟସ୍‌ଆପ୍ ମାଧ୍ୟମରେ ଉତ୍ପାଦ, ମାପ, ସିଟ୍ ଗେଜ୍ ଏବଂ ପରିମାଣ ଜଣାନ୍ତୁ।',
      step2Title: 'ବିସ୍ତୃତ ଆଲୋଚନା',
      step2Desc:
        'ଆମ ଟିମ୍ ମାପ ଏବଂ ଫ୍ୟାବ୍ରିକେସନ ଆବଶ୍ୟକତା ସମୀକ୍ଷା କରି ଯାନ୍ତ୍ରିକ ଫିଟିଂ ସ୍ପଷ୍ଟ କରିବେ।',
      step3Title: 'କୋଟେସନ୍ ପାଆନ୍ତୁ',
      step3Desc:
        'ଆପଣଙ୍କ ପ୍ରୋଜେକ୍ଟ ଅନୁସାରେ ସ୍ୱଚ୍ଛ ଦର, ସାମଗ୍ରୀ ବିବରଣୀ ଏବଂ ନିର୍ମାଣ ସମୟସୀମା ପାଆନ୍ତୁ।',
      step4Title: 'ଅର୍ଡର ନିଶ୍ଚିତ କରନ୍ତୁ',
      step4Desc:
        'ସର୍ତ୍ତାବଳୀ ନିଶ୍ଚିତ ହେବା ପରେ ତୁରନ୍ତ ଉତ୍ପାଦନ, ଫ୍ୟାବ୍ରିକେସନ କିମ୍ବା ଇଭେଣ୍ଟ ସେଟଅପ୍ ଆରମ୍ଭ ହୁଏ।',
    },
    about: {
      kicker: 'ଆମ ବ୍ୟବସାୟ ବିଷୟରେ',
      titlePart1: 'ବ୍ୟବହାରିକ ସମାଧାନ।',
      titlePart2: 'ଅର୍ଡର ମୁତାବକ ନିର୍ମାଣ।',
      p1: 'ମାଁ ଲକ୍ଷ୍ମୀ ଷ୍ଟିଲ୍ ଆଣ୍ଡ ସପ୍ଲାୟର୍ସ ହେଉଛି ଏକ ପ୍ରତିଷ୍ଠିତ ଷ୍ଟିଲ୍ ଯୋଗାଣକାରୀ ଏବଂ ଫ୍ୟାବ୍ରିକେସନ ସଂସ୍ଥା ଯାହା ସ୍ୱତନ୍ତ୍ର ଗାଲଭାନାଇଜ୍ଡ ଆଇରନ (ଜି.ଆଇ.) ସାମଗ୍ରୀ, କଷ୍ଟମ ଧାତୁ ଷ୍ଟ୍ରକଚର, ଆଲୋକିତ ସାଇନେଜ୍, ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ ଏବଂ ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ ପ୍ରଦାନ କରେ।',
      p2: 'ସାଧାରଣ ଏକାଭଳି ସାମଗ୍ରୀ ବଦଳରେ, ଆମ ଉତ୍ପାଦନ ଗ୍ରାହକଙ୍କ ବ୍ୟକ୍ତିଗତ ଆବଶ୍ୟକତା ଅନୁଯାୟୀ କରାଯାଏ। ଆମେ ବ୍ୟକ୍ତିବିଶେଷ, ଠିକାଦାର, ବାଣିଜ୍ୟିକ ସଂସ୍ଥା ଏବଂ ଇଭେଣ୍ଟ ଆୟୋଜକଙ୍କ ସହ ସିଧାସଳଖ କାମ କରୁ।',
      p3: 'ଗୋଟିଏ କଷ୍ଟମ୍ ଷ୍ଟୋରେଜ୍ ଟ୍ରଙ୍କ୍ ହେଉ, ହେଭି ୱେଲ୍ଡେଡ୍ ପାଇପ୍ ଫ୍ରେମ୍, ରାସ୍ତାକଡ଼ ଏଲ୍.ଇ.ଡି. ଡିସପ୍ଲେ ବୋର୍ଡ କିମ୍ବା ସମ୍ପୂର୍ଣ୍ଣ ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ — ଆମେ ସ୍ୱଚ୍ଛ କୋଟେସନ୍ ଏବଂ ନିର୍ଭରଯୋଗ୍ୟ କାର୍ଯ୍ୟ ନିଶ୍ଚିତ କରୁ।',
      pillar1Title: 'ସିଧାସଳଖ କଥାବାର୍ତ୍ତା',
      pillar1Desc:
        'ତୁରନ୍ତ କୋଟେସନ୍ ପାଇଁ ଆମ ଟିମ୍ ସହିତ ସିଧାସଳଖ ମାପ ଏବଂ ଆବଶ୍ୟକତା ଆଲୋଚନା କରନ୍ତୁ।',
      pillar2Title: 'ଅର୍ଡର ମୁତାବକ ଫ୍ୟାବ୍ରିକେସନ',
      pillar2Desc: 'ଗ୍ରାହକଙ୍କ ସଠିକ୍ ମାପ ଅନୁଯାୟୀ କଟା, ବେଣ୍ଡ୍, ୱେଲ୍ଡିଂ ଏବଂ ପ୍ରସ୍ତୁତ।',
      pillar3Title: 'ବିସ୍ତୃତ ପରିସର',
      pillar3Desc:
        'ଷ୍ଟିଲ୍ ଉତ୍ପାଦ, ରିଟେଲ୍ ସାଇନେଜ୍, ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟ ଏବଂ ଇଭେଣ୍ଟ ସେଟଅପ୍ ଏକାଠି ଉପଲବ୍ଧ।',
      philTitle: 'ସେବା ଆଦର୍ଶ',
      f1Title: 'କୌଣସି ଲୁକ୍କାୟିତ ଦର ନାହିଁ',
      f1Desc:
        'ନିଶ୍ଚିତ ପ୍ରୋଜେକ୍ଟ ଆବଶ୍ୟକତା ଆଧାରରେ ସ୍ପଷ୍ଟ ସାମଗ୍ରୀ ସ୍ପେସିଫିକେସନ୍ ଏବଂ ଦର।',
      f2Title: 'ଦୀର୍ଘସ୍ଥାୟୀ ବ୍ୟବହାର ପାଇଁ ନିର୍ମିତ',
      f2Desc:
        'ଦୈନନ୍ଦିନ ଦୀର୍ଘାୟୁ ପାଇଁ ଉଚ୍ଚ ଗେଜ୍ ସାମଗ୍ରୀ ଏବଂ ଦୃଢ଼ ଯୋଡ଼େଇ ନିର୍ମାଣ।',
      f3Title: 'ସମସ୍ତ ମାପରେ ଉପଲବ୍ଧ',
      f3Desc:
        'ପ୍ରତ୍ୟେକ ବାକ୍ସ, ସିଟ୍ କଟ୍, ଫ୍ରେମ୍ ଏବଂ ବ୍ୟାନର ଆପଣଙ୍କ ନିର୍ଦ୍ଦିଷ୍ଟ ମାପରେ ତିଆରି ହୋଇପାରିବ।',
      directContact: 'ସିଧାସଳଖ ଯୋଗାଯୋଗ:',
    },
    enquiry: {
      kicker: 'କଷ୍ଟମ୍ କୋଟେସନ୍ ପାଆନ୍ତୁ',
      title: 'ଆପଣଙ୍କ ଆନୁମାନିକ ଦର ମାଗନ୍ତୁ',
      subtitle:
        'ଆପଣଙ୍କ ମାପ, ପରିମାଣ ଏବଂ ଆବଶ୍ୟକତା ଦାଖଲ କରନ୍ତୁ। ଆମ ଟିମ୍ ସମୀକ୍ଷା କରି ସିଧାସଳଖ କୋଟେସନ୍ ପ୍ରଦାନ କରିବେ।',
      fullName: 'ସମ୍ପୂର୍ଣ୍ଣ ନାମ',
      fullNamePlaceholder: 'ଯଥା: ରମେଶ ଚନ୍ଦ୍ର',
      phone: 'ଫୋନ୍ ନମ୍ବର',
      phonePlaceholder: 'ଯଥା: +୯୧ ୯୮୭୬୫ ୪୩୨୧୦',
      email: 'ଇମେଲ୍ ଠିକଣା',
      emailPlaceholder: 'ଯଥା: name@example.com',
      optional: '(ଇଚ୍ଛାଧୀନ)',
      productService: 'ଉତ୍ପାଦ ବା ସେବା',
      quantity: 'ଆବଶ୍ୟକ ପରିମାଣ',
      dimensions: 'ଆବଶ୍ୟକ ମାପ',
      dimensionsPlaceholder: 'ଯଥା: ୪ ଫୁଟ × ୨.୫ ଫୁଟ କିମ୍ବା ୨୦ ଗେଜ୍',
      location: 'ସହର ବା ଡେଲିଭରୀ ସ୍ଥାନ',
      locationPlaceholder: 'ଯଥା: ସହର, ଶିଳ୍ପାଞ୍ଚଳ କିମ୍ବା ପ୍ରୋଜେକ୍ଟ ସାଇଟ୍',
      description: 'ପ୍ରୋଜେକ୍ଟ ବିବରଣୀ ଓ ସ୍ୱତନ୍ତ୍ର ଆବଶ୍ୟକତା',
      descriptionPlaceholder:
        'ଡିଜାଇନ୍, ଗେଜ୍ ମୋଟାପଣ, ଲକ୍, ଫିଟିଂ କିମ୍ବା ଡେଲିଭରୀ ଜରୁରୀ ବିଷୟରେ ଉଲ୍ଲେଖ କରନ୍ତୁ...',
      sendWhatsapp: 'ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ ପଠାନ୍ତୁ',
      sendEmail: 'ଇମେଲ୍‌ରେ ପଠାନ୍ତୁ',
      errorName: 'ଦୟାକରି ଆପଣଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ ଲେଖନ୍ତୁ।',
      errorPhone: 'ଦୟାକରି ଏକ ବୈଧ ଫୋନ୍ ନମ୍ବର ଦିଅନ୍ତୁ।',
      successWhatsapp:
        'ଅନୁରୋଧ ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ ପ୍ରସ୍ତୁତ ହୋଇଛି। ମାଁ ଲକ୍ଷ୍ମୀ ଷ୍ଟିଲ୍‌କୁ ପଠାଇବା ପାଇଁ ସେଣ୍ଡ୍ ଦବାନ୍ତୁ।',
      successEmail: 'ଇମେଲ୍ ଡ୍ରାଫ୍ଟ ପ୍ରସ୍ତୁତ ହୋଇଛି। ଦୟାକରି ପଠାନ୍ତୁ।',
      directNotice: 'ସିଧାସଳଖ ମାଧ୍ୟମ: ହ୍ୱାଟସ୍‌ଆପ୍ ଓ ଇମେଲ୍',
    },
    contact: {
      kicker: 'ଯୋଗାଯୋଗ କରନ୍ତୁ',
      title: 'ସିଧାସଳଖ ଯୋଗାଯୋଗ ଓ ଅନୁସନ୍ଧାନ',
      subtitle:
        'କୋଟେସନ୍, ମାପ ସମୀକ୍ଷା ଏବଂ ଉତ୍ପାଦନ ସମୟସୂଚୀ ପାଇଁ ସିଧାସଳଖ ଯୋଗାଯୋଗ କରନ୍ତୁ।',
      phoneTitle: 'ଟେଲିଫୋନ୍ ଅନୁସନ୍ଧାନ',
      phoneDesc: 'ଉତ୍ପାଦ ଉପଲବ୍ଧତା, ମାପ ଏବଂ ଅର୍ଡର ବିଷୟରେ ସିଧାସଳଖ କଥା ହୁଅନ୍ତୁ।',
      whatsappTitle: 'ହ୍ୱାଟସ୍‌ଆପ୍ ମେସେଜ୍',
      whatsappDesc: 'ଡ୍ରଇଂ, ଫଟୋ, ମାପ ସିଟ୍ ପଠାଇ ତୁରନ୍ତ ଦର ଜାଣନ୍ତୁ।',
      whatsappAction: 'ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ ଚାଟ୍ କରନ୍ତୁ',
      emailTitle: 'ଇମେଲ୍ ପତ୍ରାଚାର',
      emailDesc: 'ଟେଣ୍ଡର ଫାଇଲ୍, ଡ୍ରଇଂ ପିଡିଏଫ୍ ଏବଂ ପର୍ଚେଜ୍ ଅର୍ଡର ପଠାନ୍ତୁ।',
      hoursNotice: 'ସୋମବାର – ଶନିବାର: ସକାଳ ୯:୦୦ – ସନ୍ଧ୍ୟା ୭:୩୦',
      openForm: 'କୋଟେସନ୍ ଫର୍ମ ଖୋଲନ୍ତୁ',
    },
    footer: {
      description:
        'ଗାଲଭାନାଇଜ୍ଡ ଆଇରନ (ଜି.ଆଇ.) ସାମଗ୍ରୀ, ମଜଭୁତ ଷ୍ଟିଲ୍ ଫ୍ରେମ୍ ଫ୍ୟାବ୍ରିକେସନ, ଆଲୋକିତ ୩ଡି ଏଲ୍.ଇ.ଡି. ସାଇନେଜ୍, ଜି.ଏସ୍.ବି. ବୋର୍ଡ, ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ ଏବଂ ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍ ସମାଧାନ।',
      quickWhatsapp: 'ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ ଶୀଘ୍ର ପଚାରନ୍ତୁ',
      categoriesTitle: 'ଉତ୍ପାଦ ବର୍ଗ',
      servicesTitle: 'ସେବା ଓ ସମାଧାନ',
      contactTitle: 'ସିଧାସଳଖ ଯୋଗାଯୋଗ',
      rights: 'ସର୍ବସ୍ୱତ୍ୱ ସଂରକ୍ଷିତ।',
      terms: 'ଅର୍ଡର ଓ କୋଟେସନ୍ ସର୍ତ୍ତାବଳୀ',
      privacy: 'ଗୋପନୀୟତା ନୀତି',
    },
    floating: {
      whatsappTooltip: 'ମାଁ ଲକ୍ଷ୍ମୀ ଷ୍ଟିଲ୍ ସହିତ ଚାଟ୍ କରନ୍ତୁ',
      backToTop: 'ଉପରକୁ ଯାଆନ୍ତୁ',
    },
    quickQuote: {
      kicker: 'ତୁରନ୍ତ ସ୍ପେସିଫିକେସନ୍ ଓ କୋଟେସନ୍',
      title: 'ତୁରନ୍ତ କୋଟେସନ୍ ମାଗନ୍ତୁ',
      productLabel: 'ଉତ୍ପାଦ ବା ସେବା ବାଛନ୍ତୁ',
      quantityLabel: 'ଆବଶ୍ୟକ ପରିମାଣ',
      dimensionsLabel: 'ଆବଶ୍ୟକ ମାପ / ସିଟ୍ ଗେଜ୍',
      dimensionsPlaceholder: 'ଯଥା: ୩ ଫୁଟ × ୨ ଫୁଟ, ୨୦ ଗେଜ୍, କଷ୍ଟମ୍',
      nameLabel: 'ଆପଣଙ୍କ ସମ୍ପୂର୍ଣ୍ଣ ନାମ',
      namePlaceholder: 'ଯଥା: ରାଜେଶ କୁମାର',
      phoneLabel: 'ଯୋଗାଯୋଗ ଫୋନ୍ ନମ୍ବର',
      phonePlaceholder: 'ଯଥା: +୯୧ ୯୮୭୬୫ ୪୩୨୧୦',
      notesLabel: 'ସ୍ୱତନ୍ତ୍ର ନୋଟ୍ / ଫିଟିଂ (ଇଚ୍ଛାଧୀନ)',
      notesPlaceholder: 'ଯଥା: ହ୍ୟାଣ୍ଡେଲ୍, ତାଲା ବ୍ୟବସ୍ଥା, ଜରୁରୀ ଡେଲିଭରୀ...',
      submitWhatsApp: 'ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ କୋଟେସନ୍ ଅନୁରୋଧ ପଠାନ୍ତୁ',
      sentSuccess: 'ଆପଣଙ୍କ ଅନୁରୋଧ ସହ ହ୍ୱାଟସ୍‌ଆପ୍ ଖୋଲାଯାଉଛି...',
      openFullForm: 'ବିସ୍ତୃତ ସ୍ପେସିଫିକେସନ୍ ଦରକାର କି? ସମ୍ପୂର୍ଣ୍ଣ ଫର୍ମ ଖୋଲନ୍ତୁ',
      callUs: 'ତୁରନ୍ତ କୋଟେସନ୍ ପାଇଁ କଲ୍ କରନ୍ତୁ',
      close: 'ବନ୍ଦ କରନ୍ତୁ',
    },
    productDetail: {
      kicker: 'ସ୍ପେସିଫିକେସନ୍ ସିଟ୍',
      specsTitle: 'କଷ୍ଟମାଇଜ୍ କରିବା ପାରାମିଟର',
      customSizeAvailable: 'ଅନୁରୋଧ କ୍ରମେ କଷ୍ଟମ୍ ମାପ ଓ ଗେଜ୍ ଉପଲବ୍ଧ',
      dimensions: 'ମାପ / ଗେଜ୍',
      dimensionsPlaceholder: 'ଯଥା: ୪ ଫୁଟ × ୨ ଫୁଟ × ୧.୫ ଫୁଟ କିମ୍ବା ଗେଜ୍ ମୋଟାପଣ',
      quantity: 'ଆବଶ୍ୟକ ପରିମାଣ',
      notes: 'କଷ୍ଟମ୍ ନିର୍ଦ୍ଦିଷ୍ଟତା / ଟିପ୍ପଣୀ',
      notesPlaceholder: 'ଲକିଂ ହାସ୍ପ୍, ହ୍ୟାଣ୍ଡେଲ୍, ଫିନିସିଂ କିମ୍ବା ଆକ୍ସେସୋରିଜ୍ ଉଲ୍ଲେଖ କରନ୍ତୁ...',
      name: 'ଆପଣଙ୍କ ନାମ',
      namePlaceholder: 'ଆପଣଙ୍କ ନାମ',
      phone: 'ଫୋନ୍ ନମ୍ବର',
      phonePlaceholder: 'ଫୋନ୍ ନମ୍ବର',
      requestWhatsApp: 'ହ୍ୱାଟସ୍‌ଆପ୍‌ରେ କୋଟେସନ୍ ମାଗନ୍ତୁ',
      directCall: 'କୋଟେସନ୍ ପାଇଁ କଲ୍ କରନ୍ତୁ',
      close: 'ବନ୍ଦ କରନ୍ତୁ',
      sentSuccess: 'ଆପଣଙ୍କ ଅନୁରୋଧ ସହ ହ୍ୱାଟସ୍‌ଆପ୍ ଖୋଲାଯାଉଛି...',
    },
  },
};

// Localized product items for Odia
export const ODIA_PRODUCT_DETAILS: Record<
  string,
  {
    name: string;
    categoryLabel: string;
    shortDesc: string;
    detailedDesc: string;
    visualTag: string;
    configurableFields?: string[];
  }
> = {
  'gi-sheets': {
    name: 'ଜି.ଆଇ. ସିଟ୍',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ',
    shortDesc: 'ଛାତ ନିର୍ମାଣ, କ୍ଲାଡିଂ ଏବଂ ସୁରକ୍ଷିତ ଆବରଣ ପାଇଁ ଉଚ୍ଚମାନର ପ୍ଲେନ୍ ଓ କରୁଗେଟେଡ୍ ସିଟ୍।',
    detailedDesc: 'ଗାଲଭାନାଇଜ୍ଡ ଆଇରନ (ଜି.ଆଇ.) ସିଟ୍ ପ୍ଲେନ୍ କିମ୍ବା ପ୍ରୋଫାଇଲ୍ ଫର୍ମାଟରେ ଉପଲବ୍ଧ। ଗେଜ୍ ମୋଟାପଣ, ଚଉଡ଼ା, ଲମ୍ବ ଏବଂ କଟିଂ ସ୍ପେସିଫିକେସନ୍ ଅନୁଯାୟୀ ଯୋଗାଇ ଦିଆଯାଏ।',
    visualTag: 'ଗାଲଭାନାଇଜ୍ଡ ମେଟାଲ',
    configurableFields: ['ସିଟ୍ ଲମ୍ବ ଓ ଚଉଡ଼ା', 'ମୋଟାପଣ / ଗେଜ୍', 'ପ୍ଲେନ୍ ବା କରୁଗେଟେଡ୍', 'ମୋଟ ପରିମାଣ'],
  },
  'gi-boxes': {
    name: 'ଜି.ଆଇ. ବାକ୍ସ',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ',
    shortDesc: 'ଦୀର୍ଘସ୍ଥାୟୀ ଜି.ଆଇ. ୟୁଟିଲିଟି ବାକ୍ସ, ଷ୍ଟୋରେଜ୍ ଟ୍ରଙ୍କ୍ ଏବଂ କଷ୍ଟମ୍ ଧାତୁ ବାକ୍ସ।',
    detailedDesc: 'ତୃଣମୂଳ କଳଙ୍କି ନିରୋଧୀ ଏବଂ ଶକ୍ତିଶାଳୀ ଜି.ଆଇ. ସିଟ୍‌ରୁ ପ୍ରସ୍ତୁତ। ଉପକରଣ ରଖିବା, ଶିଳ୍ପ ଉପକରଣ ଏବଂ ଘରୋଇ ବ୍ୟବହାର ପାଇଁ ଉପଯୁକ୍ତ।',
    visualTag: 'ସିଟ୍ ମେଟାଲ୍',
    configurableFields: ['ଲମ୍ବ × ଚଉଡ଼ା × ଉଚ୍ଚତା', 'ସିଟ୍ ମୋଟାପଣ', 'ହ୍ୟାଣ୍ଡେଲ୍ / ଲକ୍ ସିଷ୍ଟମ୍', 'ଅର୍ଡର ପରିମାଣ'],
  },
  'school-boxes': {
    name: 'ସ୍କୁଲ ବାକ୍ସ',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ',
    shortDesc: 'ବିଦ୍ୟାଳୟ, ପାଠାଗାର ଓ ଶ୍ରେଣୀଗୃହ ସାମଗ୍ରୀ ପାଇଁ ମଜଭୁତ ଧାତୁ ସଂରକ୍ଷଣ ବାକ୍ସ।',
    detailedDesc: 'ବିଦ୍ୟାଳୟ ଏବଂ ତାଲିମ କେନ୍ଦ୍ର ପାଇଁ ପୁସ୍ତକ, ପରୀକ୍ଷା ଖାତା, ଉପକରଣ ରଖିବା ପାଇଁ ଉଦ୍ଦିଷ୍ଟ। ସୁରକ୍ଷିତ ତାଲା ବ୍ୟବସ୍ଥା ଉପଲବ୍ଧ।',
    visualTag: 'ଅନୁଷ୍ଠାନିକ ଷ୍ଟୋରେଜ୍',
    configurableFields: ['ବାକ୍ସ ମାପ (ଲ×ଚ×ଉ)', 'ତାଲା ହାସ୍ପ୍ ପ୍ରକାର', 'ଭିତର ଭାଗ ବିଭାଜନ', 'ଆବଶ୍ୟକ ପରିମାଣ'],
  },
  'letter-boxes': {
    name: 'ଲେଟର ବାକ୍ସ',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ',
    shortDesc: 'ପାଣିପାଗ ସହନଶୀଳ କାନ୍ଥ ଓ ଗେଟ୍‌ରେ ଲାଗୁଥିବା ଜି.ଆଇ. ଚିଠି ଓ ପାର୍ସଲ ବାକ୍ସ।',
    detailedDesc: 'ଜି.ଆଇ. ସିଟ୍‌ରୁ ତିଆରି, ଉପରୁ ଖୋଲିବା ଢାଙ୍କୁଣୀ ଏବଂ ତାଲା ସୁବିଧା ଥିବା ଆବାସିକ ଓ କାର୍ଯ୍ୟାଳୟ ଲେଟର ବକ୍ସ।',
    visualTag: 'ଆବାସିକ ୟୁଟିଲିଟି',
    configurableFields: ['ପରିମାଣ', 'ଫିନିସ୍ / ପେଣ୍ଟ୍ ଚୟନ', 'ମାଉଣ୍ଟିଂ ଶୈଳୀ'],
  },
  'dhan-drum': {
    name: 'ଧାନ ଡ୍ରମ୍ (ଶସ୍ୟ ଷ୍ଟୋରେଜ୍)',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ ସାମଗ୍ରୀ',
    shortDesc: 'ଶସ୍ୟ, ବିହନ ଏବଂ କୃଷି ଉତ୍ପାଦର ସୁରକ୍ଷିତ ସଂରକ୍ଷଣ ପାଇଁ ବଡ଼ ଜି.ଆଇ. ଧାତୁ ଡ୍ରମ୍।',
    detailedDesc: 'ମୂଷା, ପୋକ ଏବଂ ଆର୍ଦ୍ରତା ଠାରୁ ଶସ୍ୟ ସୁରକ୍ଷା ପାଇଁ କୃଷକ ଓ ପରିବାରଙ୍କ ପାଇଁ ପ୍ରସ୍ତୁତ ଦୃଢ଼ ଜି.ଆଇ. ଷ୍ଟୋରେଜ୍ ଡ୍ରମ୍।',
    visualTag: 'କୃଷି ଷ୍ଟୋରେଜ୍',
    configurableFields: ['କ୍ଷମତା (କୁଇଣ୍ଟାଲ୍ / ଲିଟର)', 'ସିଟ୍ ଗେଜ୍', 'ଢାଙ୍କୁଣୀ ଲକ୍ ପ୍ରକାର', 'ପରିମାଣ'],
  },
  'full-frames': {
    name: 'ଫୁଲ୍ ଫ୍ରେମ୍ ଷ୍ଟ୍ରକଚର',
    categoryLabel: 'ଫ୍ରେମ୍ ଓ ଷ୍ଟ୍ରକଚର୍',
    shortDesc: 'ଶିଳ୍ପ, ବାଣିଜ୍ୟିକ ଏବଂ ଆବାସିକ ନିର୍ମାଣ ପାଇଁ ୱେଲ୍ଡେଡ୍ ଷ୍ଟିଲ୍ ଫ୍ରେମ୍।',
    detailedDesc: 'ଆଙ୍ଗେଲ୍ ଆଇରନ, ଚ୍ୟାନେଲ୍ ଏବଂ ଫାଙ୍କା ପାଇପ୍ ଦ୍ୱାରା ନିର୍ମିତ ଭାରବାହୀ ଧାତୁ ଫ୍ରେମ୍। ସାଇଟ୍ ମାପ ଅନୁସାରେ ପ୍ରସ୍ତୁତ।',
    visualTag: 'ଷ୍ଟ୍ରକଚରାଲ୍ ଷ୍ଟିଲ୍',
    configurableFields: ['ସାମଗ୍ରିକ ଫ୍ରେମ୍ ମାପ', 'ମେଟାଲ୍ ସେକ୍ସନ ପ୍ରକାର', 'ଲୋଡ୍ କ୍ଷମତା', 'ପରିମାଣ'],
  },
  'khatia-frames': {
    name: 'ଖଟିଆ ଫ୍ରେମ୍ (ଚାରପାଇ / ବେଡ୍)',
    categoryLabel: 'ଫ୍ରେମ୍ ଓ ଷ୍ଟ୍ରକଚର୍',
    shortDesc: 'ଦୀର୍ଘସ୍ଥାୟୀ ବ୍ୟବହାର ପାଇଁ ହେଭି-ଡ୍ୟୁଟି ୱେଲ୍ଡେଡ୍ ଷ୍ଟିଲ୍ ପାଇପ୍ ଓ ଆଙ୍ଗେଲ୍ ଖଟିଆ ଫ୍ରେମ୍।',
    detailedDesc: 'ମଜଭୁତ ପାଇପ୍ ଓ ଆଙ୍ଗେଲ୍ ଦ୍ୱାରା ୱେଲ୍ଡ କରାଯାଇଥିବା ଖଟିଆ ଫ୍ରେମ୍। ହଷ୍ଟେଲ୍, ଫାର୍ମ, ଘର ଓ ସୁରକ୍ଷା କର୍ମୀଙ୍କ ପାଇଁ ଉତ୍କୃଷ୍ଟ।',
    visualTag: 'ପାଇପ୍ ୱେଲ୍ଡିଂ',
    configurableFields: ['ବେଡ୍ ଆକାର (ଲମ୍ବ × ଚଉଡ଼ା)', 'ପାଇପ୍ ମୋଟାପଣ / ଗେଜ୍', 'ପରିମାଣ'],
  },
  'cabins': {
    name: 'ପୋର୍ଟେବଲ୍ କ୍ୟାବିନ୍',
    categoryLabel: 'ଫ୍ରେମ୍ ଓ ଷ୍ଟ୍ରକଚର୍',
    shortDesc: 'କନଷ୍ଟ୍ରକସନ୍ ସାଇଟ୍, ସୁରକ୍ଷା ପୋଷ୍ଟ୍ ଏବଂ ଅଫିସ୍ ପାଇଁ ୱେଦରପ୍ରୁଫ୍ ପ୍ରିଫାବ୍ରିକେଟେଡ୍ ମେଟାଲ କ୍ୟାବିନ୍।',
    detailedDesc: 'ଦୃଢ଼ ଆଧାର ଫ୍ରେମ୍, ଝରକା, ତାଲା ଲାଗିବା କବାଟ ଏବଂ ଇନସୁଲେସନ ଉପଯୁକ୍ତ ସାଇଟ୍ ଅଫିସ୍ ଓ ସିକ୍ୟୁରିଟି କ୍ୟାବିନ୍।',
    visualTag: 'ମଡ୍ୟୁଲାର୍ କ୍ୟାବିନ୍',
    configurableFields: ['କ୍ୟାବିନ୍ ପରିମାଣ', 'ଝରକା ଓ କବାଟ ବିନ୍ୟାସ', 'ଇନସୁଲେସନ୍ ଆବଶ୍ୟକତା', 'ପରିମାଣ'],
  },
  'gi-temples': {
    name: 'ଜି.ଆଇ. ମନ୍ଦିର (ପୂଜା ଷ୍ଟ୍ରକଚର୍)',
    categoryLabel: 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ',
    shortDesc: 'ଘର, ସୋସାଇଟି ଓ ବ୍ୟବସାୟିକ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ସୁନ୍ଦର ଭାବେ ତିଆରି ଜି.ଆଇ. ମନ୍ଦିର।',
    detailedDesc: 'ଗାଲଭାନାଇଜ୍ଡ ସିଟ୍ ଓ ଆଙ୍ଗେଲ୍ ଦ୍ୱାରା ସ୍ୱତନ୍ତ୍ର ଭାବେ ପ୍ରସ୍ତୁତ, ଶିଖର, ଦ୍ୱାର ଓ ଆଲୋକ ବ୍ୟବସ୍ଥା ଥିବା ଆଧ୍ୟାତ୍ମିକ ମନ୍ଦିର।',
    visualTag: 'ଆଧ୍ୟାତ୍ମିକ କାରିଗରୀ',
    configurableFields: ['ଉଚ୍ଚତା, ଚଉଡ଼ା ଓ ଗଭୀରତା', 'ଶିଖର ଡିଜାଇନ୍', 'ପରିମାଣ'],
  },
  'homa-kund': {
    name: 'ହୋମକୁଣ୍ଡ (ଯଜ୍ଞ କୁଣ୍ଡ)',
    categoryLabel: 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ',
    shortDesc: 'ବୈଦିକ ରୀତିନୀତି, ହୋମ ଓ ଯଜ୍ଞ ପାଇଁ ପାରମ୍ପରିକ ସୋପାନବିଶିଷ୍ଟ ଧାତୁ କୁଣ୍ଡ।',
    detailedDesc: 'ଉଚ୍ଚ ତାପମାତ୍ରା ସହନଶୀଳ ସିଟ୍ ମେଟାଲ୍ ଦ୍ୱାରା ପ୍ରସ୍ତୁତ, ସ୍ତର ବିଶିଷ୍ଟ ମଜଭୁତ ଯଜ୍ଞ କୁଣ୍ଡ।',
    visualTag: 'ପୂଜା ସାମଗ୍ରୀ',
    configurableFields: ['ମାପ (ଲମ୍ବ × ଚଉଡ଼ା)', 'ସୋପାନ ସଂଖ୍ୟା', 'ହ୍ୟାଣ୍ଡେଲ୍ ଯୋଗାଣ', 'ପରିମାଣ'],
  },
  'bread-moulds': {
    name: 'ବ୍ରେଡ୍ ମୋଲ୍ଡ (ବେକେରୀ ଫ୍ରେମ୍)',
    categoryLabel: 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ',
    shortDesc: 'ବାଣିଜ୍ୟିକ ବେକେରୀ ଏବଂ ଖାଦ୍ୟ ପ୍ରକ୍ରିୟାକରଣ ପାଇଁ ଫୁଡ୍-ଗ୍ରେଡ୍ ଜି.ଆଇ. ବ୍ରେଡ୍ ବେକିଂ ମୋଲ୍ଡ।',
    detailedDesc: 'ସମାନ ଉତ୍ତାପ ବଣ୍ଟନ ପାଇଁ ସଠିକ୍ ଭାବେ ଫୋଲ୍ଡ କରାଯାଇଥିବା ସେଟ୍ ବାକ୍ସ। ଡ୍ରାଇଙ୍ଗ୍ ବେକିଂ ପାଇଁ ଆଦର୍ଶ।',
    visualTag: 'ବେକେରୀ ଉପକରଣ',
    configurableFields: ['ମୋଲ୍ଡ ଆକାର', 'ଗ୍ୟାଙ୍ଗ୍ ସେଟ୍ ପ୍ରତି ସଂଖ୍ୟା', 'ସିଟ୍ ଗେଜ୍', 'ଅର୍ଡର ପରିମାଣ'],
  },
  'chimneys': {
    name: 'ଚିମନି ହୁଡ୍ (ଧୂଆଁ ନିଷ୍କାସନ)',
    categoryLabel: 'ସ୍ୱତନ୍ତ୍ର ଫ୍ୟାବ୍ରିକେସନ',
    shortDesc: 'ହୋଟେଲ୍, ରେଷ୍ଟୁରାଣ୍ଟ ଏବଂ ଘରୋଇ ରୋଷେଇ ଘର ପାଇଁ ଉଚ୍ଚମାନର ଧୂଆଁ ନିଷ୍କାସନ ଚିମନି ହୁଡ୍।',
    detailedDesc: 'କଷ୍ଟମ୍ କଟିଂ ଓ ଡକ୍ଟିଂ ସହିତ ବେକେରୀ, କିଚେନ୍ ଓ ଫ୍ୟାକ୍ଟ୍ରି ୱେଣ୍ଟିଲେସନ୍ ପାଇଁ ସୁଦୃଢ଼ ଚିମନି।',
    visualTag: 'ଏକଜଷ୍ଟ ସିଷ୍ଟମ୍',
    configurableFields: ['ହୁଡ୍ ଲମ୍ବ ଓ ଚଉଡ଼ା', 'ଡକ୍ଟ ସଂଯୋଗ ମାପ', 'ପରିମାଣ'],
  },
  'led-signage': {
    name: '୩ଡି ଏଲ୍.ଇ.ଡି. ସାଇନେଜ୍ ବୋର୍ଡ',
    categoryLabel: 'ସାଇନେଜ୍ ଓ ପ୍ରିଣ୍ଟ',
    shortDesc: 'ଦୋକାନ ଓ ବାଣିଜ୍ୟିକ ପ୍ରତିଷ୍ଠାନ ପାଇଁ ଉଚ୍ଚ ଆଲୋକିତ ୩ଡି ଏକ୍ରିଲିକ୍ ଚ୍ୟାନେଲ୍ ଲେଟର ବୋର୍ଡ।',
    detailedDesc: 'ଲେଜର କଟ୍ ଏକ୍ରିଲିକ୍, ଏ.ସି.ପି. ବେସ୍ ଏବଂ ୱାଟରପ୍ରୁଫ୍ ଏଲ୍.ଇ.ଡି. ମଡ୍ୟୁଲ୍ ଦ୍ୱାରା ଦିନରାତି ଉଜ୍ଜ୍ୱଳ ଦେଖାଯାଉଥିବା ସାଇନେଜ୍।',
    visualTag: 'ପ୍ରିମିୟମ୍ ଆଲୋକିତ',
    configurableFields: ['ବୋର୍ଡ ମୋଟ ମାପ (ଫୁଟ)', 'ଲେଟର ଉଚ୍ଚତା', 'ଏ.ସି.ପି. ରଙ୍ଗ', 'ଆଲୋକ ଶୈଳୀ'],
  },
  'gsb-signage': {
    name: 'ଗ୍ଲୋ ସାଇନ୍ ବୋର୍ଡ (ଜି.ଏସ୍.ବି.)',
    categoryLabel: 'ସାଇନେଜ୍ ଓ ପ୍ରିଣ୍ଟ',
    shortDesc: 'ଭିତର ଆଲୋକ ସହିତ ୨୪/୭ ଦୃଶ୍ୟମାନ ୱେଲ୍ଡେଡ୍ ଫ୍ରେମ୍ ଫ୍ଲେକ୍ସ ଲାଇଟ୍ ବୋର୍ଡ।',
    detailedDesc: 'ମଜଭୁତ ଆଙ୍ଗେଲ୍ ବାକ୍ସ, ଉଚ୍ଚମାନର ବ୍ୟାକଲିଟ୍ ଫ୍ଲେକ୍ସ ଏବଂ ସମାନ ଆଲୋକ ବ୍ୟବସ୍ଥା ଥିବା ବ୍ୟବସାୟିକ ବୋର୍ଡ।',
    visualTag: 'ଦୃଢ଼ ବ୍ୟାକଲିଟ୍',
    configurableFields: ['ଲମ୍ବ × ଉଚ୍ଚତା', 'ସିଙ୍ଗଲ୍ ବା ଡବଲ୍ ସାଇଡ୍', 'ଟ୍ୟୁବ୍ / ଏଲ୍.ଇ.ଡି. ଚୟନ', 'ପରିମାଣ'],
  },
  'flex-printing': {
    name: 'ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ ଓ ବ୍ୟାନର',
    categoryLabel: 'ସାଇନେଜ୍ ଓ ପ୍ରିଣ୍ଟ',
    shortDesc: 'ହୋର୍ଡିଂ, ବିଜ୍ଞାପନ ଏବଂ ପ୍ରଚାର ପାଇଁ ହାଇ-ରିଜୋଲ୍ୟୁସନ ବଡ଼ ଫର୍ମାଟ୍ ଫ୍ଲେକ୍ସ ପ୍ରିଣ୍ଟିଂ।',
    detailedDesc: 'ଫ୍ରଣ୍ଟଲିଟ୍ ଓ ବ୍ୟାକଲିଟ୍ ଫ୍ଲେକ୍ସ ମିଡିଆରେ ୱେଦରପ୍ରୁଫ୍ ଇଙ୍କ୍ ଦ୍ୱାରା ଉଜ୍ଜ୍ୱଳ ଓ ସ୍ପଷ୍ଟ ପ୍ରିଣ୍ଟିଂ।',
    visualTag: 'ହାଇ-ରିଜୋଲ୍ୟୁସନ ପ୍ରିଣ୍ଟ',
    configurableFields: ['ମାପ (ବର୍ଗଫୁଟ)', 'ଫ୍ରଣ୍ଟଲିଟ୍ କି ବ୍ୟାକଲିଟ୍', 'ପରିମାଣ'],
  },
  'event-stalls': {
    name: 'ଇଭେଣ୍ଟ ଓ ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍',
    categoryLabel: 'ଇଭେଣ୍ଟ ସମାଧାନ',
    shortDesc: 'ମେଳା, ପ୍ରଦର୍ଶନୀ ଓ କାର୍ଯ୍ୟକ୍ରମ ପାଇଁ ମଡ୍ୟୁଲାର୍ ଷ୍ଟିଲ୍ ଫ୍ରେମ୍ ଷ୍ଟଲ୍ ଓ ବୁଥ୍।',
    detailedDesc: 'ଶୀଘ୍ର ଫିଟିଂ ହେଉଥିବା ଷ୍ଟ୍ରକଚରାଲ୍ ଷ୍ଟିଲ୍ ବୁଥ୍, ବ୍ରାଣ୍ଡେଡ୍ ଫାସିଆ, ଆଲୋକ ବ୍ୟବସ୍ଥା ଓ କାଉଣ୍ଟର୍ ସହ।',
    visualTag: 'ମଡ୍ୟୁଲାର୍ ବୁଥ୍',
    configurableFields: ['ଷ୍ଟଲ୍ ମାପ (ଯଥା: ୩×୩ ମିଟର)', 'ଇଭେଣ୍ଟ ତାରିଖ', 'ସ୍ଥାନ', 'ଆବଶ୍ୟକ ସୁବିଧା'],
  },
  'promo-kiosks': {
    name: 'ପ୍ରମୋସନାଲ କିଓସ୍କ ଓ ଷ୍ଟଲ୍',
    categoryLabel: 'ଇଭେଣ୍ଟ ସମାଧାନ',
    shortDesc: 'ରୋଡ୍‌ସୋ, ମଲ୍ ଓ ବଜାର ପ୍ରଚାର ପାଇଁ ପୋର୍ଟେବଲ୍ ଧାତୁ ଫ୍ରେମ୍ ଡେମୋ କିଓସ୍କ।',
    detailedDesc: 'ସହଜରେ ବୋହିବା ଏବଂ ଯୋଡ଼ିବା ଭଳି ହାଲୁକା ମଜଭୁତ ଫ୍ରେମ୍, ପ୍ରିଣ୍ଟେଡ୍ ବ୍ରାଣ୍ଡିଂ ସହ।',
    visualTag: 'ପୋର୍ଟେବଲ୍ କିଓସ୍କ',
    configurableFields: ['କିଓସ୍କ ପ୍ରକାର', 'ପରିମାଣ', 'ପ୍ରିଣ୍ଟିଂ ସହ କି ବିନା'],
  },
};

// Localized portfolio projects for Odia
export const ODIA_PORTFOLIO_DETAILS: Record<
  string,
  {
    title: string;
    categoryLabel: string;
    scopeSummary: string;
    dimensionsExample: string;
    keyMaterials: string[];
  }
> = {
  'proj-gi-trunks': {
    title: 'ମଜଭୁତ ମେଟାଲ ୟୁଟିଲିଟି ଟ୍ରଙ୍କ୍ ଓ ବାକ୍ସ',
    categoryLabel: 'ଜି.ଆଇ. ଓ ମେଟାଲ୍',
    scopeSummary: 'କୋଣ ଯୋଡ଼େଇ, ମଜଭୁତ ହ୍ୟାଣ୍ଡେଲ୍ ଏବଂ ତାଲା ହାସ୍ପ୍ ସହିତ ହେଭି-ଗେଜ୍ ଜି.ଆଇ. ବାକ୍ସ।',
    dimensionsExample: 'ଅର୍ଡର ଅନୁସାରେ କଷ୍ଟମ୍ ମାପ',
    keyMaterials: ['ଗାଲଭାନାଇଜ୍ଡ ଆଇରନ ସିଟ୍', 'ହେଭି ହିଞ୍ଜ୍', 'ୱେଲ୍ଡେଡ୍ କର୍ଣ୍ଣର୍ ବ୍ରେସ୍'],
  },
  'proj-led-commercial': {
    title: '୩ଡି ଏକ୍ରିଲିକ୍ କମର୍ସିଆଲ୍ ଏଲ୍.ଇ.ଡି. ସାଇନବୋର୍ଡ',
    categoryLabel: 'ସାଇନେଜ୍',
    scopeSummary: 'ଲେଜର-କଟ୍ ଏକ୍ରିଲିକ୍ ଅକ୍ଷର, ଏସିପି ପ୍ୟାନେଲ୍ ଏବଂ ୱାଟରପ୍ରୁଫ୍ ଏଲ୍.ଇ.ଡି. ଆଲୋକିତ ବୋର୍ଡ।',
    dimensionsExample: '୧୮ ଫୁଟ × ୩.୫ ଫୁଟ ଡିସପ୍ଲେ ମୁଖ',
    keyMaterials: ['କାଷ୍ଟ ଏକ୍ରିଲିକ୍', 'ଏ.ସି.ପି. ସିଟ୍', 'IP65 ଏଲ୍.ଇ.ଡି. ମଡ୍ୟୁଲ୍', 'ୱେଲ୍ଡେଡ୍ ଫ୍ରେମ୍'],
  },
  'proj-exhibition-booth': {
    title: 'ମଡ୍ୟୁଲାର୍ ବାଣିଜ୍ୟ ମେଳା ପ୍ରଦର୍ଶନୀ ଷ୍ଟଲ୍',
    categoryLabel: 'ଷ୍ଟଲ୍ ଓ ଇଭେଣ୍ଟ',
    scopeSummary: 'ବ୍ରାଣ୍ଡେଡ୍ ଫାସିଆ, ସ୍ପଟଲାଇଟ୍ ଫିକ୍ସଚର ଏବଂ କାଉଣ୍ଟର୍ ସହ ଶୀଘ୍ର ଯୋଡ଼ିହେବା ଷ୍ଟିଲ୍ ବୁଥ୍।',
    dimensionsExample: '୬ ମିଟର × ୩ ମିଟର ପରିସୀମା',
    keyMaterials: ['ମାଇଲ୍ଡ ଷ୍ଟିଲ୍ ବକ୍ସ ସେକ୍ସନ', 'ପ୍ରିଣ୍ଟେଡ୍ ବ୍ରାଣ୍ଡ ପ୍ୟାନେଲ୍', 'ମଡ୍ୟୁଲାର୍ କନେକ୍ଟର୍'],
  },
  'proj-gsb-storefront': {
    title: 'ଗ୍ଲୋ ସାଇନ୍ ବୋର୍ଡ (ଜିଏସବି) ଦୋକାନ ଆଗ',
    categoryLabel: 'ସାଇନେଜ୍',
    scopeSummary: 'ଉଚ୍ଚ ଆଲୋକ ବିଶିଷ୍ଟ ବ୍ୟାକଲିଟ୍ ଫ୍ଲେକ୍ସ ଏବଂ ୱେଦରପ୍ରୁଫ୍ ଆଙ୍ଗେଲ୍ ବକ୍ସ ଏନକ୍ଲୋଜର୍।',
    dimensionsExample: '୧୨ ଫୁଟ × ୩ ଫୁଟ ଷ୍ଟାଣ୍ଡାର୍ଡ',
    keyMaterials: ['ବ୍ୟାକଲିଟ୍ ଫ୍ଲେକ୍ସ ମିଡିଆ', 'ଆଙ୍ଗେଲ୍ ଆଇରନ ଫ୍ରେମ୍', 'ଆଭ୍ୟନ୍ତରୀଣ ଟ୍ୟୁବ୍ ଲାଇଟ୍'],
  },
  'proj-site-cabin': {
    title: 'ପ୍ରିଫାବ୍ରିକେଟେଡ୍ ସାଇଟ୍ ଅଫିସ୍ ଓ ସିକ୍ୟୁରିଟି କ୍ୟାବିନ୍',
    categoryLabel: 'ଫ୍ୟାବ୍ରିକେସନ',
    scopeSummary: 'ସ୍ଲାଇଡିଂ ଝରକା, ତାଲା କବାଟ ଏବଂ ଇନସୁଲେସନ ଉପଯୁକ୍ତ ମଜଭୁତ ସାଇଟ୍ କ୍ୟାବିନ୍।',
    dimensionsExample: '୧୦ ଫୁଟ × ୮ ଫୁଟ ବେସ୍',
    keyMaterials: ['ଷ୍ଟ୍ରକଚରାଲ୍ ଚ୍ୟାନେଲ୍ ବେସ୍', 'ଇନସୁଲେଟେଡ୍ ପ୍ୟାନେଲ୍', 'ସିକ୍ୟୁରିଟି ଲକିଂ ଗେଟ୍'],
  },
  'proj-heavy-khatia': {
    title: 'ହେଭି-ଡ୍ୟୁଟି ପାଇପ୍ ଓ ଆଙ୍ଗେଲ୍ ଖଟିଆ ଫ୍ରେମ୍',
    categoryLabel: 'ଫ୍ୟାବ୍ରିକେସନ',
    scopeSummary: 'ହଷ୍ଟେଲ୍, ଫାର୍ମ ହାଉସ୍ ଏବଂ ଘରୋଇ ବ୍ୟବହାର ପାଇଁ ସୁଦୃଢ଼ ୱେଲ୍ଡିଂ ଷ୍ଟିଲ୍ ବେଡ୍ ଫ୍ରେମ୍।',
    dimensionsExample: '୬ ଫୁଟ × ୩ ଫୁଟ ସିଙ୍ଗଲ୍ ବେଡ୍',
    keyMaterials: ['ହେଭି ଗେଜ୍ ଷ୍ଟିଲ୍ ପାଇପ୍', 'ଏମ୍.ଏସ୍. ଆଙ୍ଗେଲ୍ ଚ୍ୟାନେଲ୍', 'ଆଣ୍ଟି-କରୋସିଭ୍ ପ୍ରାଇମର୍'],
  },
  'proj-promotional-kiosk': {
    title: 'ପ୍ରମୋସନାଲ ପପ୍-ଅପ୍ ଇଭେଣ୍ଟ କିଓସ୍କ',
    categoryLabel: 'ଷ୍ଟଲ୍ ଓ ଇଭେଣ୍ଟ',
    scopeSummary: 'ହାଲୁକା ଫୋଲ୍ଡେବଲ୍ ମେଟାଲ୍ ଫ୍ରେମ୍ ଏବଂ ହାଇ-ରିଜୋଲ୍ୟୁସନ ବ୍ରାଣ୍ଡେଡ୍ ସ୍କିନ୍ ସହ।',
    dimensionsExample: '୨ ମିଟର × ୨ ମିଟର କମ୍ପାକ୍ଟ',
    keyMaterials: ['ପାଉଡର-କୋଟେଡ୍ ଟ୍ୟୁବ୍', 'ହାଇ-ଜିଏସଏମ ଫ୍ଲେକ୍ସ ବ୍ୟାନର', 'କାଉଣ୍ଟର୍ ଟପ୍'],
  },
  'proj-homa-kund': {
    title: 'କଷ୍ଟମ୍ ସୋପାନବିଶିଷ୍ଟ ଧାତୁ ଯଜ୍ଞ ହୋମକୁଣ୍ଡ',
    categoryLabel: 'ଫ୍ୟାବ୍ରିକେସନ',
    scopeSummary: 'ପାରମ୍ପରିକ ଅନୁପାତ ଅନୁଯାୟୀ ହ୍ୟାଣ୍ଡେଲ୍ ଓ ସ୍ତର ବିଶିଷ୍ଟ ତାପ-ସହନଶୀଳ ଯଜ୍ଞ କୁଣ୍ଡ।',
    dimensionsExample: '୨୪ ଇଞ୍ଚ × ୨୪ ଇଞ୍ଚ ସୋପାନ ମାପ',
    keyMaterials: ['ହେଭି ଧାତୁ ସିଟ୍', 'ପରିବହନ ହ୍ୟାଣ୍ଡେଲ୍', 'ଦୃଢ଼ ଆଧାର ଷ୍ଟାଣ୍ଡ୍'],
  },
  'proj-wide-flex': {
    title: 'ବୃହତ୍ ଆକାର ଆଉଟଡୋର୍ ବିଜ୍ଞାପନ ଫ୍ଲେକ୍ସ ହୋର୍ଡିଂ',
    categoryLabel: 'ପ୍ରିଣ୍ଟିଂ',
    scopeSummary: 'ହାଇୱେ ଓ ସହର ଛକ ପାଇଁ ରଙ୍ଗୀନ ଓ ଦୀର୍ଘସ୍ଥାୟୀ ୟୁଭି ଇଙ୍କ୍ ୱାଇଡ୍ ଫର୍ମାଟ୍ ପ୍ରିଣ୍ଟ।',
    dimensionsExample: '୨୦ ଫୁଟ × ୧୦ ଫୁଟ ହୋର୍ଡିଂ',
    keyMaterials: ['ଷ୍ଟାର୍ ଫ୍ରଣ୍ଟଲିଟ୍ ମିଡିଆ', 'ସଲଭେଣ୍ଟ / ୟୁଭି ଇଙ୍କ୍', 'ଆଇଲେଟ୍ ଲୁପ୍'],
  },
  'proj-industrial-chimney': {
    title: 'ବାଣିଜ୍ୟିକ କିଚେନ୍ ଓ ବେକେରୀ ଚିମନି ଏକଜଷ୍ଟ ହୁଡ୍',
    categoryLabel: 'ଫ୍ୟାବ୍ରିକେସନ',
    scopeSummary: 'ତେଲ ଓ ଧୂଆଁ ଉତ୍ତମ ନିଷ୍କାସନ ପାଇଁ ସ୍ୱତନ୍ତ୍ର କଟ୍ ଏବଂ ରିଭେଟେଡ୍ ଜି.ଆଇ. ହୁଡ୍।',
    dimensionsExample: '୬ ଫୁଟ × ୩ ଫୁଟ କିଚେନ୍ କଭରେଜ୍',
    keyMaterials: ['ଜି.ଆଇ. ସିଟ୍ ମେଟାଲ୍', 'ରିଭେଟେଡ୍ କର୍ଣ୍ଣର୍', 'ଡକ୍ଟ କନେକ୍ଟର୍ ସ୍ଲିଭ୍'],
  },
  'proj-gi-temple': {
    title: 'ସୁନ୍ଦର କାରିଗରୀପୂର୍ଣ୍ଣ ଜି.ଆଇ. ମନ୍ଦିର ଷ୍ଟ୍ରକଚର୍',
    categoryLabel: 'ଫ୍ୟାବ୍ରିକେସନ',
    scopeSummary: 'ପୂଜା ଆଲୋକ ଓ ସୁରକ୍ଷିତ କବାଟ ସହିତ ଘର ଓ ସୋସାଇଟି ପାଇଁ ଧାତୁ ମନ୍ଦିର।',
    dimensionsExample: '୫ ଫୁଟ ଉଚ୍ଚତା କଷ୍ଟମ୍ ୟୁନିଟ୍',
    keyMaterials: ['ଜି.ଆଇ. ସିଟ୍ ଓ ଆଙ୍ଗେଲ୍', 'ଶିଖର କ୍ରାଉନ୍', 'ୱେଲ୍ଡେଡ୍ ପୂଜା ଷ୍ଟ୍ରକଚର୍'],
  },
};


