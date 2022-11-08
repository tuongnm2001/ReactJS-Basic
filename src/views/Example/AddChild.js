import React from "react";

class AddChild extends React.Component {

    state = {
        name: '',
        age: '',
        nationality: ''

    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeAge = (event) => {
        this.setState({
            age: event.target.value
        })
    }

    handleChangeNationality = (event) => {
        this.setState({
            nationality: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        if (!this.state.name || !this.state.age || !this.state.nationality) {
            alert('Missing riquired params')
            return;
        }
        this.props.addNewInfor({
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

        return (
            <form>
                <label>Name</label><br />
                <input type='text' value={this.state.name} onChange={(event) => this.handleChangeName(event)}></input><br />
                <label>Age</label><br />
                <input type='text' value={this.state.age} onChange={(event) => this.handleChangeAge(event)}></input><br />
                <label>Nationality</label><br />
                <input type='text' value={this.state.nationality} onChange={(event) => this.handleChangeNationality(event)}></input> <br />
                <button onClick={(event) => this.handleSubmit(event)}>Submit</button>
            </form>
        )
    }
}

export default AddChild;