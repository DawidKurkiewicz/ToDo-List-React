import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField';




const style = {
    button: {
        margin: 12
    }
}
const Search = (props) => (
    <div>
        <TextField
            type="text"
            value={props.filterText}
            onChange={props.onFilterTextChangeHandler}
            floatingLabelText="filter task"
            fullWidth={true}
        />
        <div>
            <RaisedButton
                disabled={props.chosenFilter === 'All'}
                onClick={props.onAllClickHandler}
                label='All'
                style={style.button}
                fullWidth={true}
                primary={true}


            />
            <RaisedButton
                disabled={props.chosenFilter === 'Completed'}
                onClick={props.onCompletedClickHandler}
                label="Completed"
                style={style.button}
                fullWidth={true}
                primary={true}



            />
            <RaisedButton
                disabled={props.chosenFilter === 'UnCompleted'}
                onClick={props.onUnCompletedClickHandler}
                label="UnCompleted"
                style={style.button}
                fullWidth={true}
                primary={true}



            />
        </div>
    </div>
)
export default Search