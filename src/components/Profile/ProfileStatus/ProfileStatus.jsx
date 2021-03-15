import React from 'react';


class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.userStatus
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.userStatus !== this.props.userStatus){
            this.setState({
                status: this.props.userStatus
            })
        }
    }
    activateStatusEditor = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateStatusEditor = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    

    render() {
        
        return (
            <div>
                {
                    this.state.editMode
                    ? <input autoFocus={true} 
                        onChange={this.onStatusChange} 
                        onBlur={this.deactivateStatusEditor} 
                        type="text" 
                        value={this.state.status}/>
                    : <span onDoubleClick={this.activateStatusEditor}> {this.state.status || `No Status`}</span>
                }
            </div>
        );
    }
}

export default ProfileStatus;