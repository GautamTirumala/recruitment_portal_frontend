import React from 'react'
import Header from '../header'
import MessageTable from './MessagesTable'
import "./Messages.css"

function Messages() {
  return (
    <div className="home ">
      <div class="welcome ">
        <p>
          Welcome @userName | <a href="#">FAQ</a> | <a href="/">LogOut</a>
        </p>
      </div>
      <Header />
      
      <div className="dashBoard ">
        <p className="display-6 mx-4 my-3">Messages</p>
        <div>
          <label for="folder" className='folder'>Folder:</label>
          <select name="folder" classname="select-box"id="folder">
          <option classname="select-box" value="all">All</option>
          </select>
          <label for="Type" className='mx-2'>Message type:</label>
          <select name="type" id="type">
          <option value="all">All</option>          
          </select>
          <label for="state" className='mx-2' >State:</label>
          <select name="state" id="state">
            <option value="all">All</option>
          </select>
        </div>

        <MessageTable 
          header1="From"
          header2="Subject"
          header3="Type"
          header4="Dates"
        />
      </div>
    </div>
  )
}

export default Messages