import React from 'react'

class Cell extends React.Component {

    constructor(props) {
        super()
        this.state = {
            color: props.value
        }
    }

    handleClick = () => {
        this.setState({
            color: '#333'
        })
    }

    render() {
        return(
            <div style={{backgroundColor: this.state.color}} className="cell" onClick={this.handleClick}></div>
        )
    }
}

export default Cell