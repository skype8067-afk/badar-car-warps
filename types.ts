
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface WorkItem {
  id: number;
  title: string;
  category: string;
  image: string;
  vimeoId?: string;
  streamableId?: string;
  collageImages?: string[];
}

export interface Feedback {
  id: number;
  author: string;
  role: string;
  text: string;
  rating: number;
}