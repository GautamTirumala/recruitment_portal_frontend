import React from 'react'
import Tables from './Table'
import Header from '../header'
import "./Submitted_Candidates.css"

function Submitted_candidates() {
  return (
    <div className="home ">
      <div class="welcome ">
        <p>
          Welcome @userName | <a href="#">FAQ</a> | <a href="/">LogOut</a>
        </p>
      </div>
      <Header />
      <div className="dashBoard ">
        <p className="display-6 mx-4 my-3">Submitted Candidates</p>
        <div>
          <label for="folder" className='folder'>Candidates:</label>
          <select name="folder" classname="select-box"id="folder">
          <option classname="select-box" value="all">All</option>
          </select>
          <label for="Tpye" className='mx-2'>Jobs:</label>
          <select name="type" id="type">
          <option value="all">All</option>          
          </select>
        </div>

        <Tables 
          header1="From"
          header2="Subject"
          header3="Type"
          header4="Dates"
        />
      </div>
    </div>
  )
}

export default Submitted_candidates