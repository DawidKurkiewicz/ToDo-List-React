import React from 'react'
import AddTask from './AddTask'
import List from './List'
import Search from './Search'
import Paper from 'material-ui/Paper'

const style = {
    paper: {
        margin: 12,
        padding: 12
    }
}


class ToDo extends React.Component {
    state = (
        JSON.parse(localStorage.getItem('to-do-list-state')) ||
        {
            tasks: [],
            filterText: '',
            chosenFilter: 'All',
            newTaskText: ''
        }
    )
    componentDidUpdate() {
        this.saveInLocalStorage()
    }

    saveInLocalStorage = () => localStorage.setItem(
        'to-do-list-state',
        JSON.stringify(this.state)
    )


    createTask = text => ({
        taskText: text,
        isCompleted: false,
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
                        isCompleted: true
                    }
                    :
                    task
            )
        )
    })

    onAllClickHandler = () => this.setState({ chosenFilter: 'All' })
    onCompletedClickHandler = () => this.setState({ chosenFilter: 'Completed' })
    onUnCompletedClickHandler = () => this.setState({ chosenFilter: 'UnCompleted' })

    onFilterTextChangeHandler = event => this.setState({ filterText: event.target.value })
    onNewTaskTextChangeHandler = event => this.setState({ newTaskText: event.target.value })


    render() {
        return (
            <Paper
            style={style.paper}>
                <AddTask
                    newTaskText={this.state.newTaskText}
                    onNewTaskTextChangeHandler={this.onNewTaskTextChangeHandler}
                    addTask={this.addTask}
                />
                <Search
                    filterText={this.state.filterText}
                    onFilterTextChangeHandler={this.onFilterTextChangeHandler}
                    onAllClickHandler={this.onAllClickHandler}
                    onCompletedClickHandler={this.onCompletedClickHandler}
                    onUnCompletedClickHandler={this.onUnCompletedClickHandler}
                    chosenFilter={this.state.chosenFilter}
                />
                <List
                    filterText={this.state.filterText}
                    chosenFilter={this.state.chosenFilter}
                    taskList={this.state.tasks}
                    completeTask={this.completeTask}
                    deleteTask={this.deleteTask}
                />
            </Paper>
        )

    }
}

export default ToDo