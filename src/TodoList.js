import React from 'react'
import ThingTodo from './ThingTodo'

export default function TodoList({ doing,toggleFunction }) {
    return (
        <div>

            {
                doing.map(oneThing => {
                    if (!oneThing.completed) {
                        return <ThingTodo key={oneThing.name} toggleFunction={toggleFunction} thing={oneThing} />
                    } else {
                        return null
                    }

                })
            }
        </div>

    )
}
