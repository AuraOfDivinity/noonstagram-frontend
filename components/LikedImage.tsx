import React from "react";

interface LikedImageProps {
  id: number;
  imageUrl: string;
}

const LikedImage: React.FC<LikedImageProps> = ({ id, imageUrl }) => {
  return (
    <div className="overflow-hidden rounded-lg">
      <img
        src={imageUrl}
        alt={`Liked Post ${id}`}
        className="w-full h-48 object-cover transition-transform duration-300 hover:scale-125"
      />
    </div>
  );
};

export default LikedImage;
