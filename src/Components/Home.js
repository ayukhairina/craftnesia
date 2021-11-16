import React from "react";
import test from "../assets/img/test.png";
import YoutubeEmbed from "./Youtube/YoutubeEmbed";

export default function Home() {
  return (
    <div>
      <section className="page-section clearfix">
        <div className="container">
          <div className="intro">
            <img
              className="intro-img img-fluid mb-3 mb-lg-0 img-round"
              src={test}
              alt="..."
            />
            <div className="intro-text left-0 text-center bg-faded p-5 rounded">
              <h2 className="section-heading mb-4">
                <span className="section-heading-upper">South Kalimantan's</span>
                <span className="section-heading-lower">Traditional Handicraft</span>
              </h2>
              <p className="mb-3">
                South Kalimantan is one of the provinces in Indonesia that has
                natural wealth and beauty that is used by local people as raw
                materials to make various unique handicrafts. The main
                ingredients are processed into handicrafts of South
                Kalimantan such as rattan, purun, and water hyacinth. Various
                handicrafts of South Kalimantan such as lampits, mats or
                carpets, bags, baskets, various daily necessities, and other
                woven furniture that gives an ethnic and traditional impression.
                Currently, handicraft products of South Kalimantan have
                go to global markets such as Malaysia, Japan,
                Turkey, the Middle East to Europe.
              </p>
              <div className="intro-button mx-auto">
                <a className="btn btn-primary btn-xl" href="#!">
                  Visit Us Today!
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page-section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="cta-inner bg-faded text-center rounded">
                <h2 className="section-heading mb-4">
                  <YoutubeEmbed embedId="HDMlk9xv5qM" />
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
