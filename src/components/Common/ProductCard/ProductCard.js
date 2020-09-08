import React from "react";
import Button from "../Button/Button";
import {useDispatch} from "react-redux";
import {showDialog} from "../../../actions/DialogActions/DialogActions";
import { DIALOG_ID as PRODUCT_DETAIL_DIALOG_ID} from "../../Dialogs/ProductDetailDialog/ProductDetailDialog";


const ProductCard = ({product}) => {

    const dispatch = useDispatch();

    const displayPrice = (price) => {
        return (price/100 * 100).toFixed(2)
    }

    const onShowDetails = (id) => {
        dispatch(showDialog(PRODUCT_DETAIL_DIALOG_ID, {product}))
    }

    return (
        <div className={'product-list-item'}>
            <div className={'product-list-item__image'}>
                <img className={"product-list-item--image--img"} src={product.imageUrl}/>
            </div>
            <div className={'product-list-item__info'}>
                <div className={'product-list-item__info__header'}>
                    <h3 className={'product-list-item__info__header__name'}>{product.name}</h3>
                    <p className={'product-list-item__info__header__description'}>{product.introDescription}</p>
                </div>
                <div className={'product-list-item__info__footer'}>
                    <Button className={'btn-detail'} onClick={onShowDetails} label={'See more'} />
                </div>
            </div>
            <div className={'product-list-item__price'}>
                <span>{displayPrice(product.price)} <span style={{fontSize: '1rem'}}> EUR</span></span>
            </div>

        </div>
    )
}

export default ProductCard;