
import { Service, WorkItem, Feedback } from './types';

export const SERVICES: Service[] = [
  {
    id: 'vehicle-wraps',
    title: 'Vehicle & Car Wraps',
    description: 'Specializing in full color changes, commercial fleet branding, and precision protective films.',
    icon: 'Car'
  },
  {
    id: 'two-dee-designs',
    title: 'Designing Two-Dee Designs',
    description: 'Expert 2D graphic design for all platforms, from digital assets to complex print layouts.',
    icon: 'Layers'
  },
  {
    id: 'signage',
    title: 'Storefront Signage & Shop Graphics',
    description: 'Command attention with custom exterior and interior signage designed to capture foot traffic.',
    icon: 'Store'
  },
  {
    id: 'branding',
    title: 'Brand Identity & Logo Design',
    description: 'Crafting unique visual identities that define your business and resonate with your audience.',
    icon: 'Fingerprint'
  },
  {
    id: 'print',
    title: 'Print & Marketing Materials',
    description: 'High-quality business cards, brochures, and promotional materials that speak volumes.',
    icon: 'Printer'
  },
  {
    id: 'digital',
    title: 'Website & App Design',
    description: 'Modern, responsive, and user-centric digital experiences that convert visitors into customers.',
    icon: 'Monitor'
  },
  {
    id: 'social',
    title: 'Social Media Graphics & Ads',
    description: 'Engaging content tailored for every platform to boost your online presence and reach.',
    icon: 'Share2'
  },
  {
    id: 'packaging',
    title: 'Packaging & Product Label Design',
    description: 'Innovative packaging solutions that stand out on the shelves and enhance the unboxing experience.',
    icon: 'Package'
  },
  {
    id: 'agency',
    title: 'Marketing & Advertising Design Agencies',
    description: 'Strategic creative direction and agency-level planning to scale your brand effectively.',
    icon: 'BarChart'
  }
];

export const PORTFOLIO: WorkItem[] = [
  { 
    id: 1, 
    title: 'Matte Black SUV Wrap', 
    category: 'Vehicle Wrap', 
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&q=80&w=800',
    vimeoId: '1159071726' 
  },
  { 
    id: 4, 
    title: 'Luxury Skincare Packaging', 
    category: 'Packaging', 
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=800',
    vimeoId: '1159074526'
  },
  { 
    id: 3, 
    title: 'Downtown Bistro Signage', 
    category: 'Storefront', 
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800',
    vimeoId: '1159073763'
  },
  { 
    id: 2, 
    title: 'E-commerce Brand Identity', 
    category: 'Branding', 
    image: 'https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&q=80&w=800',
    vimeoId: '1159073251'
  },
  {
    id: 5,
    title: 'Signature Collection',
    category: 'Fleet & Custom Wraps',
    image: 'https://i.postimg.cc/MTvVqB6m/image.jpg',
    collageImages: [
      'https://i.postimg.cc/MTvVqB6m/image.jpg',
      'https://i.postimg.cc/v1NhyTTj/image.jpg',
      'https://i.postimg.cc/qh6Lvr6w/image.jpg',
      'https://i.postimg.cc/S2Yrx4YT/image.jpg',
      'https://i.postimg.cc/grvVSNVV/image.jpg',
      'https://i.postimg.cc/054VN4rH/2wr.jpg',
      'https://i.postimg.cc/CzpgYLnr/image.jpg'
    ]
  }
];

export const TESTIMONIALS: Feedback[] = [
  {
    id: 1,
    author: 'Michael Thompson',
    role: 'Fleet Manager, Logistics Co.',
    text: 'Badar has been our go-to for vehicle wraps for over 9 years. Their attention to detail is unmatched. I recommend them for every project without hesitation.',
    rating: 5
  },
  {
    id: 2,
    author: 'Sarah Jenkins',
    role: 'CEO, Lumina Tech',
    text: 'Many people recommended Badar to us for our rebranding. They were right. The most professional agency we have ever worked with.',
    rating: 5
  },
  {
    id: 3,
    author: 'David Chen',
    role: 'Marketing Director',
    text: 'From shop graphics to our website, Badar handles everything. Their reputation for excellence is well-deserved.',
    rating: 5
  }
];

export const CLIENTS = [
  { name: 'Culver’s' },
  { name: 'Cook Out' },
  { name: 'Bojangles' },
  { name: 'Zaxby’s' },
  { name: 'Freddy’s Frozen Custard & Steakburgers' },
  { name: 'Portillo’s' },
  { name: 'Raising Cane’s' },
  { name: 'Dutch Bros Coffee' },
  { name: 'In-N-Out Burger' },
  { name: 'Whataburger' },
  { name: 'Wawa' },
  { name: 'Sheetz' },
  { name: 'Buc-ee’s' },
  { name: 'Casey’s General Store' },
  { name: 'Scooter’s Coffee' },
  { name: 'Black Rock Coffee Bar' },
  { name: 'Swig' },
  { name: 'Dirty Dough' },
  { name: 'Crumbl Cookies' },
  { name: 'Jimmy John’s' },
  { name: 'Firehouse Subs' },
  { name: 'Wingstop' },
  { name: 'Torchy’s Tacos' },
  { name: 'Slim Chickens' },
  { name: 'Dave’s Hot Chicken' },
  { name: 'Marco’s Pizza' },
  { name: 'Blaze Pizza' },
  { name: 'Jersey Mike’s' },
  { name: 'Five Guys' },
  { name: 'Smashburger' }
];
