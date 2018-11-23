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
                    />
                )
            )
        }
    </div>
)
export default List