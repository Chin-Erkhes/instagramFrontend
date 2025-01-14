"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

type User = {
  _id: string;
  username: string;
  password: string;
  email: string;
  profileImage: string;
  posts: string[];
  following: string[];
  followers: string[];
};

type Comment = {
  comment: string;
  postId: string;
  userId: User;
};

const Page = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <div className="bg-black min-h-screen">
      {comments.length > 0 ? (
        comments.map((comment, i) => (
          <div key={i} className="w-full max-w-md flex flex-col rounded-lg p-3">
            {comment.comment}
          </div>
        ))
      ) : (
        <div className="text-gray-500 text-lg">No comments yet.</div>
      )}
    </div>
  );
};

export default Page;
