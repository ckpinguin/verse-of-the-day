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
};
function Show(props) {
    if (props.if === false) {
        return null;
    }

    const style = {};
    // style.display = 'none';
    
    return (
        React.cloneElement(props.children, { style: {style} })
    );
}
export default Show;
