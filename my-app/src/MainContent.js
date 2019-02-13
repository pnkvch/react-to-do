import React from "react"

function MainContent(props) {
    return(
        <div>
            <input type="checkbox" />
            <label>
                {props.punchline}
                {props.question}
            </label>
        </div>
    )
}

export default MainContent