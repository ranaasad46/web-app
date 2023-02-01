import React from 'react'
import { Button } from 'react-bootstrap'

export default function SignUp() {
  return (
    <div className="credentials-container" style={{ marginTop: "112px" }}>
      <div className="d-grid" style={{ width: "100%" }}>
        <div className="d-flex algin-items-center justify-content-center mt-5 ">
          <h1 className="font-family">
            <strong>Sign Up</strong>
          </h1>
        </div>
        <div className="credentials-container">
          <div className="d-grid">
            <div className="d-flex justify-content-center align-items-center" style={{marginBottom:"5rem"}}>
              <div className="bg-white mb-4" style={{ width: "45%",marginTop:"5rem"}}>
                <p className="font-family d-flex align-items-center justify-content-center mt-3">
                  <strong>Enter Your Details</strong>
                </p>
                <div className="d-grid mb-4" style={{ width: "100%" }}>
                  <div className="d-flex justify-content-center align-items-center">
                    <input
                      className="my-1 mx-2 font-family"
                      style={{ padding: "5px", width: "80%" }}
                      placeholder="First Name"
                    ></input>
                  
                 
                    <input
                      className="my-1 font-family"
                      style={{ padding: "5px", width: "80%" }}
                      placeholder="Last Name"
                    ></input>
                  </div>
                  <div className="d-flex align-items-left">
                    <input
                      className="my-1 font-family"
                      style={{marginLeft:"9px",padding: "5px", width: "70%" }}
                      placeholder="Email Address"
                    ></input>
                  </div>
                  <div className="d-flex align-items-left">
                    <input
                      className="my-1 font-family"
                      style={{ marginLeft:"9px",padding: "5px", width: "70%" }}
                      placeholder="Username"
                    ></input>
                  </div>
                  <div className="d-flex align-items-left">
                    <input
                      className="my-1 font-family"
                      style={{ marginLeft:"9px",padding: "5px", width: "70%" }}
                      placeholder="Password"
                      type="password"
                    ></input>
                  </div>
                  <div className="d-flex align-items-left">
                    <input
                      className="my-1 font-family"
                      style={{ marginLeft:"9px",padding: "5px", width: "70%" }}
                      placeholder="Confirm Password"
                      type="password"
                    ></input>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      className="font-family mt-3"
                      variant="light"
                      style={{ width: "40%", height: "40px" }}
                    >
                      
                      <svg
                  className=" mx-1 icon-facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg><strong className='mx-2'>Facebook</strong>
                    </Button>
                    <Button
                      className="font-family mt-3"
                      variant="light"
                      style={{ width: "40%", height: "40px" }}
                    >
                        <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 10 48 48"
                  width="35px"
                  height="40px"
                  >
                  <path
                    fill="#03A9F4"
                    d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
                    />
                </svg>
                      <strong className='mx-1'>Twitter</strong>
                    </Button>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button
                      className="font-family mt-3"
                      variant="warning"
                      style={{ width: "80%", height: "40px" }}
                    >
                      <strong>Sign Up</strong>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
