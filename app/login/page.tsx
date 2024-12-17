"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState<string>("");

  const goToPost = () => {
    if (email.includes("@")) {
    } else {
      return alert("heddugeer zuund amidrad bgan be @ ashiglach");
    }

    if (password.length < 8) {
      return alert("8aas ih oron hii");
    }
    router.push("/post");
  };
  return (
    <div className="flex justify-center items-center bg-black h-screen ">
      <Card className="flex flex-col w-[350px] bg-black border-none justify-center">
        <CardHeader>
          <CardTitle className="text-5xl font text-white font-black">
            𝐼𝓃𝓈𝓉𝒶𝑔𝓇𝒶𝓂
          </CardTitle>
          <CardDescription className="text-xl font text-white font-bold">
            Signup to see photos and videos from your friends.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-3 ">
          <Input
            placeholder="username"
            className="border-y-slate-700 border-x-slate-700 font-bold bg-[#121212] text-white"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <Input
            placeholder="email"
            className="border-y-slate-700 border-x-slate-700 font-bold	bg-[#121212] text-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="password"
            className="border-y-slate-700 border-x-slate-700 font-bold	bg-[#121212] text-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </CardContent>
        <CardFooter className="w-screen">
          <Button
            onClick={() => {
              goToPost();
            }}
            className="flex justify-center font-bold	bg-blue-700 w-[300px]"
          >
            Login
          </Button>
        </CardFooter>
        <div className="flex justify-center gap-3">
          <div className="text-white">Don't have an account?</div>
          <button
            onClick={() => router.push("/signup")}
            className="text-blue-700 font-bold"
          >
            Sign up
          </button>
        </div>
      </Card>
      {/* <Post></Post> */}
    </div>
  );
};

export default Page;
