import React from "react";
import AddTodo1 from "./AddTodo1";
import './test.scss'
import { toast } from 'react-toastify';
class ListTodo1 extends React.Component {

    state = {
        Home: [
            { ida: '1', name: 'NVA' },
            { ida: '2', name: 'NVB' },
            { ida: '3', name: 'NVC' },
            { ida: '4', name: 'NVD' },
        ],
        editTodo1: {}
    }

    add = (todo) => {
        this.setState({
            Home: [...this.state.Home, todo],
        })
        toast.success("Add success!");
    }

    delete = (todo) => {
        let current = this.state.Home
        current = current.filter(item => item.ida !== todo.ida)
        this.setState({
            Home: current
        })
        toast.error(`Delete success!`);
    }

    handleEditTodo1 = (todo) => {

        let { editTodo1, Home } = this.state
        let isEmpty1 = Object.keys(editTodo1).length === 0;

        //Save
        if (isEmpty1 === false && editTodo1.ida === todo.ida) {

            let HomeCopy = [...Home];

            let objIndex1 = HomeCopy.findIndex(item => item.ida === todo.ida);

            HomeCopy[objIndex1].name = editTodo1.name

            this.setState({
                Home: HomeCopy,
                editTodo1: {}
            })
            toast.success("Update todo success!");
            return;
        }

        //Edit
        this.setState({
            editTodo1: todo
        })
    }

    handleOnChange = (event) => {
        let editCopy = { ...this.state.editTodo1 }
        editCopy.name = event.target.value
        this.setState({
            editTodo1: editCopy
        })
    }

    render() {
        let { Home, editTodo1 } = this.state
        let isEmpty1 = Object.keys(editTodo1).length === 0;

        console.log('>> check empty obj : ', isEmpty1)
        return (
            <div className="list-todo-container">
                <AddTodo1 add={this.add} />
                <div className='list-todo-content'>
                    {
                        Home && Home.length > 0 &&
                        Home.map((item, index) => {
                            return (
                                <div key={item.ida}>
                                    {isEmpty1 === true ?
                                        <span>
                                            {index + 1} - {item.name} <span className="x1" onClick={() => this.delete(item)}>x</span> &nbsp;
                                        </span>
                                        :
                                        <>
                                            {editTodo1.ida === item.ida ?
                                                <span>
                                                    <input value={editTodo1.name} onChange={(event) => this.handleOnChange(event)} />
                                                </span>
                                                :
                                                <span>
                                                    {index + 1} - {item.name}
                                                </span>
                                            }
                                        </>
                                    }
                                    <button onClick={() => this.handleEditTodo1(item)}>
                                        {isEmpty1 === false && editTodo1.ida === item.ida ? 'Save' : 'Edit'}
                                    </button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListTodo1;