import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Ellipsis } from "lucide-react";
import { useRouter } from "next/navigation";
export const PostHeader = ({
  profileImage,
  username,
  userId,
}: {
  profileImage: string;
  username: string;
  userId: string;
}) => {
  const router = useRouter();
  return (
    <div className="flex gap-3 mb-4 justify-between p-3">
      <div className="flex gap-3 ">
        <Avatar onClick={() => router.push("/profile/" + userId)}>
          <AvatarImage src={profileImage} />
        </Avatar>
        <div className="text-white flex items-center font-bold">{username}</div>
      </div>
      <div className="items-center flex">
        <Ellipsis className="text-white m-3 cursor-pointer" />
      </div>
    </div>
  );
};
