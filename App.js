
import { useState } from 'react';
import './App.css';
import TodoList from './TodoList';

 
const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvents = (e) => {
    setInputList(e.target.value);
  };

  const ListOfItem = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList("");
  };
  const deleteItems = (id) =>{
    console.log("deleted");
    setItems((oldItems) => {
      return oldItems.filter((arrayEle, index) => {
        return index !== id;
      })
    })
};

  return (
  <>
  <div className='main'>
    <div className='center'>
      <br />
      <h1>Todo List</h1>
      <br />
      <input type="text" placeholder="Add a Todo" value={inputList} onChange={itemEvents}/>
      <button className='btn' onClick={ListOfItem}>Add New</button>
      <ol>
        {/* <li>{inputList}</li> */}
        {items.map( (itemsvalue, index) => {
         return <TodoList key={index} id={index} onSelect={deleteItems} text={itemsvalue} />;
        } )}
      </ol>
    </div>
  </div>
  </>);
}

export default App;
