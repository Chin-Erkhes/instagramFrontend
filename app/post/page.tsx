"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState, useEffect } from "react";

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

  const getPosts = async () => {
    const jsonData = await fetch("https://instagram-dfjf.onrender.com/posts");
    const response = await jsonData.json();
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts?.map((post, i) => {
        return (
          <div className="bg-black">
            <Card className="text-black" key={i}>
              <div className="w-80 h-64 justify-center">
                <img className="" src={post.userId.profileImage} />
                <div>{post.userId.username}</div>
              </div>
              <img src={post.postImage} />
              <div>{post.caption}</div>
            </Card>
          </div>
        );
      })}
    </div>
  );
};

export default Page;
