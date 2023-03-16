import React from "react";
import Review from "../Review/Review";
import Author from "../Author/Author";

const TestimonialCard = ({
  paragraph,
  testimonialName,
  companyName,
  rating,
  img,
}) => {
  return (
    <div className="slide line-clamp-4 mx-5 overflow-visible">
      <div className="slide_content flex flex-col justify-center items-center text-center px-10 py-11 bg-gainsboro">
        <div className="client_wrapper  py-11 px-10 flex flex-col justify-center items-center text-center">
          <Review {...rating} />
          <p className="quote_text text-xl font-medium">{paragraph}</p>
          <Author
            testimonialName={testimonialName}
            companyName={companyName}
            img={img}
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

// import React from "react";
// import Star from "../../../public/icons/star.svg";
// import StarHalf from "../../../public/icons/starhalf.svg";
// import StarFill from "../../../public/icons/starfill.svg";

// const TestimonialCard = ({ rate, img, testimonialName, companyName }) => {
//   const stars = [1, 2, 3, 4, 5];
//   return (
//     <div className="slide w-[100px] sm:w-[450px] lg:w-[500px] overflow-visible">
//       <div className="slide_content flex flex-col justify-center items-center text-center px-10 py-11 bg-gainsboro">
//         <div className="client_wrapper py-11 px-10 flex flex-col justify-center items-center text-center">
//           <div className="start_flex flex justify-center items-center mb-5">
//             {stars.map((i) => {
//               if (rate >= i) {
//                 return <StarFill key={i} width={24} height={24} fill="gray" />;
//               }
//               if (rate === i - 0.5) {
//                 return <StarHalf key={i} width={24} height={24} fill="gray" />;
//               }
//               return <Star key={i} width={24} height={24} fill="gray" />;
//             })}
//           </div>
//           <div className="quote_text text-6xl font-medium">
//             <p>
//               "The public is more familiar with bad design than good design. It
//               is, in effect, conditioned to prefer bad design, because that is
//               what it lives with."
//             </p>
//           </div>
//           <div className="author_flex flex mt-7 justify-center items-center text-left">
//             <div className="testimonial_photo w-20 h-20 rounded-[100%]">
//               <img src={img} alt="testimonial_image" />
//             </div>
//             <div className="block">
//               <div className="testimonial_name">{testimonialName}</div>
//               <div className="company_name">{companyName}</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TestimonialCard;
