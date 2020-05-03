import React from 'react';

class DropdownInput extends React.Component {
  render () {
    return (
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.labelName}</label>
        <select
          disabled={this.props.shouldDisable()}
          className="form-control"
          id={this.props.id}
          name={this.props.name}
          onChange={this.props.onChange}
          value={this.props.value ? this.props.value : this.props.values[0]}>
          {this.props.values.map(v => <option key={v.value} value={v.value}>{v.description}</option>)}
        </select>
      </div>
    );
  }
}

export default DropdownInput;