"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PostHeader } from "@/custom_component/PostHeader";
import { PostAction } from "@/custom_component/PostActions";
import { PostContent } from "@/custom_component/PostContent";

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
  likes: string[];
};

const Page = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const getPosts = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://instagram-dfjf.onrender.com/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }
      const jsonData = await response.json();
      setPosts(jsonData);
    } catch (error) {
      console.error("Error fetching posts:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="text-white text-5xl p-5 text-center font-bold">
        𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂
      </div>
      {loading && (
        <div className="text-white text-center py-5">Loading posts...</div>
      )}
      <div className="flex flex-col items-center gap-10">
        {posts?.map((post) => (
          <div
            key={post._id}
            className="w-full max-w-md flex flex-col rounded-lg shadow-lg p-3"
          >
            <PostHeader
              profileImage={post?.userId?.profileImage}
              username={post?.userId?.username}
              userId=""
              // onClick={post?.userId?.username}
            />
            <PostContent postImage={post.postImage} caption={post.caption} />
            <PostAction postId={post._id} likes={post?.likes} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
