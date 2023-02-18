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
    render() {
        // console.log(`>>>check props: `, this.props)

        // let firstname = this.props.firstname
        // let lastname = this.props.lastname
        // key = value =>  
        let { firstname, lastname, arrJobs } = this.props;
        let { showJob } = this.state;
        let check = showJob === true ? 'showjJob = true' : 'showJob = false';
        return (
            <>
                <br />
                <div>Child Component: {firstname} {lastname}</div>
                <br />

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