import { Treatment, Product, LocationInfo, Testimonial, Article } from '../types';

export const BUSINESS_INFO = {
  name: 'Atlanta Plumber For Less',
  tagline: 'Licensed & Insured Plumbing Services at Affordable Rates',
  address: '2692 Harris St, Atlanta, GA 30344',
  phone: '(404) 753-9191',
  phoneRaw: '4047539191',
  email: 'contact@atlantaplumberforless.com',
  appointmentEmail: 'service@atlantaplumberforless.com',
  googleMapsUrl: 'https://maps.google.com/?cid=11045371731168607137',
  rating: 4.8,
  reviewCount: 63,
  hours: {
    weekdays: '10:00 AM - 4:30 PM',
    saturday: '11:00 AM - 5:00 PM',
    sunday: 'Emergency On-Call Dispatch',
  },
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'emergency-leak-repair',
    title: 'Emergency Leak Repair',
    category: 'Rapid Diagnostics & Fixes',
    description: 'Fast response for burst pipes, slab leaks, dripping faucets, and sudden water line breaks across Atlanta.',
    fullDescription: 'Our certified plumbers locate hidden leaks behind walls, under concrete slabs, or in main water supplies using non-invasive acoustic sensors and thermal diagnostics. We repair pipes swiftly to protect your home from water damage.',
    duration: 'Same-Day Dispatch',
    price: 95,
    benefits: [
      'Pinpoint non-destructive electronic leak detection',
      'Copper, PEX, and PVC pipe repairs',
      'Immediate water shutoff & pressure stabilization',
      'Upfront flat-rate estimate with no surprise fees',
    ],
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'drain-cleaning',
    title: 'Drain & Sewer Cleaning',
    category: 'Clog Removal & Hydro-Jetting',
    description: 'Thorough clearing of stubborn kitchen, shower, and main sewer line stoppages with HD camera inspection.',
    fullDescription: 'From slow shower drains to backed-up sewer laterals, we blast away grease, mineral scale, and invasive tree roots using industrial power augers and high-pressure hydro-jetters, restoring full pipe diameter.',
    duration: '45 - 90 min',
    price: 120,
    benefits: [
      'High-definition sewer video camera diagnostics',
      'Powerful hydro-jetting removes roots and grease',
      'Main sewer cleanout clearing with warranty',
      'Safe for older cast-iron and PVC drainage pipes',
    ],
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'water-heater',
    title: 'Water Heater Service',
    category: 'Tank & Tankless Systems',
    description: 'Repair, flushing, and replacement of gas, electric, and tankless water heaters for endless hot water.',
    fullDescription: 'No hot water or leaking tank? We service Rheem, Bradford White, A.O. Smith, Rinnai, and Navien systems. Whether replacing heating elements and burner assemblies or installing a high-efficiency tankless heater, we guarantee hot water fast.',
    duration: '1 - 3 hours',
    price: 140,
    benefits: [
      'Diagnostic testing of thermostats and heating elements',
      'Complete mineral tank flush & sacrificial anode inspection',
      'Same-day replacement options for aging tanks',
      'High-efficiency energy-saving tankless upgrades',
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'pipe-repiping',
    title: 'Whole-Home Repiping',
    category: 'PEX & Copper Upgrades',
    description: 'Permanent upgrades for corroded galvanized pipes, low water pressure, and recurring pipe leaks.',
    fullDescription: 'Upgrade aging or rusted plumbing to durable, freeze-resistant PEX or clean copper piping. We minimize drywall cutting and restore optimal water pressure, clean taste, and peace of mind throughout your Atlanta home.',
    duration: 'Full Service',
    price: 180,
    benefits: [
      'Eliminates rusty or discolored tap water',
      'Substantially boosts household water pressure',
      'Freeze-resistant PEX-A expansion tubing',
      'Comprehensive whole-house plumbing warranty',
    ],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'hands-cream', // Keeping IDs for smooth mockup rendering
    name: 'Eco-Enzyme Bio Drain Care',
    category: 'Drain Maintenance',
    price: 29.0,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
    description: 'Professional bacterial enzyme treatment that digests grease, soap scum, and organic buildup without harming pipes.',
    details: 'Unlike caustic chemical drain cleaners that eat through pipes and degrade plumbing seals, our concentrated natural bacterial blend continuously digests organic matter in grease traps, kitchen sinks, and garbage disposals.',
    ingredients: 'Live Bacterial Microorganisms, Surfactants, Natural Citrus Fragrance, Biodegradable Enzymes.',
    volume: '32 fl. oz. / 1 Quart',
  },
  {
    id: 'eye-cream',
    name: 'Smart Flood & Leak Sensor',
    category: 'Home Protection',
    price: 79.0,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80',
    description: 'Instant smartphone alerts upon detecting standing water near water heaters, sump pumps, or washing machines.',
    details: 'Equipped with dual sensitive gold-plated contact probes, a piercing 100dB local siren, and 2.4GHz WiFi notifications so you catch water heater or sink leaks before costly structural floor damage happens.',
    ingredients: 'Dual Gold Probes, IP67 Waterproof Enclosure, 2-Year Lithium Battery, WiFi App Hub.',
    volume: 'Compact Sensor Disc',
  },
  {
    id: 'day-facial-tonic',
    name: 'Heavy-Duty Brass Pressure Regulator',
    category: 'Pressure Control',
    price: 99.0,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80',
    description: 'Protects home pipes and appliances from damaging high municipal water pressure spikes over 80 PSI.',
    details: 'High water pressure in Atlanta can rupture washing machine hoses, cause toilet fill valves to squeal, and void appliance warranties. This lead-free brass regulator delivers a steady, gentle 50–55 PSI.',
    ingredients: 'Lead-Free Solid Brass Body, Stainless Steel Internal Spring, Removable Filter Screen.',
    volume: '3/4" FNPT Standard',
  },
  {
    id: 'facial-cleaner',
    name: 'Tankless Descale Flush Kit',
    category: 'Water Heater Care',
    price: 89.0,
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80',
    description: 'Complete maintenance kit with submersible pump and non-toxic citric acid to remove calcification.',
    details: 'Georgia hard water causes calcium carbonate buildup on tankless heat exchangers. Performing an annual 45-minute vinegar or citric flush restores heater efficiency and maintains factory warranty.',
    ingredients: 'Submersible 1/6 HP Circulation Pump, Dual 6-ft Color-Coded Hoses, 1lb Food-Grade Citric Acid.',
    volume: 'Heavy Duty Bucket Kit',
  },
  {
    id: 'face-cream',
    name: 'Stainless Steel Braided Supply Kit',
    category: 'Piping Hardware',
    price: 39.0,
    image: 'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80',
    description: 'Commercial-grade burst-proof braided 304 stainless steel connectors for sinks, toilets, and ice makers.',
    details: 'Prevent catastrophic flooding from brittle vinyl hoses. Includes 2 sink faucet lines, 1 reinforced toilet supply line, and roll of commercial plumber thread sealant tape.',
    ingredients: '304 Multi-Strand Stainless Steel Braid, Nickel-Plated Solid Brass Nuts, EPDM Core.',
    volume: '3-Piece Pro Contractor Pack',
  },
  {
    id: 'facial-scrub',
    name: 'High-Torque Garbage Disposal Cleanout',
    category: 'Kitchen Essentials',
    price: 49.0,
    image: 'https://images.unsplash.com/photo-1567928815104-b7980ee5032e?auto=format&fit=crop&w=600&q=80',
    description: 'Universal jam-clearing wrench kit and foaming deodorizing maintenance tabs for kitchen disposals.',
    details: 'Free stuck impellers safely without reaching into the drain. Includes ergonomic offset hex key, splash-guard replacement collar, and 6 active foaming degreasing pods.',
    ingredients: 'Hardened Tool Steel Wrench, High-Density Neoprene Gasket, Oxygen Bleach Pods.',
    volume: 'Universal Fit Toolset',
  },
];

