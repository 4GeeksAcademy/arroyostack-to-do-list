import React from 'react'
import { SingleTaskComponent } from './SingleTaskComponent.jsx'

export const TaskBoardComponent = ({ tasks, onDelete }) => {

    return (
        <div className="card" style={{ width: "18rem" }}>
            <ul className="list-group">
                {tasks.map((task, i) => (
                    <SingleTaskComponent key={i} task={task} onDelete={onDelete} />
                ))}
                <li className="list-group-item tasks-left">{tasks.length} tasks left</li>

            </ul>



        </div>
    )
}
