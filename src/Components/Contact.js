import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
                <Link to='google.com'>
                <button>Button CLicked</button>
                </Link>
               
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
