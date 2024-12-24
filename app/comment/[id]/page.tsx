"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart } from "lucide-react";

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
  const postId = pathname.split("/")[2];
  const [comments, setComments] = useState<Comment[]>([]);

  const getCommentsByUserId = async () => {
    const response = await fetch(
      "https://instagram-dfjf.onrender.com/getCommentsByPostId/" + postId
    );

    const data = await response.json();
    setComments(data);
  };

  useEffect(() => {
    getCommentsByUserId();
  }, []);
  return (
    <div className="h-screen">
      {comments?.map((comment, i) => {
        return (
          <div className="text-black">
            <div className="flex text-black gap-3 p-8" key={i}>
              <Avatar>
                <AvatarImage className="" src={comment.userId?.profileImage} />
              </Avatar>
              <div className="ml-4">
                <div className="flex items-center font-bold">
                  {comment.userId?.username}
                </div>
                <div className="text-black ">{comment.comment}</div>
                <div className="flex gap-3">
                  <div className="text-xs text-gray-500 font-bold">20h</div>
                  <div className="text-xs text-gray-500 font-bold">1 like</div>
                </div>
              </div>
              <Heart className="text-black cursor-pointer mt-3" />
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Page;
