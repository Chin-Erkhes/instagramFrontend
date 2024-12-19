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
  comment: String;
  postId: String;
  userId: User;
};

const Page = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [comments, setComments] = useState<Comment[]>([]);

  return (
    <div>
      {comments.map((comment, i) => {
        return <div key={i}>{comment.comment}</div>;
      })}
    </div>
  );
};
export default Page;
