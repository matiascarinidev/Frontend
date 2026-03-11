import { StarRating } from "@/lib/TypeIcons";
import React from "react";
import { CommentCardProps } from "@/types/CommentCardProps";

export default function CommentCard(props: Readonly<CommentCardProps>) {
  const {
    title = props.title,
    text = props.text,
    author = props.author,
    rating = props.rating,
    date = props.date,
  } = props;
  return (
    <article className="flex flex-col gap-2  max-w-md w-full bg-white p-5 rounded-md mt-8 shadow-md hover:scale-105 hover:duration-150 duration-150">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row justify-between w-full">
          <p className="text-lg">{author}</p>
          <p className="text-xs">{date}</p>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full">
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="text-xs">
          <div className="flex flex-row">
            <StarRating rating={rating} />
          </div>
        </div>
      </div>
      <div className="text-md">{text}</div>
    </article>
  );
}
