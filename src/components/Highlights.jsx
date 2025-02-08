import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Highlight = ({ icon, title, para }) => {
  return (
    <div className="highlight">
      {icon}
      <h3>{title}</h3>
      <p>{para}</p>
    </div>
  );
};

const Highlights = () => {
  return (
    <section id="highligts">
      <div className="container">
        <div className="row">
          <h2 className="section__title">
            Why choose <span className="purple">Library</span>
          </h2>  
          <div className="highlight__wrapper">
            <Highlight 
              icon={<FontAwesomeIcon icon="bolt" />}
              title="Easy and Quick"
              para="Get access to the book you purchased online instantly."
            />
            <Highlight 
              icon={<FontAwesomeIcon icon="book-open" />} 
              title="10,000+ Books"
              para="Library has books in all your favourite categories."
            />
            <Highlight 
              icon={<FontAwesomeIcon icon="tags" />} 
              title="Affordable"
              para="Get your hands on popular books for as little as $10."
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Highlights;
