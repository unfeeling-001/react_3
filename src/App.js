import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Messages from "./components/Messages";
import { useState } from 'react';
function App() {

  const [todos, setTodos] = useState([
    {
      text: 'Html'
    },
    {
      text: 'Html'
    },
    {
      text: 'Html'
    }
  ])

const [text, setText] = useState('')
const [check, setCheck] = useState(true)



  function handleChange(e) {
    setText(e.target.value)
    
  }


  function handleBtn() {
    setTodos([
      ...todos,
      {
        text : text
    },
  ]);
  setText('')
  }
  
      return (
        
      <div className='container pt-5'>

          <div>
            <input type='checkbox' checked={check}/> 
            <input placeholder='Text' value={text} onChange={(e) => handleChange(e)}/> 
            <button onClick={handleBtn}>add</button>
          </div>

          {todos.map((item, index) => {
           return (
          <div key={index}>
            {item.text}
          </div>
            );
          })}
     </div>
      
      );


}



export default App;
