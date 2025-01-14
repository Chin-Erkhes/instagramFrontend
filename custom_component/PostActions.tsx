"use client";

import { Heart, MessageCircle, Send, Bookmark } from "lucide-react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const PostAction = ({
  postId,
  likes = [],
}: {
  postId: string;
  likes?: string[];
}) => {
  const [like, setLike] = useState(likes.length);
  const [isLikesDialogOpen, setIsOpenLikesDialog] = useState(false);
  const token = localStorage.getItem("token");
  const router = useRouter();

  let decodedToken: { userId: string } | null = null;
  try {
    decodedToken = jwtDecode<{ userId: string }>(token ?? "");
  } catch (error) {
    console.error("Failed to decode token:", error);
  }
  const userId = decodedToken?.userId;
  const isUserLiked = likes.includes(userId || "");

  const handleDialog = () => setIsOpenLikesDialog((prev) => !prev);

  const handleLike = async () => {
    if (!isUserLiked) {
      setLike((prev) => prev + 1);
      try {
        const response = await fetch(
          "https://instagram-dfjf.onrender.com/post/like",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ postId, userId }),
          }
        );
        if (!response.ok) throw new Error("Failed to like post");
        const res = await response.json();
        console.log(res);
      } catch (error) {
        console.error("Error liking post:", error);
        setLike((prev) => prev - 1);
      }
    }
  };

  return (
    <div>
      <div className="flex justify-between p-3">
        <div className="flex gap-3">
          <Heart
            onClick={handleLike}
            className="text-white cursor-pointer"
            fill={isUserLiked ? "red" : "black"}
            color={isUserLiked ? "red" : "white"}
          />
          <MessageCircle
            onClick={() => router.push("/comment/" + postId)}
            className="text-white cursor-pointer"
          />
          <Send className="text-white cursor-pointer" />
        </div>
        <div className="m-3">
          <Bookmark className="text-white cursor-pointer" />
        </div>
      </div>
      <div className="pl-3">
        <div onClick={handleDialog} className="text-white ml-3">
          {like} likes
        </div>
        <div className="text-white ml-3">{postId}</div>
        <div
          onClick={() => router.push("/comment/" + postId)}
          className="text-gray-500 ml-3 pb-5 cursor-pointer"
        >
          View all comments
        </div>
      </div>
      {isLikesDialogOpen && <div className="modal">Likes Dialog</div>}
    </div>
  );
};
