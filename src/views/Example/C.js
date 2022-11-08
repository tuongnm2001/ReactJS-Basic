import React from "react";

class C extends React.Component {

    state = {
        name: '',
        age: '',
        nationality: ''
    }

    handleName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleNationality = (event) => {
        this.setState({
            nationality: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.name || !this.state.age || !this.state.nationality) {
            alert('Missing requied param')
            return;
        }
        this.props.handleAdd({
            id: Math.floor(Math.random() * 1001),
            name: this.state.name,
            age: this.state.age,
            nationality: this.state.nationality
        })
        this.setState({
            name: '',
            age: '',
            nationality: ''
        })
    }
    render() {
        console.log('check props from A : ', this.props)
        return (
            <>
                <form>
                    <label>Name</label><br />
                    <input type='text' value={this.state.name} onChange={(event) => this.handleName(event)}></input><br />
                    <label>Age</label><br />
                    <input type='text' value={this.state.age} onChange={(event) => this.handleAge(event)}></input><br />
                    <label>Nationality</label><br />
                    <input type='text' value={this.state.nationality} onChange={(event) => this.handleNationality(event)}></input><br />
                    <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
                </form>

            </>
        )
    }
}
export default C;
