import React, { useState } from "react";

export const Slider = () => {
  const [left, setLeft] = useState("0px");

  const handlePrevClick = () => {
    const newLeft = parseInt(left) + 500;
    setLeft(`${newLeft}px`);
  };

  const handleNextClick = () => {
    const newLeft = parseInt(left) - 500;
    setLeft(`${newLeft}px`);
  };

  console.log(left);

  return (
    <>
      <div className="slider-container">
        <div
          className="slider"
          style={{
            left: `${left}`
          }}
        >
          <ul className="slider__slide">
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Home%20_%20Kitchen.png"
                alt="Purple Blender"
              />
              <div className="slider__item-caption">Home & Kitchen</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Cell%20Phones%20_%20Accessories.png"
                alt="iPhone with a forest green case on it"
              />
              <div className="slider__item-caption">
                Cell Phones & Accessories
              </div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Sports%20_%20Outdoors.png"
                alt="Basketball"
              />
              <div className="slider__item-caption">Sports & Outdoors</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Clothing%2C%20Shoes%20_%20Jewelry.png"
                alt="Red Converse high-top tennis shoe"
              />
              <div className="slider__item-caption">
                Clothing, Shoes & Jewelry
              </div>
            </li>
          </ul>

          <ul className="slider__slide">
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Video%20Games.png"
                alt="Playstation video game controller"
              />
              <div className="slider__item-caption">Video Games</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Electronics.png"
                alt="white and gray smart home device"
              />
              <div className="slider__item-caption">Electronics</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Beauty%20_%20Personal%20Care.png"
                alt="White blow dryer"
              />
              <div className="slider__item-caption">Beauty & Personal Care</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Pet%20Supplies.png"
                alt="Dog food in a purple bowl"
              />
              <div className="slider__item-caption">Pet Supplies</div>
            </li>
          </ul>

          <ul className="slider__slide">
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Home%20_%20Kitchen.png"
                alt="Purple Blender"
              />
              <div className="slider__item-caption">Home & Kitchen</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Cell%20Phones%20_%20Accessories.png"
                alt="iPhone with a forest green case on it"
              />
              <div className="slider__item-caption">
                Cell Phones & Accessories
              </div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Sports%20_%20Outdoors.png"
                alt="Basketball"
              />
              <div className="slider__item-caption">Sports & Outdoors</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Clothing%2C%20Shoes%20_%20Jewelry.png"
                alt="Red Converse high-top tennis shoe"
              />
              <div className="slider__item-caption">
                Clothing, Shoes & Jewelry
              </div>
            </li>
          </ul>

          <ul className="slider__slide">
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Video%20Games.png"
                alt="Playstation video game controller"
              />
              <div className="slider__item-caption">Video Games</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Electronics.png"
                alt="white and gray smart home device"
              />
              <div className="slider__item-caption">Electronics</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Beauty%20_%20Personal%20Care.png"
                alt="White blow dryer"
              />
              <div className="slider__item-caption">Beauty & Personal Care</div>
            </li>
            <li className="slider__item">
              <img
                className="slider__item-img"
                src="https://cdn.joinhoney.com/explore_v2_images_web/Pet%20Supplies.png"
                alt="Dog food in a purple bowl"
              />
              <div className="slider__item-caption">Pet Supplies</div>
            </li>
          </ul>
        </div>
      </div>

      <div className="btn-container">
        {left !== "0px" && (
          <button id="prev-btn" onClick={handlePrevClick}>
            Prev
          </button>
        )}

        {left !== "-1500px" && (
          <button id="next-btn" onClick={handleNextClick}>
            Next
          </button>
        )}
      </div>
    </>
  );
};
