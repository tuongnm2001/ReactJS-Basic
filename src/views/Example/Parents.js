import React from "react";
import AddChild from "./AddChild";
import Child from "./Child";

class Parents extends React.Component {

    state = {
        liver: [
            { name: 'Trent', age: '23', nationality: ' England' },
            { name: 'Luis Diaz', age: '25', nationality: ' Colonbia' },
            { name: 'Bobby', age: '31', nationality: ' Brazil' }

        ]
    }

    addNewInfor = (job) => {
        this.setState({
            liver: [...this.state.liver, job]
        })
    }

    render() {
        return (
            <>
                <AddChild addNewInfor={this.addNewInfor} />
                <Child liver={this.state.liver} />
            </>
        )
    }
}
export default Parents;