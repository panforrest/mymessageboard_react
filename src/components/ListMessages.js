import React, { Component } from 'react'

class ListMessages extends Component {
  render(){
  	return(
      <ul className="group-list">
        <li>Alice: What do we do for VIDEO: 1.1?</li>
        <li>Bob: Video 1.1 is for React App: First commit with UI</li>
        <li>Charles: Anything for code sharing in Video 1.1?</li>
        <li>Forrest: Folder structure and UI</li>
      </ul>
  	)
  }
}

export default ListMessages