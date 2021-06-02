import React from 'react'
import './App.css';

export default function ThingTodo({ thing, toggleFunction }) {
    function handleClickChange() {
        toggleFunction(thing.name)

    }
    return (
        <div class="container bg-success p-5 mb-3 TaskColor text-white" data-toggle="tooltip" data-placement="top" title="Tooltip on top" onClick={handleClickChange}>
            <div class="row display-1 text-center">
                <label class="form-check-label" for="defaultCheck1">
                    {thing.name}
                </label>
            </div>
        </div>
    )
}