export const LOCATIONS: LocationInfo[] = [
  {
    city: 'Atlanta Central & Downtown',
    address: '2692 Harris St, Atlanta, Georgia 30344, United States',
    phone: '(404) 753-9191',
    email: 'central@atlantaplumberforless.com',
  },
  {
    city: 'Fulton County & East Point',
    address: 'Serving East Point, College Park, & South Fulton',
    phone: '(404) 753-9191',
    email: 'south@atlantaplumberforless.com',
  },
  {
    city: 'North Metro & Buckhead',
    address: 'Serving Midtown, Buckhead, Decatur, Sandy Springs & Vinings',
    phone: '(404) 753-9191',
    email: 'north@atlantaplumberforless.com',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'marcus',
    name: 'Marcus Washington',
    location: 'ATLANTA, GA • HOMEOWNER',
    quote: '"Called Atlanta Plumber For Less after a pipe burst under our kitchen sink. They arrived within 45 minutes, replaced the damaged valve, and charged significantly less than the big chain franchises. True honest professionals!"',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=500&q=80',
    rating: 5,
  },
  {
    id: 'kimberly',
    name: 'Kimberly Davis',
    location: 'EAST POINT, GA • PROPERTY MANAGER',
    quote: '"Replaced our 50-gallon water heater the same afternoon. Transparent upfront quote, clean work, no hidden surcharges. I am keeping their number on speed dial for our residential properties."',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=500&q=80',
    rating: 5,
  },
  {
    id: 'david',
    name: 'David Thornton',
    location: 'BUCKHEAD, ATLANTA • RESIDENTIAL',
    quote: '"Cleared a stubborn main sewer drain that two other companies could not fix. The technician ran a camera, showed me the tree root invasion, and cleared it completely. Outstanding service and fair prices!"',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80',
    rating: 5,
  },
];

