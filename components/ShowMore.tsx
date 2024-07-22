"use client";

import { ShowMoreProps } from "@/types";
import { useRouter } from "next/navigation";
import CustomButton from "./CustomButton";
import { updateSearchParams } from "@/utils";



const ShowMore = ({ pageNumber, isNext }: ShowMoreProps) => {
  const router = useRouter();
  
  const handleNavigation = () => {
    const newLimit = (pageNumber + 1) * 10;
    const newPathName = updateSearchParams("limit", `${newLimit}`);

    router.push(newPathName, {scroll: false});
  }

  return (
    <div className="
      w-full
      flex-center
      gap-5
      mt-10
    ">
      {!isNext && (
        <CustomButton 
          title="Show More"
          btnType="button"
          containerStyles="bg-transparent border border-gray-900 text-gray-900 rounded-full min-w-[130px] transition duration-300 ease-in-out hover:bg-blue-500 hover:text-white hover:border-transparent"
          handleClick={handleNavigation}
        />
      )}
    </div>
  )
}

export default ShowMore