import React, { Component } from "react";
import Button from "../Button/Button";


const ProductCard = ({product}) => {

    const displayPrice = (price) => {
        return (price/100 * 100).toFixed(2)
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
                    <Button className={'btn-detail'} nClick={null} label={'See more'} />
                </div>
            </div>
            <div className={'product-list-item__price'}>
                <span>{displayPrice(product.price)} <span style={{fontSize: '1rem'}}> EUR</span></span>
            </div>

        </div>
    )
}

export default ProductCard;