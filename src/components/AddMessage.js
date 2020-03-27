import React, { Component } from 'react'
import { APIManager } from '../utils'
import { connect } from 'react-redux'
import actions from '../redux/actions'

class AddMessage extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: '',
      messageBody: ''
    }

    this.inputUpdate = this.inputUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  inputUpdate(event){
    const target = event.target
    const name = target.name
    const value = target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    APIManager.post('https://mymessagebo-backend.herokuapp.com/api/message', this.state, (err, response) => {
      if (err) {
        const msg = err.message || err
        alert(msg)
        return
      }

      console.log('componentDidMount: '+JSON.stringify(response))
      var result = response.result
      this.props.messageCreated(result)
    })
  }

  render(){
  	return(
      <form onSubmit={this.handleSubmit}>
       <div className="form-group">
         <label className="control-label">User: </label>
         <input 
           className="form-control"
           type="text"
           name="user"
           value={this.state.user}
           onChange={this.inputUpdate}
         />
       </div>

       <div className="form-group">
         <label className="control-label">Message Body: </label>
         <input 
           className="form-control"
           type="text"
           name="messageBody"
           value={this.state.messageBody}
           onChange={this.inputUpdate}
         />
       </div>


       <input value="SUBMIT" type="submit" className="offset-2 text-right"/>
      </form>
  	)
  }
}

const stateToProps = (state) => {
  return {
    messages: state.message.list
  }
}

const dispatchToProps = (dispatch) => {
  return{
    messageCreated: (message) => dispatch(actions.messageCreated(message))
  }
}

export default connect(stateToProps, dispatchToProps)(AddMessage)