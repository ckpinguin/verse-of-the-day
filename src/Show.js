import React from 'react';
import PropTypes from 'prop-types';

/*
Conditionally showing children componenents (a simpler variant of ToggleDisplay)

Usage example:
<Show if={this.props.reports.hasNextPage()}>
    <LoadMore onClick={this.handleLoadMore} />
</Show>
*/

Show.propTypes = {
    if: PropTypes.bool
}

export default function Show(props) {
    if (props.if === false) {
        return null;
    }

    let style = {};
    // style.display = 'none';
    
    return (
            <div style={style} >
                {props.children}
            </div>
    );
}