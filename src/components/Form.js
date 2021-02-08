// import React, { Component } from 'react'

/* 
class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            snapsto: '',
            message: '',
            isSubmitted: ''
        }
    }

    handleSnapsToChange = (event) => {
        this.setState({
            snapsto: event.target.value
        })
    }

    handleMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    handleSubmit = (event) => {
        this.setState({
            snapsto: `${this.state.snapsto}`,
            message: `${this.state.message}`,
            isSubmitted: true
        })
        event.preventDefault()
    }


    render() {
        let submitted = this.state.isSubmitted;
        let snapto;
        let msg;
        if (submitted) {
            snapto = `${this.state.snapsto}`
            msg = `${this.state.message}` 
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        snaps to
                            <input
                                name="to"
                                type="text"
                                value={this.state.snapsto}
                                onChange={this.handleSnapsToChange}
                            />
                    </label>
                    <label>
                        message
                            <textarea
                                type="message"
                                name="message"
                                value={this.state.message}
                                onChange={this.handleMessageChange}
                            ></textarea>
                    </label>
                    <button>Submit</button>
                </form>
                <p>
                    {submitted ? <p1>Snaps to {snapto} for {msg} </p1> : null
                    }
                </p>
            </div>
        );
    }
}
*/

// export default Form