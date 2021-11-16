import React from "react";
import about from "../assets/img/about.jpg";
export default function About() {
  return (
    <div>
      <section className="page-section about-heading">
        <div className="container">
          <img
            style={{ marginLeft: 100 }}
            className="img-fluid rounded about-heading-img mb-3 mb-lg-0"
            src={about}
            alt="..."
          />
          <div className="about-heading-content">
            <div className="row">
              <div className="col-xl-9 col-lg-10 mx-auto">
                <div className="bg-faded rounded p-5">
                  <h2 className="section-heading mb-4">
                    <span className="section-heading-upper">
                      From Borneo to World
                    </span>
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
                    and developing local products to national or even
                    international market.
                  </p>
                </div>
              </div>

              <div className="row" style={{marginTop: 100}}>
                <div className="col-xl-4 col-lg-4 mx-auto">
                  <img
                    style={{ height: "50%" }}
                    src="https://i.postimg.cc/QdWzW8bN/Untitled-design-4-1.png"
                    border="0"
                    alt="58e6920a-3f7b-499f-b444-d738e1c4e863"
                  />{" "}
                  <div  style={{backgroundColor:'#f6e1c5'}}>
                    <h3 style={{textAlign:'center'}}>Founder</h3>
                    <a
                  href="https://www.instagram.com/dewihanna/"
                  className="instagram social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <h5 style={{marginTop: 4, color:'black', textAlign:'center'}}>@dewihanna</h5>
                </a>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 mx-auto">
                  <img
                    style={{ height: "50%" }}
                    src="https://i.postimg.cc/y65VcdH2/Untitled-design-2.png"
                    border="0"
                    alt="58e6920a-3f7b-499f-b444-d738e1c4e863"
                  />{" "}
                  <div style={{backgroundColor:'#f6e1c5'}}>
                   <h3 style={{textAlign:'center'}}> Co-Founder </h3>
                   <a
                  href="https://www.instagram.com/afnyafny/"
                  className="instagram social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <h5 style={{marginTop: 4, color:'black', textAlign:'center'}}>@afnyafny</h5>
                </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
