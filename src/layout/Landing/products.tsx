import React from "react";

const CardProducts = React.lazy(() => import('@/components/Card'))

export default function Products() {
    return (
        <div className="swapper-landing-products px-8" id="products">
            <div className="flex flex-col text-center">
                <div className="text-3xl font-bold">Display My Products</div>
                <div className="font-sans text-sans pt-4 text-gray-600">Enhance your gaming immersion and conquer new levels with our convenient and secure game top up service. Whether you're a seasoned adventurer or a budding enthusiast, we've got you covered with a wide range of top up options for your favorite games.</div>
            </div>
            <div className="container">
                <CardProducts />
            </div>
        </div >
    )
}