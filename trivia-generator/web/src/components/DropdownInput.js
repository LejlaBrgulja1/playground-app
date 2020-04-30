import React from 'react';

class DropdownInput extends React.Component {
    handleChange(event) {
        this.setState({value: event.target.value});
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.labelName}</label>
                <select className="form-control" id={this.props.id} name={this.props.name}>
                    {this.props.values.map(value => <option value={value}>{value}</option>)}
                </select>
            </div>
        );
    }
}

export default DropdownInput;