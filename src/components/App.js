/**
 * Created by KAlahmad on 24.02.2017.
 */
import React from 'react';
import  {PropTypes} from 'react';
import Header from './common/Header';


class App extends React.Component {
  render(){
    return (
      <div className="container-fluid">
        <Header/>
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
