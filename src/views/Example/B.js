import React from "react";

class B extends React.Component {

    state = {
        showLiver: false
    }

    handleShowHide = (event) => {
        this.setState({
            showLiver: !this.state.showLiver
        })
    }

    handleDel = (job) => {
        this.props.handleDelete(job);
    }

    render() {

        let { showLiver } = this.state

        console.log('check props from A : ', this.props)
        return (
            <>
                {
                    showLiver === false &&
                    <div>
                        <button onClick={(event) => { this.handleShowHide(event) }}>Show</button>
                    </div>
                }

                {
                    showLiver &&
                    <>
                        <div>
                            {
                                this.props.liver.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.name} - {item.age} - {item.nationality} <span onClick={() => this.handleDel(item)}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={(event) => this.handleShowHide(event)}>Hide</button>
                        </div>
                    </>
                }




            </>
        )
    }
}

export default B;