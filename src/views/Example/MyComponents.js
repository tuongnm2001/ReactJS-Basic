import React from 'react';
import ChildComponents from './ChildConponents';
import AddComponent from './AddConponent';

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Tester', salary: '400' },
            { id: 'abcJob3', title: 'Project Managers', salary: '500' }
        ]
    }

    addNewJob = (job) => {
        // let currentJobs = this.state.arrJobs
        // currentJobs.push(job)
        console.log(' >>Check job from parent : ', job)
        this.setState({
            arrJobs: [...this.state.arrJobs, job]
            // arrJobs: currentJobs
        })

    }

    deleteAJob = (job) => {
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }
    /*
        JXS => return block
        fragment
    */

    render() {
        console.log('>> call render : ', this.state)
        return (
            <>
                <AddComponent addNewJob={this.addNewJob} />

                <ChildComponents arrJobs={this.state.arrJobs} deleteAJob={this.deleteAJob} />
            </>
        )
    }
}

export default MyComponent;