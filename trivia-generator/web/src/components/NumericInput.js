import React from 'react';

class NumericInput extends React.Component {
    state = {
        isValidInput: true,
    }

    validateInput = (e) => { 
        const isValid = e.target.value <= this.props.max && e.target.value >= this.props.min;
        this.setState({ isValidInput: isValid });
        this.props.onBlur(e);
        this.props.onError(e, isValid);
    };

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.labelName}</label>
                <input 
                    disabled={this.props.shouldDisable()}
                    type="number" 
                    className="form-control" 
                    id={this.props.id} 
                    name={this.props.name} 
                    placeholder={this.props.placeholder} 
                    value={this.props.value} 
                    onChange={this.validateInput}
                />
                { !this.state.isValidInput &&
                    <label className="invalid-label">The number must be between { this.props.min } and { this.props.max }. </label>
                }
            </div>
        );
    }
}

export default NumericInput;