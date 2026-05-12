export const personalInfo = {
  name: 'Afolayan Tolu Hope',
  title: 'Full Stack Web Developer',
  tagline: 'I build things for the web — and beyond.',
  shortBio:
    'A passionate Full Stack Developer from Benin City, Nigeria, crafting scalable web applications, fintech solutions, and healthcare platforms.',
  location: 'Benin City, Edo State, Nigeria',
  email: 'afolayanthopex@gmail.com',
  github: 'https://github.com/HopeTolu',
  linkedin: 'https://linkedin.com/in/afolayan-tolu-hope',
  resumeUrl: '/resume.pdf',
  availability: 'Open to opportunities',
};

export const about = {
  headline: "I turn complex problems into elegant digital solutions.",
  bio: [
    "I'm Tolu — a Full Stack Web Developer based in Benin City, Nigeria, with a deep passion for building products that sit at the intersection of great code and great user experience.",
    "My journey started at Deebug Institute, where I sharpened my skills and eventually stepped up to mentor the next generation of developers. That experience gave me a unique perspective: I don't just write code — I think about how it's taught, how it scales, and how it impacts real people.",
    "Today, I specialize in building full-stack web applications and complex management systems, working with modern tools like React, Node.js, TypeScript, and Prisma. Whether it's a real-time logistics platform or a high-performance healthcare app, I bring the same level of care and craft to every project.",
  ],
  funFacts: [
    { icon: '🚀', text: 'Built complex logistics & fintech platforms' },
    { icon: '👨‍🏫', text: 'Mentored 100+ bootcamp developers' },
    { icon: '🏥', text: 'Architected healthcare agency systems' },
    { icon: '🌍', text: 'Remote-first & globally available' },
  ],
};

