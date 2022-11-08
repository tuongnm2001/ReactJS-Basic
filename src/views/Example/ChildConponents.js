import React from "react";
import './Demo.scss'

class ChildComponents extends React.Component {

    state = {
        showJobs: false
    }

    hanldeShowHide = () => {
        this.setState({
            showJobs: !this.state.showJobs
        })
    }

    handleOnclcikDelete = (job) => {
        console.log('>> handle : ', job)
        this.props.deleteAJob(job);
    }

    render() {

        let { showJobs } = this.state;
        let { arrJobs } = this.props;
        let check = showJobs === true ? 'showJobs = true' : 'showJobs = false';
        return (
            <>
                {
                    showJobs === false && <div>
                        <button onClick={() => this.hanldeShowHide()}>Show</button>
                    </div>
                }

                {
                    showJobs === true &&
                    <>
                        <div className="job-lists">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} <><span onClick={() => this.handleOnclcikDelete(item)} className='x'>x</span></>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div>
                            <button onClick={() => this.hanldeShowHide()}>Hide</button>
                        </div>
                    </>
                }
            </>
        )

    }

}


// function Components
// const ChildComponents = (props) => {

//     let { arrJobs } = props;
//     return (
//         <div className="job-title">
//             {
//                 arrJobs.map((item, index) => {
//                     if (item.salary >= 500) {
//                         return (
//                             <div key={item.id}>
//                                 {item.title} - {item.salary}$
//                             </div>
//                         )
//                     }
//                 })
//             }
//         </div>
//     )
// }
export default ChildComponents;