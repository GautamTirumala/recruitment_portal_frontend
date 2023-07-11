import React from "react";
import Header from "../header";
import Tables from "./Table";
export default function Jobs() {
  return (
    <div className="home ">
      <div class="welcome">
        <p>
          Welcome @userName | <a href="#">FAQ</a> | <a href="#">LogOut</a>
        </p>
      </div>
      <Header />
      <div className="dashBoard sizing">
        <p className="display-6 mx-4 my-3">Jobs</p>

        <Tables
          header1="Title"
          header2="Company"
          header3="Dates"
          header4="Candidates"
        />
      </div>
    </div>
  );
}
