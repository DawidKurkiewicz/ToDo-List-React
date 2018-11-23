import React from 'react'
import Task from './Task'



const List = (props) => (
    <div>
        {
            props.taskList &&
            props.taskList.map &&
            props.taskList.map(
                task => (
                    <Task
                        key={task.key}
                        task={task}
                        completeTask={props.completeTask}
                        deleteTask={props.deleteTask}
                    />
                )
            )
        }
    </div>
)
export default List