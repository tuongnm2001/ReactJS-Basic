import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
class E extends React.Component {
    state = {
        listPeple: []
    }

    async componentDidMount() {
        let tuong = await axios.get(`https://reqres.in/api/users?page=1`)
        this.setState({
            listPeple: tuong && tuong.data && tuong.data.data ? tuong.data.data : []

        })
        console.log('>> check tuong : ', tuong)
    }

    handleDetail = (user) => {
        this.props.history.push(`/e/${user.id}`)
    }

    render() {
        let { listPeple } = this.state
        return (
            <div>
                {listPeple && listPeple.length > 0 &&
                    listPeple.map((item, index) => {
                        return (
                            <div onClick={() => this.handleDetail(item)} key={item.id}>
                                {index + 1}-{item.first_name} - {item.last_name}
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default withRouter(E);