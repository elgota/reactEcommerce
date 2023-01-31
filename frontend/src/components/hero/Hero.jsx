import React from "react";
import css from "./Hero.module.css";
import HeroImg from "../../assets/hero.png";

function Hero() {
  return (
    <div className={css.container}>
      {/*Left Side*/}
      <div className={css.h_sides}>
        <div className={css.text2}>
          <span>Las mejores plantas aquí en Vivero13</span>
        </div>
      </div>

      {/* middle side*/}
      <div className={css.wrapper}>
        <div className={css.blueCircle}></div>
        <img src={HeroImg} alt="" width={600} />
      </div>

      {/* right side*/}
      <div className={css.h_sides}>
        <div className={css.traffic}>
          <span>1.5m</span>
          <span>Monthly traffic</span>
        </div>
        <div className={css.customers}>
          <samp>10k</samp>
          <samp>Cliente felices</samp>
        </div>
      </div>
    </div>
  );
}

export default Hero;
