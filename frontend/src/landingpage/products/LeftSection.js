import React from 'react';
function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( <div className='container'>
        <div className='row'>
            <div className='col-6 p-3 p-5'>
            <img src ={imageURL} />
            </div>
            <div className='col-6 p-5 mt-5'>

               <h1>{productName}</h1>
               <p>{productDescription}</p>
               <div>
               {productName.toLowerCase() === "kite" ? (
    // Show both "Try Demo" and "Learn More" for "kite"
    <div className="d-flex align-items-center gap-3">
        <a href={tryDemo}>Try Demo</a>
        <a href={learnMore}>Learn More</a>
    </div>
) : productName === "KiteConnectAPI" ? (
    // Show only "Kite Connect" for "Kite Connect API"
    <a href={tryDemo}>Kite Connect</a>
) : productName === "Coin" ? (
    // Show "Coin" for productName === "Coin"
    <a href={tryDemo}>Coin</a>
) : (
    // Default case: Show "Try Demo" if tryDemo exists
    tryDemo ? <a href={tryDemo}>Try Demo</a> : null
)}

               </div>
               <div className='mt-3'>
               <a href={googlePlay}><img src="media/googlePlayBadge.svg"/></a>
               <a href={appStore}><img src="media/appstoreBadge.svg"style={{marginLeft:"50px"}}/></a></div>
               </div>
        </div>
    </div>);
}

export default LeftSection;