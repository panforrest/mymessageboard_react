import React, { Component } from 'react'

class AddMessage extends Component {
  render(){
  	return(
      <form>
       <div className="form-group">
         <label className="control-label">User: </label>
         <input 
           className="form-control"
           type="text"
           name="user"
         />
       </div>

       <div className="form-group">
         <label className="control-label">Message Body: </label>
         <input 
           className="form-control"
           type="text"
           name="messageBody"
         />
       </div>


       <input value="SUBMIT" type="submit"/>
      </form>
  	)
  }
}

export default AddMessage