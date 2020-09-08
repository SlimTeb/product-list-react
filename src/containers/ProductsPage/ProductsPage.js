import React, {Component, Fragment} from "react";
import ProductFilterDashboard from "../../components/Products/ProductFilterDashboard/ProductFilterDashboard";
import ProductList from "../../components/Products/ProductList/ProductList";

class ProductsPage extends Component {


    render() {
        return (
            <Fragment>
                <span>Product page</span>
                <div className={'product-page-content'}>
                    <div className={'product-page-content--intro'}></div>
                    <div className={'floater-content'}>
                        <div className={'floater-content--fixed'}>
                            <ProductFilterDashboard />
                        </div>
                        <div className={'floater-content--fetched-data'}>
                            <ProductList />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ProductsPage