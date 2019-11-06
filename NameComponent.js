import React from 'react';

//import NameComponent from './'

class NameComponent extends component {

  componentDidMount() {
    console.log('mounted')
  }
}
render() {

 let word = 'Hello';
 let style = {fontSize '20px'};

  return (
    <div>
      <p style={style} className="text-large">Hi</p>
      <img src="none.jpg"/>
      <div>
        <p>(word)</p>
    </div>
   </div>
  );
}

export default App;
