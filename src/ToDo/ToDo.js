import React from 'react'

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
        )
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

    onFilterTextChangeHandler = event => ({ filterText: event.target.value })
    onNewTaskTextChangeHandler = event => ({ newTaskText: event.target.value })


    render() {
        return (
            <div>
                todo
        </div>
        )

    }
}

export default ToDo