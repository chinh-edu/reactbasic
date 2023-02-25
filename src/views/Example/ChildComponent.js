import { render } from '@testing-library/react';
import React from 'react';

//class component

class ChildComponent extends React.Component {
    state = {
        showJob: false
    }
    handleShowHiden = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handeleOnClickDelete = (job) => {
        console.log('>>>> handleOnClickDelete:', job)
        this.props.deleteaAJob(job)
    }
    render() {
        // console.log(`>>>check props: `, this.props)
        // key = value =>  
        let { arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showjJob = true' : 'showJob = false';
        return (
            <>
                {showJob === false ?
                    <div>
                        <button onClick={() => this.handleShowHiden()}>Show</button>
                    </div>
                    :
                    <>
                        <div className="jobList">
                            {
                                arrJobs.map((item, index) => {
                                    return (
                                        <div key={item.id}>
                                            {item.title} - {item.salary} $
                                            <span onClick={() => this.handeleOnClickDelete(item)} style={{ cursor: 'pointer' }}>x</span>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div>
                            <button onClick={() => this.handleShowHiden()}>Hiden</button>
                        </div>
                    </>
                }
            </>
        )
    }

}

export default ChildComponent