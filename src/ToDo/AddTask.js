import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';


const style = {
    button: {
        margin: 12
    }
}

const AddTask = (props) => (
    <div>
        <TextField
            type="text"
            value={props.newTaskText}
            onChange={props.onNewTaskTextChangeHandler}
            floatingLabelText="add your task here"
            fullWidth={true}

        />
        <RaisedButton
            onClick={props.addTask}
            style={style.button}
            label="add task!"
            fullWidth={true}
            primary={true}


        />
    </div>
)
export default AddTask