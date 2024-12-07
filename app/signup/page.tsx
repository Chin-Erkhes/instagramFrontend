"use client";

import { Input } from "@/components/ui/input";
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
import { ChangeEvent, useState } from "react";

export default function Page() {
  const [email, setEmail] = useState<string>("");
  const [username, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailValue = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // const signUp = () => {
  //   if (email === "") {
  //     setEmailError(true);
  //   } else {
  //     setEmailError(false);
  //   }
  // };

  const l = () => {
    const eMail = () => {
      if (!email.includes("@")) {
        return alert("heddugeer zuund amidrad bgan be @ ashiglach");
      }
    };
    eMail();
    const userPassword = () => {
      if (password.length < 8) {
        alert("8aas ih oron hii");
      }
    };
    userPassword();
  };

  return (
    <div className="flex justify-center items-center bg-black h-screen">
      <Card className="flex flex-col w-[350px] bg-black border-none">
        <CardHeader>
          <CardTitle className="text-5xl font text-white font-black">
            Instagram
          </CardTitle>
          <CardDescription className="text-xl font text-white font-bold">
            Signup to see photos and videos from your friends.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-y-3 ">
          <Input
            placeholder="firstName"
            className="border-y-slate-700 border-x-slate-700 font-bold	bg-[#121212] text-white"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input
            placeholder="lastName"
            className="border-y-slate-700 border-x-slate-700 font-bold bg-[#121212] text-white"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
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
            onClick={l}
          >
            Signup
          </Button>
        </CardFooter>
        <div className="flex justify-center">
          <div className="text-white">Have an account?</div>
          <div className="text-blue-700 font-bold">Log in</div>
        </div>
      </Card>
      {/* <Post></Post> */}
    </div>
  );
}
