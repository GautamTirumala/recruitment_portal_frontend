import React from "react";
export default function MainPageNavbar(){
    return(
        <div className='header'>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">Company Name</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav flex">

               
                <li class="nav-item">
                <a class="nav-link" href="/register">Sign Up</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
}