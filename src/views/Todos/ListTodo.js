import React from "react";
import './ListTodo.scss'
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Doing homework' },
            { id: 'todo2', title: 'Making videos' },
            { id: 'todo3', title: 'Fixing bugs' }
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add success!");
    }

    handleDeleteTodo = (todo) => {
        let current = this.state.listTodos
        current = current.filter(item => item.id !== todo.id)
        this.setState({
            listTodos: current
        })
        toast.error(`Delete success!`);
    }

    handleEditTodo = (todo) => {

        console.log('check edit : ', todo)

        let { editTodo, listTodos } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;

        //Save
        if (isEmptyObj === false && editTodo.id == todo.id) {

            let listTodoCopy = [...listTodos];

            let objIndex = listTodoCopy.findIndex((item => item.id === todo.id))

            listTodoCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodoCopy,
                editTodo: {}
            })

            toast.success("Update todo success!");
            return;
        }
        //Edit
        this.setState({
            editTodo: todo
        })

    }

    handleOnchangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo }
        editTodoCopy.title = event.target.value
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {

        let { listTodos, editTodo } = this.state
        let isEmptyObj = Object.keys(editTodo).length === 0;
        console.log('>>> check empty object : ', isEmptyObj)
        return (
            <>
                <p>
                    Simple TODO Apps with React.JS NMT
                </p>

                <div className="list-todo-container">
                    <AddTodo addNewTodo={this.addNewTodo} />
                    <div className='list-todo-content'>
                        {
                            listTodos && listTodos.length > 0 &&
                            listTodos.map((item, index) => {
                                return (
                                    <div className="todo-child" key={item.id}>
                                        {isEmptyObj === true ?
                                            <span> {index + 1} - {item.title}</span>
                                            :
                                            <>
                                                {editTodo.id === item.id ?
                                                    <span>
                                                        {index + 1} - <input value={editTodo.title} onChange={(event) => this.handleOnchangeEditTodo(event)} />
                                                    </span>
                                                    :
                                                    <span>
                                                        {index + 1} - {item.title}
                                                    </span>
                                                }

                                            </>
                                        }
                                        <button className="edit" onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id == item.id ? 'Save' : 'Edit'
                                            }
                                        </button>

                                        <button className="delete" onClick={() => this.handleDeleteTodo(item)}>Delete</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </>
        )
    }
}

export default ListTodo;
