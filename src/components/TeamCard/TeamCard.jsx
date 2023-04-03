import React from "react";

const socialIcons = [
  {
    id: 1,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a84d797a6fb_linkedin.png",
    alt: "linkedin",
  },
  {
    id: 2,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44afa9f97a701_instagram.png",
    alt: "instagram",
  },
  {
    id: 3,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a02d697a6fd_twiiter.png",
    alt: "facebook",
  },
  {
    id: 4,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a1a6697a6f9_twitter.png",
    alt: "twitter",
  },
  {
    id: 5,
    src: "https://assets.website-files.com/6315d6de2357050021f26e96/6315f5173de44a9a4e97a6ff_dribbble.png",
    alt: "dribble",
  },
];

const TeamCard = ({ data }) => {
  //const teamCard = data?.data?.teamMembers?.data[0]?.attributes?.team;
  // console.log("TeamCard data:", teamCard);
  // console.log("TeamCard:", data);
  // console.log("TeamCardImg:", data?.image?.data?.attributes?.url);
  // console.log("Icons:", data?.icons?.data);
  return (
    <div>
      <div className="flex flex-col gap-3 shadow-lg">
        <div>
          <img className="" src={data?.image?.data?.attributes?.url} />
        </div>
        <div className="content flex flex-col gap-4 px-4 py-8">
          <div>
            <h4 className="xl:text-xxl">{data?.name}</h4>
            <p className="text-dimGray">{data?.role}</p>
          </div>
          <div className="icons flex cursor-pointer gap-4">
            {data?.icons?.data.map((item) => (
              <img
                className="w-5"
                src={item?.attributes?.url}
                alt={item?.attributes?.alternativeText}
                key={item.id}
                {...item}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
