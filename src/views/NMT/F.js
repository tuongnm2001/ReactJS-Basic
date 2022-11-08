import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class F extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        let id = this.props.match.params.id
        let trent = await axios.get(`https://reqres.in/api/users/${id}`)

        this.setState({
            user: trent && trent.data && trent.data.data ? trent.data.data : {}
        })
        console.log('check id : ', trent)
        console.log('check user : ', this.state.user)
    }

    render() {
        let { user } = this.state
        let checkEmpty = Object.keys(user).length === 0;
        return (
            <>
                {checkEmpty === false &&
                    <div>
                        <div>Username/LastName : {user.first_name} - {user.last_name}</div>
                        <div>Email {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                    </div>
                }
            </>
        )
    }
}
export default withRouter(F);