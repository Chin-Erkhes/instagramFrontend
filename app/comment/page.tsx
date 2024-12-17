"use client";

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

type Comment = {
  comment: String;
  postId: String;
  userId: User;
};

const Page = () => {
  const [comments, setComments] = useState<Comment[]>([]);
};
export default Page;
