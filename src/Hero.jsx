import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info"></article>
        <h1>Payments infrastructure for the internet</h1>
        <p>
          Millions of companies of all sizes-from startups to fortune 500s-use
          Strapies software and APIs tp accept payments, send payouts, and
          manage their businesses online.
        </p>
        <button className="btn">Start Now</button>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
        <p>
          Strapi is the leading open-source headless CMS. It’s 100% JavaScript
          and fully customizable.
        </p>
      </div>
    </section>
  );
};

export default Hero;