export const ARTICLES: Article[] = [
  {
    id: 'article-1',
    title: '5 Warning Signs Your Water Heater is About to Fail (And What to Do)',
    date: 'OCTOBER 14, 2026',
    readTime: '4 min read',
    excerpt: 'Catch rusty water, strange rumbling noises, and temperature fluctuations before a catastrophic tank rupture floods your home.',
    content: [
      'Water heaters rarely break down without subtle preliminary warnings. In Georgia, sediment and mineral buildup inside the bottom of standard storage tanks harden into a calcified layer that traps heat, creating loud popping or rumbling sounds as water boils beneath the crust.',
      'If you notice rusty or tinted hot water coming from your faucets while the cold water remains crystal clear, the inner sacrificial anode rod has likely dissolved, and the steel tank lining has begun to oxidize.',
      'Addressing minor leaks or burner problems early can often save hundreds of dollars compared to an emergency structural restoration after a 50-gallon rupture.'
    ],
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'article-2',
    title: 'Safe Ways to Clear Clogged Drains Without Ruining Your Pipes',
    date: 'SEPTEMBER 28, 2026',
    readTime: '5 min read',
    excerpt: 'Why commercial chemical drain openers can melt your PVC joints, and how professional mechanical snaking and enzymes protect plumbing.',
    content: [
      'When sinks drain slowly, many homeowners instinctively reach for caustic chemical drain cleaners. Unfortunately, these sulfuric acid or lye concoctions generate intense chemical heat that can soften PVC glue, warp plastic traps, and corrode vintage cast iron sewer pipes.',
      'Instead, start with simple mechanical solutions: a classic sink plunger with a snug water seal or a manual hand auger. For routine maintenance, eco-friendly enzymatic treatments break down hair and soap scum over hours without generating damaging heat.',
      'If multiple drains in your house are backing up simultaneously, the obstruction is located in your main sewer lateral, requiring professional motorized cabling or hydro-jetting.'
    ],
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=800&q=80',
  },
];

export const INSTAGRAM_POSTS = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80',
    caption: 'Clean whole-home copper & PEX manifold installation in Atlanta. Zero leaks, optimal pressure. #AtlantaPlumber #PEXRepipe',
    likes: '412',
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=600&q=80',
    caption: 'High-pressure hydro-jetting cleared a 4-inch main sewer line blocked by roots. Free camera inspection included. #DrainCleaning',
    likes: '328',
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?auto=format&fit=crop&w=600&q=80',
    caption: 'New high-efficiency tankless water heater installed in East Point today! Endless hot water and lower energy bills. #Tankless',
    likes: '519',
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80',
    caption: 'Master bathroom luxury shower valve & rough-in plumbing completed on time and on budget. #PlumbingForLess #AtlantaHomes',
    likes: '294',
  },
];
