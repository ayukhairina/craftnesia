import React from "react";
import Product01 from "../assets/img/products-01.jpg";
import Product02 from "../assets/img/products-02.jpg";
import Product03 from "../assets/img/products-03.jpg";
import Slider from "./Slider/Slider";

export default function Product() {
  return (
    <div>
      <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex ms-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">Rotan (Rattan)</span>
                  <span class="section-heading-lower">
                    Anyaman Rotan (Rattan)
                  </span>
                </h2>
              </div>
            </div>
            <Slider name={"img"} />
            {/* <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Product01} alt="..." /> */}
            <div class="product-item-description d-flex me-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">
                  Rattan is a type of forest product plant that belongs to the
                  Arecaceae (palms) tribe. Rattan is used as a basic material in
                  the processing of various handicrafts such as mats or carpets,
                  ethnic sandals, home decorations, baskets, glass mats, plate
                  mats and various other woven furniture that gives an ethnic
                  and traditional impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex me-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">Bamboo</span>
                  <span class="section-heading-lower">Tampah</span>
                </h2>
              </div>
            </div>
            <Slider name={"tampah"} />
            {/* <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src={Product02} alt="..." /> */}
            <div class="product-item-description d-flex ms-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">
                  Tampah (also referred to as tampi, penampi, nyiru) is a tool
                  made from woven bamboo tree trunks that are split open. This
                  tool is usually used to clean rice, snacks, tumpeng, and also
                  to dry the crust or gendar crackers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="page-section">
        <div class="container">
          <div class="product-item">
            <div class="product-item-title d-flex">
              <div class="bg-faded p-5 d-flex ms-auto rounded">
                <h2 class="section-heading mb-0">
                  <span class="section-heading-upper">Purun</span>
                  <span class="section-heading-lower">Anyaman Purun</span>
                </h2>
              </div>
            </div>
            <img
              class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0"
              src={Product03}
              alt="..."
            />
            <div class="product-item-description d-flex me-auto">
              <div class="bg-faded p-5 rounded">
                <p class="mb-0">
                  Purun or known as Purun woven is a handicraft typical of the
                  people of South Kalimantan made from purun (Eleocharis
                  dulcis). Purun is a type of grass or weed that grows in peat
                  areas. This plant thrives on wet rather than dry peat. Purun
                  woven can be processed into various handicrafts that can be
                  used as daily necessities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
