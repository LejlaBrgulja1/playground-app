import React from 'react';

class SimpleInput extends React.Component {
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.labelName}</label>
                <input type="number" className="form-control" id={this.props.id} name={this.props.name} placeholder={this.props.placeholder} />
            </div>
        );
    }
}

export default SimpleInput;