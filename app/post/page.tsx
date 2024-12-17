"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Heart } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Send } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Ellipsis } from "lucide-react";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

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

type Post = {
  _id: string;
  caption: string;
  postImage: string;
  userId: User;
};

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  const getPosts = async () => {
    const token = localStorage.getItem("accessToken");
    const jsonData = await fetch("https://instagram-dfjf.onrender.com/posts");
    const response = await jsonData.json();
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-black ">
      <div className="text-white text-5xl p-3">𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂</div>
      {posts?.map((post, i) => {
        return (
          <div className="justify-center items-center">
            <div className="text-black" key={i}>
              <div className="flex gap-3 mb-4 justify-between">
                <div className="flex gap-3 m-3">
                  <Avatar>
                    <AvatarImage src={post.userId?.profileImage} />
                  </Avatar>
                  <div className="text-white flex items-center font-bold">
                    {post.userId?.username}
                  </div>
                </div>
                <div className="items-center flex">
                  <Ellipsis className="text-white m-3 cursor-pointer" />
                </div>
              </div>
              <img className="min-h-80" src={post.postImage} />
              <div className="flex justify-between">
                <div className="flex gap-3 m-3">
                  <Heart className="text-white cursor-pointer" />
                  <MessageCircle
                    onClick={() => router.push("/comment")}
                    className="text-white cursor-pointer"
                  />
                  <Send className="text-white cursor-pointer" />
                </div>
                <div className="m-3">
                  <Bookmark className="text-white cursor-pointer" />
                </div>
              </div>

              {/* <div>{post.caption}</div> */}
              <div className="text-white ml-3">0 likes</div>
              <div className="text-white ml-3">{post.userId?._id}</div>
              <div
                onClick={() => router.push("/comment")}
                className="text-gray-500 ml-3 pb-5 cursor-pointer"
              >
                view all comments
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
