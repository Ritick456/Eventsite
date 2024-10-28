// components/EventCard.js
import React from "react";

const EventCard = ({ event, onClick }) => {
    console.log(event.description)
  return (
    // <div className="w-full px-4 md:w-1/2 lg:w-1/3 mb-10">
     
    <section className="bg-white pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
    <div className="container">
     

      <div className="-mx-4 flex flex-wrap">
      <div className="w-full px-4">
        <div className="mb-10 w-full">
          <div className="mb-8 overflow-hidden rounded">
            <img src={event.image} alt="" className="w-full" />
          </div>
          <div>
            {event.date && (
              <span className="mb-5 inline-block rounded bg-primary px-4 py-1 text-center text-xs font-semibold leading-loose">
                {event.date}
              </span>
            )}
            <h3>
              <a
                href="/#"
                className="mb-4 inline-block text-xl font-semibold text-dark hover:text-primary  sm:text-2xl lg:text-xl xl:text-2xl"
              >
                {event.name}
              </a>
            </h3>
            <p className=" ">
              {event.description}
            </p>
          </div>
        </div>
      </div>
     
      </div>
    </div>
  </section>
    
  );
};

export default EventCard;



const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
  return (
    <>
     
    </>
  );
};




