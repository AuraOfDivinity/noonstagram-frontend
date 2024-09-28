export interface Post {
  _id: string;
  user: { name: string };
  created_at: string;
  image_url: string;
  likes: number;
  description: string;
}
