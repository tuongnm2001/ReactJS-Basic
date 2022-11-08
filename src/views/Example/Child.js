import React from "react";

class Child extends React.Component {

    state = {
        infor: false
    }

    hanldeShowHide = () => {
        this.setState({
            infor: !this.state.infor
        })
    }
    render() {

        let { infor } = this.state
        let { liver } = this.props
        let tuong = infor === true ? 'infor = true' : 'infor = false'

        return (
            <>
                {
                    infor === false ? <div>
                        <button onClick={() => this.hanldeShowHide()}>Show</button>
                    </div>

                        :
                        <>
                            <div>
                                {
                                    liver.map((item, index) => {
                                        return (
                                            <div key={item.name}>
                                                {item.name} - {item.age} - {item.nationality}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                            <div>
                                {
                                    <button onClick={() => this.hanldeShowHide()}>Hide</button>
                                }
                            </div>
                        </>
                }
            </>
        )
    }
}

export default Child;