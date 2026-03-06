export interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  time: string;
  duration: string;
  thumbnail: string;
  avatar: string;
  description: string;
  likes: string;
  subscribers: string;
  category: string;
}

export const MOCK_VIDEOS: Video[] = [
  {
    id: "1",
    title: "Building a Full-Stack App with Next.js 15 & Supabase",
    channel: "DevCraft",
    views: "142K views",
    time: "3 days ago",
    duration: "28:14",
    thumbnail:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80",
    description:
      "In this video we build a complete full-stack application using Next.js 15 and Supabase for the backend. We cover auth, database, storage and deployment.",
    likes: "8.4K",
    subscribers: "98K",
    category: "Tech",
  },
  {
    id: "2",
    title: "Iceland in Winter — A Solo Cinematic Journey",
    channel: "Wanderlens",
    views: "891K views",
    time: "1 week ago",
    duration: "14:02",
    thumbnail:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80",
    description:
      "A solo cinematic journey through Iceland during the winter months. Shot entirely on a Sony FX3.",
    likes: "42K",
    subscribers: "1.2M",
    category: "Travel",
  },
  {
    id: "3",
    title: "The Science of Deep Sleep — Why 8 Hours Isn't Enough",
    channel: "Neuro Lab",
    views: "2.3M views",
    time: "2 weeks ago",
    duration: "19:47",
    thumbnail:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80",
    description:
      "Sleep scientist Dr. Reyes breaks down the latest research on deep sleep stages and why quality matters more than quantity.",
    likes: "115K",
    subscribers: "4.8M",
    category: "Science",
  },
  {
    id: "4",
    title: "Lo-fi Jazz Café — 3 Hour Study Session",
    channel: "Mellow Hour",
    views: "5.1M views",
    time: "1 month ago",
    duration: "3:02:11",
    thumbnail:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=64&q=80",
    description:
      "Three hours of smooth lo-fi jazz to help you focus, study or relax.",
    likes: "88K",
    subscribers: "890K",
    category: "Music",
  },
  {
    id: "5",
    title: "Mastering Sourdough: From Starter to Perfect Crust",
    channel: "The Flour Hour",
    views: "340K views",
    time: "5 days ago",
    duration: "22:30",
    thumbnail:
      "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&q=80",
    description:
      "Everything you need to know about sourdough — from building your starter to scoring techniques.",
    likes: "19K",
    subscribers: "220K",
    category: "Food",
  },
  {
    id: "6",
    title: "Tokyo Street Photography — Golden Hour Walk",
    channel: "Wanderlens",
    views: "670K views",
    time: "3 weeks ago",
    duration: "11:55",
    thumbnail:
      "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=64&q=80",
    description:
      "Walking through Tokyo at golden hour with a Leica M11. No commentary, just the city.",
    likes: "28K",
    subscribers: "1.2M",
    category: "Travel",
  },
  {
    id: "7",
    title: "CSS Grid Deep Dive — Every Layout You'll Ever Need",
    channel: "DevCraft",
    views: "98K views",
    time: "1 week ago",
    duration: "33:08",
    thumbnail:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80",
    description:
      "The most complete CSS Grid guide on the internet. Templates, responsive patterns and real examples.",
    likes: "6.1K",
    subscribers: "98K",
    category: "Tech",
  },
  {
    id: "8",
    title: "How Black Holes Destroy Stars — Tidal Disruption Events",
    channel: "Neuro Lab",
    views: "4.7M views",
    time: "2 months ago",
    duration: "16:20",
    thumbnail:
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&q=80",
    description:
      "When a star gets too close to a black hole, something extraordinary happens. We visualize the physics behind tidal disruption events.",
    likes: "220K",
    subscribers: "4.8M",
    category: "Science",
  },
];

export const MY_VIDEOS: Video[] = [
  {
    id: "my-1",
    title: "My First Vlog — Morning Routine in the City",
    channel: "You",
    views: "1,204 views",
    time: "2 days ago",
    duration: "08:42",
    thumbnail:
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80",
    description: "My morning routine living in the city.",
    likes: "88",
    subscribers: "340",
    category: "Vlog",
  },
  {
    id: "my-2",
    title: "Unboxing the New Sony A7C II — Is it Worth It?",
    channel: "You",
    views: "3,891 views",
    time: "1 week ago",
    duration: "12:15",
    thumbnail:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80",
    description: "Full unboxing and first impressions of the Sony A7C II.",
    likes: "201",
    subscribers: "340",
    category: "Tech",
  },
  {
    id: "my-3",
    title: "Weekend Road Trip — Coastal Drive Highlights",
    channel: "You",
    views: "712 views",
    time: "3 weeks ago",
    duration: "06:30",
    thumbnail:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=640&q=80",
    avatar:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64&q=80",
    description: "Highlights from a weekend coastal drive.",
    likes: "54",
    subscribers: "340",
    category: "Travel",
  },
];

export const CATEGORIES = [
  "All",
  "Tech",
  "Travel",
  "Science",
  "Music",
  "Food",
  "Gaming",
  "Design",
];
