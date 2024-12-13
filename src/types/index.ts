export interface Course {
  id: string;
  title: string;
  icon: string;
  progress: number;
  duration: string;
  totalDuration: string;
}

export interface Category {
  title: string;
  courses: number;
  duration: string;
  icon: string;
}

export interface BrowseCourse {
  title: string;
  duration: string;
  description: string;
  image: string;
}

export interface User {
  name: string;
  avatar: string;
  plan: string;
}