import { useEffect, useState} from "react";


function Home() {

        const [products, setProducts] = useState([]);

        useEffect(() => {
                async function getProducts() {
                        try {
                                const response = await fetch("/student-data/products.json");
                                if (!response.ok) throw new Error("Could not load products");
                                const data = await response.json();
                                setProducts(data)
                        }

                        catch (err) {
                                setProducts(err.message);
                        }
                }
                console.log(products)
                getProducts();
        }, []);
}


<main>




</main>





export default Home;