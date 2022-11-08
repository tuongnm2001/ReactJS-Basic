import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
class DetailA extends React.Component {

    state = {
        user: {}
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let response = await axios.get(`https://reqres.in/api/users/${id}`)

            this.setState({
                user: response && response.data && response.data.data ? response.data.data : {}
            })
        }

    }


    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0;
        console.log('>> check props : ', this.props.match.params.id)
        console.log('>> check users : ', this.state.user)
        return (
            <>
                {isEmptyObj === false &&
                    <>
                        <div>Hello DetailA ID : {this.props.match.params.id}</div>
                        <div>Username : {user.first_name} -  {user.last_name}</div>
                        <div>Email : {user.email}</div>
                        <div>
                            <img src={user.avatar} />
                        </div>
                    </>
                }
            </>
        )
    }
}

export default withRouter(DetailA)