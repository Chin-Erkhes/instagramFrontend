import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Page = () => {
  return (
    <div className="bg-black">
      <div className="text-white">Instagram</div>
      <Input placeholder="Phone number, username, or email" />
    </div>
  );
};

export default Page;
