import React from "react";
import B from "./B";
import C from "./C";
import axios from "axios";
import { withRouter } from "react-router-dom";
class A extends React.Component {

    state = {
        liver: [
            { id: '66', name: 'Trent', age: ' 23', nationality: 'England' },
            { id: '14', name: 'Hendo', age: ' 32', nationality: 'England' },
            { id: '19', name: 'Elliot', age: ' 19', nationality: 'England' },
        ],
        list: []
    }

    handleAdd = (liv) => {
        this.setState({
            liver: [...this.state.liver, liv]
        })
    }

    handleDelete = (a) => {
        let current = this.state.liver
        current = current.filter(item => item.id !== a.id)
        this.setState({
            liver: current
        })
    }

    async componentDidMount() {
        let reponse = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            list: reponse && reponse.data && reponse.data.data ? reponse.data.data : []
        })
    }

    handleCLickDetail = (user) => {
        this.props.history.push(`a/${user.id}`)
    }

    render() {
        let { list } = this.state
        console.log('check state: ', this.state)
        return (
            <>
                <B liver={this.state.liver} handleDelete={this.handleDelete} />
                <br />
                <C handleAdd={this.handleAdd} />

                {list && list.length > 0 &&
                    list.map((item, index) => {
                        return (
                            <div onClick={() => this.handleCLickDetail(item)}>
                                {index + 1}- {item.first_name} - {item.last_name}
                            </div>
                        )
                    })
                }
            </>
        )
    }
}

export default withRouter(A);