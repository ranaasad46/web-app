import React from "react";
import { Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div style={{ display: "grid", marginTop: "120px" }}>
      <div style={{ marginLeft: "10rem", marginRight: "10rem" }}>
        <div className="d-grid my-3 bg-white">
          <div className="d-flex align-items-center justify-content-center">
            <h1 className="font-family">
              <strong>Contact Us</strong>
            </h1>
          </div>
          <div className="font-family" style={{ marginTop: "3rem" }}>
            <h5>
              <strong> Lone S Traders</strong>
            </h5>
            <p>539 W.Commerce Street #6566, Dallas ,TX 75208</p>
            <p>
              <strong>Email:</strong> lonestraders@gmail.com
            </p>
            <p>
              <strong>Phone:</strong> +1 972 928 3515
            </p>
          </div>
        </div>
        <div className="bg-white">
          <div className="d-grid font-family " style={{ width: "100%" }}>
            <div className="d-grid ">
              <div className="d-flex align-items-center justify-content-center">
                <h1 className="font-family">
                  <strong> Send Us Your Query</strong>
                </h1>
              </div>
              <div  className="d-flex align-items-center justify-content-center">
                <div className="d-grid">

                <div className="d-flex my-3" style={{width:"118%"}}>
                  <div style={{ width: "42%" }}>
                    <input
                      placeholder="Name*"
                      style={{ width: "100%" }}
                      ></input>
                  </div>
                  <div className="mx-1" style={{ width: "42%" }}>
                    <input
                      placeholder="Email*"
                      style={{ width: "100%" }}
                      ></input>
                  </div>
                </div>
              <div className="my-4">
                <input placeholder="Subject" style={{ width: "100%" }}></input>
              </div>
              <div className="my-4">
                <textarea
                  id=""
                  cols="135"
                  rows="10"
                  placeholder="Message"
                  ></textarea>
                  </div>
                  </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-5">
              <Button variant="warning" size="lg">
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
