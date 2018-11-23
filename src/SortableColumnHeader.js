import React from 'react';

class SortableColumnHeader extends React.Component {
    render() {
        return(
            <th>
                {this.props.column}
                <button className = "SortableColumnHeader-current">&#x25B2;</button>
                <button>&#x25B2;</button>
            </th>
        );
    }
}
export default SortableColumnHeader;