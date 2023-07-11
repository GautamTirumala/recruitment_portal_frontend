// import React from 'react'
// import Home from './Dashboard components/Home'
// import Jobs from './Dashboard components/Jobs'
// import Messages from './Dashboard components/Messages'
// import Submitted_Candidates from './Dashboard components/Submitted_Candidates'


export default function Header() {
  
    return (
        <div className='header'>
        <nav className="navbar navbar-expand-lg bg-*">
          <div className="container-fluid">
            <a className="navbar-brand" to="/">Connect to great opportunities</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav flex">
           
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="/home">Home</a>
                </li>
                <li class="nav-item">   
                <a class="nav-link" href="/messages">Messages</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/jobs">Jobs</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="/submitted_candidates">Submitted Candidates</a>
                </li>

              </ul>
            </div>
          </div>
        </nav>
      </div>
    )
  }
