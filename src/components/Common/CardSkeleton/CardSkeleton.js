import React, {Fragment, useState} from "react";
import _ from 'lodash';
import Skeleton from "react-loading-skeleton";
import Button from "../Button/Button";

const CardSkeleton = ({display}) => {

    return(
        <Fragment>
            {
                _.times(8, (i) => {
                    return (
                        <div className={'product-list-item'}>
                            <div className={'product-list-item__image'}>
                                <div style={{padding: '.4rem'}}>
                                    <Skeleton height={130} width={130} />
                                </div>
                            </div>
                            <div className={'product-list-item__info'}>
                                <div className={'product-list-item__info__header'}>
                                    <Skeleton height={10} width={340} />
                                    <Skeleton height={20} width={250} />
                                </div>
                                <div className={'product-list-item__info__footer'}>
                                    <Skeleton height={20} width={250} />
                                </div>
                            </div>
                            <div className={'product-list-item__price'}>
                                <Skeleton height={15} width={25} />
                            </div>
                        </div>
                    )
                })
            }
        </Fragment>
    )

}

export default CardSkeleton