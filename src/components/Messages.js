import { useState } from "react";

function Messages() {

    const [messages,setMessage] = useState([
      {
      id : 1,
      text :   "Hello",
      author : "Rizvan",
      side :   "left"
      },
      {
      id : 2,
      text :   "Hello",
      author : "You",
      side :   "right"
      },
      {
      id : 3,
      text :   "How are yo?",
      author : "Rizvan",
      side :   "left"
      },
      {
      id : 4,
      text :   "Im fine, and you?",
      author : "You",
      side :   "right"
      },
    ])

    function deleteMessage(id) {
      setMessage(
        messages.filter(item => {
        if (item.id == id){
         return false
       }
       return true
     }))
    }

return(
     messages.map(item => {
        return(
        <div key={item.id} className={`row ${item.side === 'left' ? '' : 'justify-content-end'}`}>
          <div className='col-3 '>
            <div className={item.side}>
              <p>{item.text}</p>
             <span>{item.author}</span>
            </div>
            <button className="btn btn-danger mt 2" onClick={() => deleteMessage(item.id)}>X</button>
          </div>
        </div>
        )
      }))
}
export default Messages;