import React from 'react';
import HelloWorld from  './HelloWorld';
import Square from './Square';
import Box from './Box';
import Shape from './Shape';
import Greetings from './Greetings';

function App (props) {
  const style = {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: '20px'
  }

  return (
    <div style={style} className="App">
      <HelloWorld name="Jon Snow" />
      <HelloWorld isBye name="Cersei Lannister" />
      <HelloWorld name="Arya Stark" />
      <Square />
      <Square color="pink" />
      <Box />
      <Shape />
      <Shape type="circle" color="green" />
      <Shape type="diamond" color="aqua" />
      <Greetings names={["Patsy", "Tim", "Arthur", "Pod", "Kevin", "Scarlet"]} />
    </div>
  );
}

export default App;
