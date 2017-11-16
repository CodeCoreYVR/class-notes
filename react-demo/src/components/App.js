import React from 'react';
import HelloWorld from  './HelloWorld';
import Square from './Square';
import Box from './Box';
import Shape from './Shape';
import Greetings from './Greetings';
import TaskList from './TaskList';
import Search from './Search';
import Timer from './Timer';

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
      <Timer />
      <Search names={[
        'Jon Snow', 'Cersei', 'Daenerys', 'Arya', 'Tommen', 'Varis', 'Tyrion', 'Jorah'
      ]} />
      <TaskList />
      <Square />
      <Square color="pink" />
      <Box />
      <Shape />
      <Shape type="circle" color="green" />
      <Shape type="diamond" colors={['blue', 'red']} />
      <Greetings names={["Patsy", "Tim", "Arthur", "Pod", "Kevin", "Scarlet"]} />
    </div>
  );
}

export default App;
