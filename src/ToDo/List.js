import React from 'react'
import Task from './Task'



const List = (props) => (
    <div>
        {
            props.taskList &&
            props.taskList.map &&
            props.taskList
            .filter(task => {
               switch(props.chosenFilter) {
                   case 'All':
                   return true
                   case 'Completed':
                   return task.isCompleted
                   case 'UnCompleted':
                   return !task.isCompleted
                   default:
                   return true
               }
            })
            .map(
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