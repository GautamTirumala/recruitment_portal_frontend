import React from "react";
import Tables from "./Table";
import TableWithRows from "./TableWithRows";
import Header from "../header";
import "./Home.css";
export default function Home() {
  return (
    <div className="home ">
      <div class="welcome">
        <p>
          Welcome @userName | <a href="#">FAQ</a> | <a href="#">LogOut</a>
        </p>
      </div>
      <Header />
      <div className="dashBoard">
        <p className="display-6 mx-4 my-3">Dashboard</p>
      </div>
      <div className="container d-flex ">
        <div className="jobs">
          <h3>Jobs</h3>
          <Tables
            header1="S.No"
            header2="Title"
            header3="Company"
            header4="Applications"
          />
        </div>
        <div className="submitted-candidates">
          <h3>Submitted-Candidates</h3>

          <TableWithRows />
        </div>
      </div>
    </div>
  );
}
