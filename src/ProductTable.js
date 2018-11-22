import React from 'react';
import ProductRow from'./ProductRow.js';
import SortableColumnHeader from './SortableColumnHeader.js';

class ProductTable extends React.Component {
    render() {
        let rows = this.props.products.map((product) => {
            return (
                <ProductRow product = {product} key={product.id} />
            );
        });
        return (
            <table>
                <thead>
                    <tr>
                        <SortableColumnHeader column='name' />
                        <SortableColumnHeader column='price' />
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        );
    }
}
export default ProductTable;