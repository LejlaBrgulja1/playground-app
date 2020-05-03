import React from 'react';

function Button() {
    return (
        <div class="form-group">
            <button type="submit" class="btn btn-theme">{this.props.text}</button>
        </div>
    );
}

export default Button;