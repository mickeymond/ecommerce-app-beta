import { useEffect, useState } from "react";
import CatalogueList from "../../components/catalogueList";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

export default function Catalogue() {
    const [products, setProducts] = useState([]);


    const getProducts = () => {
        const url = new URL('https://dummyjson.com/products');

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setProducts(data.products);
            })
            .catch(error => {
                console.log(error);
            })
    }

useEffect(getProducts, []) 

    return (
        <>
            <Navbar />
         {products.map((product) => <CatalogueList key={product.id} id={product.id} title={product.title} images={product.images} description={product.description} price={product.price}  />)
         }
            <Footer />
        </>
    );
}