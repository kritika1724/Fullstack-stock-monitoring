import React from "react";
import Hero from "../products/Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageURL="media/Kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with
streaming market data, advanced charts, an
elegant Ul, and more. Enjoy the Kite
experience seamlessly on your Android and
iOS devices."
        tryDemo=" "
        learnMore=" "
        googlePlay=""
        appStore=""
      />

      <RightSection
        imageURL="media/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha
account. Gain insights into your trades a n d
investments with in-depth reports and
visualisations."
        learnMore=" "
      />
      <LeftSection
        imageURL="media/Coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-
free, delivered directly to your Demat
account. Enjoy the investment experience
on your Android and ios devices."
        tryDemo=" /Coin"
      />
      <RightSection
        imageURL="media/console.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and
experiences with our super simple
HTTP/JSON APls. If you are a startup, build
your investment app and showcase it to our
clientbase."
        learnMore=" "
      />
      <LeftSection
        imageURL="media/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market
lessons with in-depth coverage and
illustrations. Content is broken down into
bite-size cards to help you learn on the go."
      />
      < p className="text-center mb-5" style={{ fontSize: "20px" }}>Want to know more about our technology stack? Check out the <a href="" style={{ textDecoration: "none" }}>MasterMind.tech</a>blog</p>
      <br/>
      <Universe/>
    </>
  );
}

export default ProductPage;
