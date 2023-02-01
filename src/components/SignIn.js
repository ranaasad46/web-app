import React from "react";
import { Button } from "react-bootstrap";

export default function SignIn() {
  return (
    <div className="credentials-container" style={{ marginTop: "112px" }}>
      <div className="d-grid" style={{ width: "100%" }}>
        <div className="d-flex algin-items-center justify-content-center mt-5 ">
          <h1 className="font-family">
            <strong>Sign In</strong>
          </h1>
        </div>
        <div className="credentials-container">
          <div className="d-grid">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"5rem"}}>
              <div className="bg-white mb-4" style={{ width: "26%",marginTop:"5rem"}}>
                <p className="font-family d-flex align-items-center justify-content-center mt-3">
                  <strong>Enter Your Login Details</strong>
                </p>
                <div className="d-grid mb-4" style={{ width: "100%" }}>
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      className="my-1 font-family"
                      style={{ padding: "5px", width: "80%" }}
                      placeholder="Username or Email Address"
                    ></input>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      className="my-1 font-family"
                      style={{ padding: "5px", width: "80%" }}
                      placeholder="Password"
                      type="password"
                    ></input>
                  </div>
                  <div className="d-flex">

                  <div style={{marginLeft:"40px"}}>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                        />
                      <label className="form-check-label font-family" for="defaultCheck1">
                        Remember Me
                      </label>
                    </div>
                  </div>
                  <div className="font-family" style={{marginLeft:"42px"}}><a href="/"> Forget Your Password?</a></div>
                        </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      className="font-family mt-3"
                      variant="warning"
                      style={{ width: "80%", height: "40px" }}
                    >
                      <strong>Login</strong>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