export const experience = [
  {
    id: 1,
    role: 'Lead Software Developer',
    company: 'Zentrix Innovation Lab',
    location: 'Remote',
    period: '2023 — Present',
    type: 'Full-time',
    description:
      'Leading the architecture and development of high-stakes platforms in the logistics and healthcare sectors. Responsible for end-to-end delivery of complex full-stack systems.',
    responsibilities: [
      'Architected and built Wayro, a dual-interface logistics platform with a secure escrow system',
      'Developed CareMandate, a comprehensive healthcare agency management platform',
      'Implemented secure role-based access control and real-time notification systems',
      'Managed cloud deployments on Vercel, Railway, and AWS',
    ],
    tech: ['React', 'Node.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 2,
    role: 'Software Developer & Instructor',
    company: 'Deebug Institute',
    location: 'Benin City, Nigeria',
    period: '2022 — 2023',
    type: 'Full-time',
    description:
      'Wore multiple hats — developer and instructor. Led the design and development of the institute\'s web platforms while mentoring cohorts of aspiring developers.',
    responsibilities: [
      'Designed and built the Deebug Bootcamp Integration platform',
      'Delivered hands-on training to 100+ students in Full Stack Web Development',
      'Architected student management systems and curriculum delivery platforms',
    ],
    tech: ['React', 'Node.js', 'JavaScript', 'PostgreSQL', 'CSS'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Wayro — Logistics & Escrow Platform',
    category: 'Full Stack / Fintech',
    description:
      'A dual-interface logistics platform connecting travelers and senders with a secure escrow payment system and hidden administrative controls.',
    longDescription:
      'Wayro is a comprehensive logistics solution built for Zentrix Innovation Lab. It features a public-facing landing page for users and a secure, hidden admin dashboard for platform management. The system handles complex multi-party workflows, including delivery tracking, real-time status updates, and a cryptographic escrow system for financial security.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS', 'Vercel'],
    github: 'https://github.com/HopeTolu/wayro',
    live: 'https://wayro.vercel.app',
    featured: true,
    image: '/projects/wayro-hero.png',
    highlights: [
      'Secure Escrow Financial Engine',
      'Real-time Negotiation Chat (Socket.io)',
      'Cryptographic OTP Delivery Verification',
      'Comprehensive Admin/Staff Controls',
      'Multi-party Notification Pipeline'
    ],
    timeline: 'Jan 2024 — Present',
    client: 'Wayro Logistics',
    service: 'Full Stack & Fintech',
    features: [
      { title: 'Escrow System', desc: 'Secure fund holding with automated release upon delivery verification.' },
      { title: 'Real-time Chat', desc: 'Instant negotiation and coordination between travelers and senders via WebSockets.' },
      { title: 'OTP Verification', desc: 'Cryptographic proof-of-delivery system to prevent fraud at handover.' },
      { title: 'Admin Controls', desc: 'Comprehensive panel for transaction monitoring, dispute resolution, and platform fees.' }
    ],
    challenge: 'The primary hurdle was the "Three-Party Handshake"—ensuring that funds from the Sender are securely held and only released to the Traveler once the Receiver confirms delivery via a secure OTP system, all while preventing fraud and self-dealing.',
    solution: 'I architected a state-controlled Escrow engine that automates financial releases based on delivery milestones. The system integrates Socket.io for real-time negotiation and a cryptographic OTP verification layer to ensure a physical handover occurred before any payout.'
  },
  {
    id: 2,
    title: 'CareMandate — Healthcare Agency Platform',
    category: 'Full Stack / Healthcare',
    description:
      'A robust healthcare agency management system designed to streamline home health and hospice care operations.',
    longDescription:
      'CareMandate is a high-performance backend and frontend system built to manage healthcare agencies, clients, and clinical visits. It features a complex scheduling engine, real-time visit tracking, and a comprehensive audit logging system to ensure compliance in home health environments.',
    tech: ['Node.js', 'TypeScript', 'Express', 'Prisma', 'PostgreSQL', 'Jest'],
    github: 'https://github.com/HopeTolu/care-mandate',
    live: null,
    featured: true,
    image: '/projects/caremandate-hero.png',
    highlights: [
      'Multi-Agency Tenancy Support',
      'Specialized Care Scheduling Engine',
      'HIPAA-Compliant Audit Trails',
      'Caregiver Availability Rotation',
      'Clinical Visit Documentation System'
    ],
    timeline: 'Oct 2023 — Present',
    client: 'CareMandate Agency',
    service: 'Healthcare SaaS',
    features: [
      { title: 'Care Scheduling', desc: 'Automated matching of caregivers to patients based on specialized skills and proximity.' },
      { title: 'Audit Engine', desc: 'Middleware-level tracking of all clinical visit changes for state compliance.' },
      { title: 'Visit Tracking', desc: 'Real-time status monitoring of clinical home visits and documentation progress.' },
      { title: 'Agency Tenancy', desc: 'Architecture supporting multiple distinct care agencies on a single secure platform.' }
    ],
    challenge: 'Managing the complex scheduling overlap between caregivers and patients with specialized needs (Hospice, Home Health) while maintaining a strict audit trail for clinical compliance and payroll accuracy.',
    solution: 'I developed a modular scheduling engine that cross-references caregiver availability, patient requirements, and travel logistics. A middleware-level audit system was implemented to track every clinical state change, ensuring 100% auditable visit records for agency compliance.'
  },
  {
    id: 3,
    title: 'Deebug Bootcamp Platform',
    category: 'Full Stack / EdTech',
    description:
      'An end-to-end bootcamp management platform handling enrollment, curriculum delivery, and student progress.',
    longDescription:
      'Built to streamline the operational side of running coding bootcamps. Features include student enrollment flows, module-based curriculum delivery, assignment submission and grading, instructor dashboards, and cohort analytics.',
    tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/HopeTolu',
    live: 'https://bootcamp.deebug.org',
    featured: true,
    image: '/projects/bootcamp.jpg',
    highlights: ['Enrollment management', 'Progress tracking', 'Instructor dashboards', 'Cohort analytics'],
    challenge: 'Managing multiple overlapping student cohorts and curriculum versions.',
    solution: 'Developed a versioned module system and a dynamic student progress tracker.'
  },
  {
    id: 4,
    title: 'JS Performance Blog',
    category: 'Content / Frontend',
    description:
      'A technical blog dedicated to JavaScript performance optimization and deep-dives.',
    longDescription:
      'Created as both a personal knowledge base and community resource. Articles cover topics ranging from debouncing & throttling to Web Workers, memory leaks, and V8 optimization strategies.',
    tech: ['React', 'MDX', 'Tailwind CSS', 'Vite', 'TypeScript'],
    github: 'https://github.com/HopeTolu',
    live: 'https://jsperfblog.vercel.app',
    featured: true,
    image: '/projects/jsblog.jpg',
    highlights: ['Technical deep-dives', 'Performance benchmarks', 'Optimization guides'],
    challenge: 'Explaining complex low-level performance concepts in a clear, interactive way.',
    solution: 'Used MDX and custom React components to provide interactive benchmarks within the articles.'
  },
];

export const skills = [
  {
    category: 'Frontend',
    icon: '🎨',
    color: 'from-teal-500 to-cyan-500',
    items: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'JavaScript (ES6+)', level: 95 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Next.js', level: 80 },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    color: 'from-blue-500 to-indigo-500',
    items: [
      { name: 'Node.js', level: 92 },
      { name: 'Express.js', level: 90 },
      { name: 'Prisma', level: 90 },
      { name: 'REST APIs', level: 95 },
      { name: 'WebSockets', level: 85 },
    ],
  },
  {
    category: 'Database & Cloud',
    icon: '🗄️',
    color: 'from-purple-500 to-pink-500',
    items: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MongoDB', level: 85 },
      { name: 'Redis', level: 80 },
      { name: 'Docker', level: 75 },
    ],
  },
  {
    category: 'Tools & DevOps',
    icon: '🛠️',
    color: 'from-amber-500 to-orange-500',
    items: [
      { name: 'Git / GitHub', level: 95 },
      { name: 'Vercel / Railway', level: 90 },
      { name: 'Nginx / PM2', level: 85 },
      { name: 'Postman / Insomnia', level: 92 },
    ],
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Admin',
    role: 'CEO, Zentrix Innovation Lab',
    avatar: '',
    content:
      "Tolu delivered the Wayro platform with exceptional technical skill and speed. His ability to handle both complex fintech requirements and healthcare management systems is outstanding.",
  },
];
