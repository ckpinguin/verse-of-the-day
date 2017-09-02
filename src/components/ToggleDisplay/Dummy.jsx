import React from 'react';

// TODO: Howto print props in rendered JSX?
function Dummy(props) {
    return (
        <p>
            {JSON.stringify(props)}
        </p>
    );
}
export default Dummy;