import React, { useState } from "react";
import faqData from "../utils/faqData";
import FAQ from "./FAQ";

const About = () => {
  const [showItems, setShowItems] = useState(0);
  return (
    <div className="w-full">  
      <h1 className="mx-4 font-bold text-4xl text-center">More about this project</h1>
      <div className="accordian">
        {faqData.map((data, index) => (
          <FAQ
            key={data.id}
            showItems={index === showItems ? true : false}
            setShowItems={() => {
              if (index === showItems) {
                setShowItems(null);
              } else {
                setShowItems(index);
              }
            }}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
