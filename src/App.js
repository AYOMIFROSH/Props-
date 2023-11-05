import React from 'react';
import PlayersList from './component/playersList';
import "./App.css";
import Switch from './switch';
import Drones from './html';


function App() {
  return (
    <div className="App">
      <Switch />
      <PlayersList />
      <Drones/>
    </div>
  );
}

export default App;
