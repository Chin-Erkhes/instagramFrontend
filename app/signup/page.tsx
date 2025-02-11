"use client";

import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// import { Post } from "@/app/post/page";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const [email, setEmail] = useState<string>("");
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const postNewUser = async () => {
    if (email.includes("@")) {
    } else {
      return alert("heddugeer zuund amidrad bgan be @ ashiglach");
    }

    if (password.length < 8) {
      return alert("8aas ih oron hii");
    }
    const newBro = {
      username,
      password,
      email,
    };

    const jsonData = await fetch(`https://instagram-dfjf.onrender.com/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBro),
    });
    const response = await jsonData.json();
    console.log(response);
    localStorage.setItem("token", response.token);

    router.push("/post");
    return alert("Successfully signed up");
  };

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <Card className="flex flex-col w-[350px] bg-black border-none">
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
            className="flex justify-center font-bold	bg-blue-700 w-[300px]"
            onClick={() => {
              postNewUser();
            }}
          >
            Signup
          </Button>
        </CardFooter>
        <div className="flex justify-center gap-3">
          <div className="text-white">Have an account?</div>
          <button
            onClick={() => router.push("/login")}
            className="text-blue-700 font-bold"
          >
            Log in
          </button>
        </div>
      </Card>
      {/* <Post></Post> */}
    </div>
  );
}
