import { useState } from 'react';
import './App.css';
import List from "./List"


function App() {
  const [currentItems, setCurrentItems] = useState("");
  const [itemList, updateItemList] = useState([]);
  const onChangeHandler = (e) =>{
    setCurrentItems(e.target.value);
  };
  const addItemtoList= () => {
    updateItemList([...itemList,{item: currentItems, key: Date.now()}]);
    setCurrentItems("")
  }
  return (
    <div className="App">
      <header className="App-header">
      <div className="wrapper">
        <div className="input-wrapper">
          <input type="text" value={currentItems} onChange={onChangeHandler}/>
          <button onClick={addItemtoList}>+</button>
        </div>
      <List itemList = {itemList} updateItemList = {updateItemList}/>
      </div>
      </header>
    </div>
  );
}

export default App;
