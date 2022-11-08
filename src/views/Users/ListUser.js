import React from "react";
import axios from "axios";
import './ListUser.scss'
import { withRouter } from 'react-router-dom'
class ListUsers extends React.Component {

    state = {
        listUsers: []
    }

    //Run second
    async componentDidMount() {

        let res = await axios.get('https://reqres.in/api/users?page=2')
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
        console.log('check res : ', res.data.data)
    }

    hadleViewDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }

    //Run first
    render() {
        let { listUsers } = this.state
        return (
            <div className="list-user-container">
                <div className="titile">
                    Fetch all list user
                </div>

                <div className="list-user-content">
                    {listUsers && listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                            return (
                                <div className="child" key={item.id} onClick={() => this.hadleViewDetailUser(item)}>
                                    {index + 1} - {item.first_name} - {item.last_name}
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        )
    }
}
export default withRouter(ListUsers);