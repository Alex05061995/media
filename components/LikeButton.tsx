import React, { useState, useEffect } from "react";
import { MdFavorite } from "react-icons/md";
import useAuthStore from "../store/authStore";

interface LikeButtonProps {
  handleLike: () => void;
  handleDislike: () => void;
  likes: any[]
}

const LikeButton = ({handleLike, handleDislike, likes}: LikeButtonProps) => {
  const [alreadyLiked, setIsAlreadyLiked] = useState(false);
  const { userProfile } = useAuthStore();
  const filterLikes = likes?.filter((like) => like._ref === userProfile._id)

  useEffect(() => {
    if(filterLikes?.length > 0) {
      setIsAlreadyLiked(true)
    } else {
      setIsAlreadyLiked(false)
    }
  }, [likes, filterLikes])


  return (
    <div className="gap-6 flex">
      <div className="mt-4 flex flex-col items-start justify-center cursor-pointer">
        {alreadyLiked ? (
          <div onClick={handleDislike} className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]">
            <MdFavorite className="text-lg md:text-2xl" />
          </div>
        ) : (
          <div onClick={handleLike} className="bg-primary rounded-full p-2 md:p-4 text-[#F51997]">
          <MdFavorite className="text-lg md:text-2xl" />
          </div>
        )}
        <p className="text-md font-semibold">
         {likes?.length || 0}
        </p>
      </div>
    </div>
  );
};

export default LikeButton;
