import React, { useState } from "react";
import { useAppDispatch } from "@/hooks/hooks";
import { createPost } from "@/app/store/actions/post.actions"; // Assuming action is created correctly
import withPopup from "@/app/hoc/withPopup";

interface CreatePostPopupProps {
  onCancel: () => void;
}

const CreatePostPopup: React.FC<CreatePostPopupProps> = ({ onCancel }) => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setImage(file);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !description || !image) {
      alert("Please fill in all fields");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image as File);

    dispatch(createPost(formData)); // Call the createPost action
    onCancel(); // Close popup after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 font-nunito">
        <label className="block font-semibold ">Title</label>
        <input
          type="text"
          className="w-full border p-2 rounded-md border-slate-200 font-lora"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea
          className="w-full border p-2 rounded-md border-slate-200 font-lora"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block font-semibold mb-1">Upload Image</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
          className="font-lora cursor-pointer rounded-lg py-2 "
        />
      </div>
      <div className="flex justify-end space-x-2">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 font-montserrat text-sm"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 font-montserrat text-sm"
        >
          Create Post
        </button>
      </div>
    </form>
  );
};

export default withPopup(CreatePostPopup);
