import React, { useContext } from 'react';
import { myContext } from '../App';

const CartPage = () => {
    const cardStyle = {
        maxWidth: '992px'
    }
    const headStyle = {
        minWidth: '320px'
    }

    const [mobiles, setMobiles] = useContext(myContext)

    const handleRemove = (id) => {
        setMobiles(mobiles.filter((item) => item.id !== id))
    }

    const totalAmount = mobiles.reduce((acc, mobiles) => acc + mobiles.price * (mobiles.quantity || 1), 0)

    const productCount = mobiles.reduce((acc, mobiles) => acc + (mobiles.quantity || 1), 0)

    const AddCartCount = (id, quantity) => {
        setMobiles(previousProduct => {
            return previousProduct.map((item) => {
                if (item.id === id) {
                    return { ...item, quantity: (item.quantity + 1 || quantity + 1) }
                }
                return item
            })
        })
    }

    const DecreaseCartCount = (id, quantity) => {
        setMobiles(previousProducts => {
            return previousProducts.map(item => {
                if (item.id === id && (item.quantity || quantity) > 1) {
                    return { ...item, quantity: (item.quantity - 1) };
                }
                return item;
            });
        });
    };
    return (

        <div className='container-fluid'>
            <div className="card-header sticky-top text-white bg-dark p-4" style={headStyle}>
                <span > Number Of Products: <span className='total'>{productCount}</span> </span>
                <span>Total Price: <span className='total'>${totalAmount}</span></span>
            </div>

            {mobiles.map((item, index) => (
                <div key={index} className="card h-100 m-3" style={cardStyle}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <div id={`carouselExample${index}`} className="carousel slide">
                                <div className="carousel-inner">
                                    {item.images.map((mobImg, imgIndex) => (
                                        <div key={imgIndex} className={`carousel-item ${imgIndex === 0 ? 'active' : ''}`}>
                                            <img src={mobImg} className="d-block w-100 rounded" alt={`slide ${imgIndex + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target={`#carouselExample${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <div className="card-body" >
                                <h4 className="card-text">{item.brand}</h4>
                                <h6 className="card-title">{item.title}</h6>
                                <h4>${item.price}</h4>
                                <h6 className="card-text"><small className="text-body-secondary">{item.description}</small></h6>
                            </div>
                        </div>
                        <div className="d-flex col">

                            <button className='btn' id='plus' onClick={() => AddCartCount(item.id, item.quantity || 1)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor " class="bi bi-plus-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0" />
                                </svg>
                            </button>

                            <button className='btn' id='minus' onClick={() => DecreaseCartCount(item.id, item.quantity || 1)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-dash-square-fill" viewBox="0 0 16 16">
                                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm2.5 7.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1" />
                                </svg>
                            </button>
                            <div className="col-6 m-2">

                                <button className='button' onClick={() => handleRemove(item.id)}>
                                    <svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

        </div>

    );
};

export default CartPage;