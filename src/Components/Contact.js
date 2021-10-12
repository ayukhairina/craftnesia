import React from "react";

export default function Contact() {
  return (
    <div>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-5">
                  <span className="section-heading-lower">Reach us On</span>
                </h2>
                <div className="social-media-container">
                <a
                  href="https://www.instagram.com/topcraftnesia/"
                  className="instagram social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/instagram.png'}
                    alt="ig logo"
                    className="social-media-icon"
                  />
                  <h6 style={{marginTop: 10}}>@topcraftnesia</h6>
                </a>
                </div>
              
<div className="social-media-container">
<a
                  href="https://wa.me/6281254525782"
                  className="instagram social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/whatsapp.png'}
                    alt="wa logo"
                    className="social-media-icon"
                  />
                  <h6 style={{marginTop: 10}}>whatsapp topcraftnesia</h6>
                </a>
</div>
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
