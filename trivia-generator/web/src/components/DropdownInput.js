import React from 'react';

class DropdownInput extends React.Component {
  render () {
    const { values, value, id, name, labelName, onChange, shouldDisable } = this.props;
    const items = values ? values : [];
    return (
      <div className="form-group">
        <label htmlFor={id}>{labelName}</label>
        <select
          disabled={shouldDisable()}
          className="form-control"
          id={id}
          name={name}
          onChange={onChange}
          value={value ? value : items[0]}>
          { items.map((item, i) => <option key={i} value={item.value}>{item.description}</option>) }
        </select>
      </div>
    );
  }
}

export default DropdownInput;