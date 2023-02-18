import React from 'react';
import ChildComponent from './ChildComponent';


class MyComponent extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        arrJobs: [
            { id: 'abcJob1', title: 'Developer', salary: '500' },
            { id: 'abcJob2', title: 'Testers', salary: '400' },
            { id: 'abcJob3', title: 'Project manager', salary: '1000' }
        ]
    }

    handleChangeFirstName = (event) => {
        // console.log(event.target.value, `>>>event.target: `, event.target, `event: `, event);
        this.setState({ firstName: event.target.value });
    }

    handleChangeLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault() /*No reload page*/
        console.log(`You are: `, this.state);
    }

    render() {
        // console.log(`>>>call render: `, this.state)
        return (
            <>
                <form>
                    <label htmlFor="fname">First name:</label><br />
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={(event) => this.handleChangeFirstName(event)}
                    />
                    <br />
                    <label htmlFor="lname">Last name:</label><br />
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={(event) => this.handleChangeLastName(event)}
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />

                </form>

                <ChildComponent
                    // props
                    firstname={this.state.firstName}
                    lastname={this.state.lastName}
                    arrJobs={this.state.arrJobs}
                />
            </>
        )
    }

}
export default MyComponent