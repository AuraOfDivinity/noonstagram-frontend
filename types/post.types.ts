export interface Post {
  _id: string;
  user: { name: string };
  createdAt: string;
  imageUrl: string;
  likes: number;
}
