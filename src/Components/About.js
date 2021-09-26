import React from "react";
import about from "../assets/img/about.jpg";
export default function About() {
  return (
    <div>
  <section className="page-section about-heading">
    <div className="container">
      <img style={{marginLeft: 100}} className="img-fluid rounded about-heading-img mb-3 mb-lg-0" src={about} alt="..." />
      <div className="about-heading-content">
        <div className="row">
          <div className="col-xl-9 col-lg-10 mx-auto">
            <div className="bg-faded rounded p-5">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">
                  From Borneo to World
                </span>
                <span className="section-heading-lower">About Craftnesia</span>
              </h2>
              <p>
                Craftnesia is a handicraft production house originating from
                Indonesia with the main ingredients of rattan (rotan), purun
                and water hyacinth (eceng gondok). This handicraft is a
                local product of South Kalimantan located in Hulu Sungai
                Utara (HSU) Regency.
              </p>
              <p className="mb-0">
                Craftnesia was formed with the aim of raising, introducing,
                and developing local products to national or even international
                market.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

  );
}
