/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useRef, useState } from "react";
import "./testimonials.css";
import { testimonialsData } from "./testimonialsData";

const TestimonialCard = ({ testimony, userName, profession, image }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-card__testes">
        <p>{testimony}</p>
      </div>
      <div className="testimonial-card__user">
        <div className="testimonial-card__user-id">
          <h4>{userName}</h4>
          <p>{profession}</p>
        </div>
        <img
          src={image || "/placeholder.svg"}
          alt={userName}
          className="testimonial-card__user-image"
        />
      </div>
    </div>
  );
};

const Testimonials = () => {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(3);

  // Determine number of columns based on viewport width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        setColumns(3);
      } else if (window.innerWidth > 768) {
        setColumns(2);
      } else {
        setColumns(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Distribute testimonials into columns
  const distributeTestimonials = () => {
    const columnArrays = Array.from({ length: columns }, () => []);

    testimonialsData.forEach((testimonial, index) => {
      const columnIndex = index % columns;
      columnArrays[columnIndex].push(testimonial);
    });

    return columnArrays;
  };

  const columnArrays = distributeTestimonials();

  return (
    <section className="test">
      <img
        src="https://res.cloudinary.com/dzohnw8e5/image/upload/v1746034530/Add_6_per_circle_vscpxr.svg"
        alt="svg image"
        className="test-svg"
      />
      <div className="testimonials-heading">
        <span>Voices of Growth</span>
        <h1>Why Members Stay, Grow, and Show Up</h1>
      </div>
      <div className="testimonials-masonry" ref={containerRef}>
        {columnArrays.map((column, columnIndex) => (
          <div className="testimonials-column" key={columnIndex}>
            {column.map((testimonial, index) => (
              <TestimonialCard
                key={`${columnIndex}-${index}`}
                testimony={testimonial.testimony}
                profession={testimonial.profession}
                image={testimonial.image}
                userName={testimonial.name}
              />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
