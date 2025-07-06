import React from 'react';

function RightSection({ imageURL, productName, productDescription, learnMore}) {
    return (
        <div className='container'>
            <div className='row d-flex align-items-center'>
                <div className='col-6 p-5'>
                    <h1>{productName}</h1>
                    <p>{productDescription}</p>
                    <div className="d-flex align-items-center gap-3">
                    {productName === "Console" ? (
                        <a href={learnMore}>Learn more</a>
                    ):
                    (
                        <a href={learnMore}>Kite Connect</a>
                    )}
                    </div>
                </div>
                <div className='col-6 p-5 d-flex justify-content-center'>
                    <img src={imageURL} className="img-fluid" alt="Product"/>
                </div>
            </div>
        </div>
    );
}

export default RightSection;
