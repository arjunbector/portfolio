import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { Tooltip } from "react-tooltip";
import Image from "next/image";
import React from "react";
import Link from "next/link";
//projectName, imgSrc, description, githubLink, WebsiteLink
const Card = ({ cardDetails }) => {
  // console.log(cardDetails);
  return (
    <div className="h-96 w-80 border flex flex-col justify-between p-4">
      <Tooltip
        place="bottom"
        id="my-tooltip"
        style={{ color: "white", borderRadius: "10px" }}
      />
      <div className="head text-lg font-bold">
        {cardDetails.projectName}
      </div>
      <div className="img-wrapper flex justify-center rounded-xl">
        <Image className="rounded-md" src={cardDetails.imgSrc} />
      </div>
      <div className="description">{cardDetails.description}</div>
      <div className="flex justify-between">
        <div>
          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="GitHub"
            target="_blank"
            href={cardDetails.githubLink}
          >
            <FaGithub />
          </Link>
        </div>
        <div>
          <Link
            data-tooltip-id="my-tooltip"
            data-tooltip-content="Project Link"
            target="_blank"
            href={cardDetails.githubLink}
          >
            <FiExternalLink />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;
