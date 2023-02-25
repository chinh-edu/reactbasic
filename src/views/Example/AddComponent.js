import React from "react";

class AddComponent extends React.Component {
    state = {
        title: "",
        salary: "",
    }
    handleChangeTitleJob = (event) => {
        // console.log(event.target.value, `>>>event.target: `, event.target, `event: `, event);
        this.setState({ title: event.target.value });
    }
    handleChangeSalary = (event) => {
        this.setState({ salary: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault() /*No reload page*/
        if (!this.state.title || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        console.log(`You are: `, this.state);
        this.props.addNewJob({
            id: Math.floor(Math.random() * 1000),
            title: this.state.title,
            salary: this.state.salary
        })
        this.setState({
            title: '',
            salary: ''
        })
    }
    render() {
        let { title, salary } = this.props; //or this.state
        return (
            <>
                <form>
                    <label htmlFor="fname"> title:</label><br />
                    <input
                        type="text"
                        value={this.state.title}
                        onChange={(event) => this.handleChangeTitleJob(event)}
                    />
                    <br />
                    <label htmlFor="lname">salary:</label><br />
                    <input
                        type="text"
                        value={this.state.salary}
                        onChange={(event) => this.handleChangeSalary(event)}
                    />
                    <br /><br />
                    <input type="submit"
                        onClick={(event) => this.handleSubmit(event)}
                    />
                </form>
                <br />
            </>
        )
    }
}

export default AddComponent