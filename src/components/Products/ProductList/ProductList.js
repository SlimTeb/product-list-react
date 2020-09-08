import React, {useState} from "react";
import ProductCard from "../../Common/ProductCard/ProductCard";
import ImgP1 from "../../../../public/static/media/p1.jpg";
import ImgP2 from "../../../../public/static/media/p2.jpg";
import ImgP3 from "../../../../public/static/media/p3.jpg"
import ImgP4 from "../../../../public/static/media/p4.jpg"
import ImgP5 from "../../../../public/static/media/p5.jpg"
import CardSkeleton from "../../Common/CardSkeleton/CardSkeleton";
import ProductDetailDialog from "../../Dialogs/ProductDetailDialog/ProductDetailDialog";

const products = [
    {
        id: 1,
        name: 'Product 1',
        price: 300,
        introDescription: 'Little description about product 1',
        rating: 3,
        imageUrl: ImgP1
    }, {
        id: 5,
        name: 'Product 5',
        price: 240,
        introDescription: 'Little description about product 5',
        rating: 3,
        imageUrl: ImgP5
    }, {
        id: 2,
        name: 'Product 2',
        price: 312,
        introDescription: 'Little description about product 2',
        rating: 2,
        imageUrl: ImgP2
    }, {
        id: 3,
        name: 'Product 3',
        price: 199,
        introDescription: 'Little description about product 3',
        rating: 4,
        imageUrl: ImgP3
    }, {
        id: 4,
        name: 'Product 4',
        price: 200,
        introDescription: 'Little description about product 4',
        rating: 1,
        imageUrl: ImgP4
    },
]
const ProductList = () => {
    
    const [isFetching, setIsFetching] = useState(true);

    return (
        <div>
            {isFetching && <CardSkeleton display={5} />}
            {products.map((prd, idx) => {

                return(
                    <div key={`product-item-${idx}`}>
                        <ProductCard product={prd}/>
                    </div>
                )
            })}
            <ProductDetailDialog />
        </div>
    );
}

export default ProductList