import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'



const style = {
    button: {
        margin: 12
    }
}
const Search = (props) => (
    <div>
        <input
            type="text"
            value={props.filterText}
            onChange={props.onFilterTextChangeHandler}
            placeholder="filter task"
        />
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'All'}
                onClick={props.onAllClickHandler}
                label='All'
                style={style.button}
            />
            <RaisedButton
                disabled={props.chosenFilter === 'Completed'}
                onClick={props.onCompletedClickHandler}
                label="Completed"
                style={style.button}

            />
            <RaisedButton
                disabled={props.chosenFilter === 'UnCompleted'}
                onClick={props.onUnCompletedClickHandler}
                label="UnCompleted"
                style={style.button}

            />
        </div>
    </div>
)
export default Search