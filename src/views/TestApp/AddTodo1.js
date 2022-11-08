import React from "react";
import { toast } from 'react-toastify';
class AddTodo1 extends React.Component {

    state = {
        name: ''
    }

    handleOnchange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleClick = () => {
        if (!this.state.name) {
            toast.error(`Missing title's Todo!`);
            return;
        }
        let todo = {
            ida: Math.floor(Math.random() * 10000),
            name: this.state.name
        }
        this.props.add(todo);
        this.setState({
            name: ''
        })
    }

    render() {
        let { name } = this.state
        console.log('check props : ', this.props)
        return (
            <>
                <input type='text' value={name} onChange={(event) => this.handleOnchange(event)} />
                <button onClick={() => this.handleClick()}>Add</button>
            </>
        )
    }
}

export default AddTodo1;