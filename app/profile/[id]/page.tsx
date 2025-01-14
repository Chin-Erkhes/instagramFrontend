"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

type User = {
  _id: string;
  email: string;
  userId: string;
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
  userProfile: UserProfileData;
};

type UserProfileData = {
  user: User;
  userPost: Post[];
};

const Page = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<User[]>([]);
  const router = useRouter();
  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://instagram-dfjf.onrender.com/users");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const jsonData = await response.json();
      setUser(jsonData);
    } catch (error) {
      console.error("Error fetching users:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="text-white text-5xl p-5 text-center font-bold">
        𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂
      </div>
      {loading && (
        <div className="text-white text-center py-5">Loading posts...</div>
      )}
      <div>
        {user?.map((user) => (
          <div key={user._id}></div>
        ))}
      </div>
    </div>
  );
};
export default Page;
