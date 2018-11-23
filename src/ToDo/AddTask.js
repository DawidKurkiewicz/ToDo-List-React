import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'

const style = {
    button: {
        margin: 12
    }
}

const AddTask = (props) => (
    <div>
        <input
            type="text"
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
        />
        <RaisedButton
            onClick={props.addTask}
            style={style.button}
            label="add task!"
        />
    </div>
)
export default AddTask