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
    if:         PropTypes.bool,
    children:   PropTypes.any.isRequired
};
Show.defaultProps = {
    if: true
};
function Show(props) {
    if (props.if === false) {
        return null;
    }

    const style = {};
    // style.display = 'none';

    return (
        <div>
            {React.Children.map(props.children, (child, i) => {
                return React.cloneElement(child, { style: {style} });
            })}
        </div>
    )
    
}
export default Show;
