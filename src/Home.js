import React, { useEffect, useState } from 'react'

const Home = () => {

    const [products, setProducts] = useState([]);

    const fetchProducts = async() => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json();
        console.log(data);
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, [])

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row'>
                { 
                    products && products.map((item) => (
                        <div className="col-4 card" key={item.id}>
                            <img src={item.image} className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.price}</p>
                                
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default Home
