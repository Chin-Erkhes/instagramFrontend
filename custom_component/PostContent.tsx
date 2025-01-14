type PostContentProps = {
  postImage: string;
  caption: string;
};

export const PostContent = ({ postImage, caption }: PostContentProps) => {
  return (
    <div className="bg-black rounded-b-lg">
      {postImage && (
        <img
          src={postImage}
          alt="Post Image"
          className="w-full object-cover rounded-b-lg rounded-md"
        />
      )}
      <div className="p-4 text-white text-sm">
        {caption ? (
          <p>{caption}</p>
        ) : (
          <p className="italic text-gray-500">No caption provided</p>
        )}
      </div>
    </div>
  );
};
