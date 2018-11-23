import React from 'react'

const Search = (props) => (
    <div>
        <input
            type="text"
            value={props.filterText}
            onChange={props.onFilterTextChangeHandler }
        />
        <div>
            <button
                onClick={props.onAllClickHandler }
            >
                All
            </button>
            <button
                onClick={props.onCompletedClickHandler }
            >
                Completed
            </button>
            <button
                onClick={props.onUnCompletedClickHandler}
            >
                Uncompleted
            </button>
        </div>
    </div>
)
export default Search