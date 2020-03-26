import React, { Component }  from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import MessageBox from './components/MessageBox';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { Provider } from 'react-redux'
import store from './redux/store'

class App extends Component {
  render(){
  	return(
      <Provider store={store.configureStore()}>
        <MessageBox />
      </Provider>
  	)
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
