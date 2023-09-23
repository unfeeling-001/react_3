import { useState } from "react";

function ToDoForm({addTask}) {
    
    const [text,setText] = useState("")

    const handlerChange = (e) =>{
        setText(e.currentTarget.value)
    }

    const handlerSubmit = (e) =>{
        e.preventDefault()
        addTask(text)
        setText('')
    }

    const handlerPress = (e) =>{
        if(e.key === 'Enter'){
            handlerSubmit(e)
        }
    }

    return(
            <form className="form" onClick={handlerSubmit}>
                <input
                value={text}
                type="text"
                onKeyDown={handlerPress}
                onChange={handlerChange}
                placeholder="Add Task..."
                />
                <button>+</button>
            </form>
    )

}

export default ToDoForm