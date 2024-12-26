import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

export const PostAction = ({
  postId,
  likes,
}: {
  postId: string;
  likes: string[];
}) => {
  const [like, setLike] = useState(likes.length);
  const token = localStorage.getItem("accessToken");
  const decodedToken = jwtDecode(token ?? "");
  const [isLikesDialogOpen, setIsOpenLikesDialog] = useState(false);
  const handleDialog = () => setIsOpenLikesDialog((prev) => !prev);
  const router = useRouter();
  //   const userId = decodedToken.userId;
  const handleLike = async () => {
    const response = await fetch("https://instagram-dfjf.onrender.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        postId: postId,
        // userId: userId,
      }),
    });
  };
};
