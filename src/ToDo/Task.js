import React from 'react'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton'
import DeleteIcon from 'material-ui/svg-icons/action/delete'


const completedStyle = {
    textDecoration: 'line-through'
}




const Task = (props) => (
    <ListItem
        onClick={() => props.completeTask(props.task.key)}
        style={props.task.isCompleted ? completedStyle : {}}
        primaryText={props.task.taskText}
        rightIconButton={

            <IconButton>
                <DeleteIcon
                    onClick={() => props.deleteTask(props.task.key)}
                />
            </IconButton>
        }
    >
    </ListItem >
)


export default Task