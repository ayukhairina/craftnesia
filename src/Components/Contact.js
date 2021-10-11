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
                <a
                  href="https://www.instagram.com/topcraftnesia/"
                  className="instagram social"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <img
                    src={process.env.PUBLIC_URL + '/instagram.png'}
                    alt="ig logo"
                    height={40}
                  />
                  <h6 style={{marginTop: 10}}>@topcraftnesia</h6>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
