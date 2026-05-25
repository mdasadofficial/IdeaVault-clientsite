import Image from "next/image";
import React from "react";

const IdeaCard = ({ idea }) => {
  const { ideaTitle, imageUrl, estimatedBudget, category } = idea;
  return(
    <div>
    <Image 
    alt={ideaTitle} 
    src={imageUrl}
    height={400}
    width={400}
    
    />
  </div>
  )
  
};

export default IdeaCard;
