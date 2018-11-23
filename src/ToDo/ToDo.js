import React from 'react'
import AddTask from './AddTask'

class ToDo extends React.Component {
    state = {
        tasks: [],
        filterText: '',
        chosenFilter: 'All',
        newTaskText: ''
    }

    createTask = text => ({
        taskText: text,
        isComplited: false,
        key: Date.now()
    })


    addTask = () => this.setState({
        tasks: this.state.tasks.concat(
            this.createTask(
                this.state.newTaskText
            )
        ),
        newTaskText: ''
    })

    deleteTask = taskKey => this.setState({
        tasks: this.state.tasks.filter(
            task => task.key !== taskKey
        )
    })

    completeTask = taskKey => this.setState({
        tasks: this.state.tasks.map(
            task => (
                (task.key === taskKey) ?
                    {
                        ...task,
                        isComplited: true
                    }
                    :
                    task
            )
        )
    })

    onAllClickHandler = () => this.setState({ chosenFilter: 'All' })
    onCompletedClickHandler = () => this.setState({ chosenFilter: 'All' })
    onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'All' })

    onFilterTextChangeHandler = event => this.setSTate({ filterText: event.target.value })
    onNewTaskTextChangeHandler = event => this.setState({ newTaskText: event.target.value })


    render() {
        return (
            <div>
                <AddTask
                newTaskText={this.state.newTaskText}
                onNewTaskTextChangeHandler={this.onNewTaskTextChangeHandler}
                addTask = {this.addTask}
                />
            </div>
        )

    }
}

export default ToDo