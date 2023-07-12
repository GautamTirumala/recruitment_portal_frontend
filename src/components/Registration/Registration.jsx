import React from "react";
import "./Registration.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { red } from "@mui/material/colors";
export default function Register() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light flex">
        <div className="d-flex">
          <h6 class="heading">jobs</h6>
          <h6 class="heading">Submitted Candidates</h6>
        </div>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav flex">
            <li class="nav-item active">
              <a class="nav-link" href="/home">
                Home <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="">
                <AccountCircleIcon />
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="d-flex m-3">
        <h3 className="candidate">Candidates</h3>
        <h3>
          <ArrowRightIcon />
        </h3>
        <h3>Agency Candidates</h3>
      </div>
      <div class="d-flex  flex-wrap">
        <div className="p-3 upload ">
          <h5>
            Required<sup className="required">*</sup>
          </h5>
          <div className="upload-box">
            <form method="post">
              <input className="p-2 pr-5" type="file" />
              <button className="m-2">Upload</button>
            </form>
          </div>
        </div>

        <div className="profile-details">
          <h3 className="m-3">Candidate Information</h3>
          <form>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                FirstName<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="First name"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                LastName<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="Last name"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Email<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="@gmail.com"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Contact number<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Alternate Number
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="Alternate number"
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Years of experience<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Company<sup className="required">*</sup>
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="Company name"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row detail m-2">
              <label for="inputEmail3" class="col-sm-2 col-form-label">
                Title
              </label>
              <div class="col-sm-10">
                <input
                  type="email"
                  class="form-control w-75 input-box"
                  id="inputEmail3"
                  placeholder="Role"
                ></input>
              </div>
            </div>
            {/* <div class="form-group row detail m-2">
    <label for="inputPassword3" class="d-flex col-form-label">Current salary</label>
    <div class="col-sm-10">
      <input type="password" class="form-control w-75 input-box" id="inputPassword3" placeholder="Password" required></input>
    </div>
  </div> */}
            <div class="form-group row m-2 detail">
              <label
                for="inputPassword3"
                class="col-sm-2 d-flex col-form-label"
              >
                Current salary
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control w-75 input-box"
                  id="inputPassword3"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row m-2 detail">
              <label
                for="inputPassword3"
                class="col-sm-2 d-flex col-form-label"
              >
                Expected salary
              </label>
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control w-75 input-box"
                  id="inputPassword3"
                  required
                ></input>
              </div>
            </div>
            <div class="form-group row">
              <div>
                <button
                  type="submit"
                  class="btn btn-block btn-primary submit-btn w-100"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
