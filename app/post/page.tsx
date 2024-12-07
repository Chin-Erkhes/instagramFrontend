"use client";

import { useState, useEffect } from "react";

type likeTypes = {
  profileImage: string;
  username: string;
  _id: string;
};

type postType = {
  _id: string;
  caption: string;
  postImage: string;
  userId: string;
  likes: likeTypes[];
}[];

const Page = () => {
  const [posts, setPosts] = useState<postType>([]);
  console.log(posts);
  const getPosts = async () => {
    console.log("working");
    const jsonData = await fetch("https://instagram-dfjf.onrender.com");
    const response = await jsonData.json();
    setPosts(response);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div>
      {posts?.map((post) => {
        return (
          <div key={post._id}>
            <div>{post.caption}</div>
            <img src={post.postImage} width={"400px"} height={"600px"} />
          </div>
        );
      })}
    </div>
  );
};

export default Page;
