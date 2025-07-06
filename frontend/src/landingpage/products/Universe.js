import React from "react";
function Universe() {
  return (
    <>
      <div className="container">
        <div className="row text-center ">
          <h1 className="text-center mb-4">The MasterMind Universe</h1>
          <p>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>
        <div className="row ms-5 me-5 mt-5">
          <div className="col-4 p-3">
            <img src="media/zerodhaFundhouse.png" style={{ width: "50%" }} alt = "image"  />
            <p className="mt-5 text-muted">
              Our asset management venture
              <br />
              that is creating simple and transparent index
              <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/sensibullLogo.svg" style={{ width: "60%" }} />
            <p className="mt-5 text-muted ">
              Options trading platform that lets you
              <br /> create strategies, analyze positions, and examine<br/>
               data
              points like open interest, FIl/DIl, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/tijori.png" style={{ width: "50%" }} />
            <p className="mt-3 text-muted ">
              Investment research platform <br/>that offers detailed insights on
              stocks,<br/> sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div className="row ms-5 me-5 mt-5">
        <div className="col-4 p-3">
            <img src="media/streakLogo.png" style={{ width: "50%" }} />
            <p className="mt-5 text-muted ">
            Systematic trading platform<br/>
that allows you to create and backtest<br/>
strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/smallcaseLogo.png" style={{ width: "60%" }} />
            <p className="mt-5 text-muted ">
            Thematic investing platform<br/>
that helps y o u invest in diversified<br/>
baskets of stocks on ETFs.
        </p>
          </div>
          <div className="col-4 p-3">
            <img src="media/dittoLogo.png" style={{ width: "50%" }} />
            <p className="mt-3 text-muted ">
            Personalized advice on life<br/>
and health insurance. No spam<br/>
and no mis-selling.
            </p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
  <button className="p-2 btn btn-primary fs-5 mb-5 text-center w-50">
           Sign up         
  </button>
</div>
      </div>
      
    </>
  );
}

export default Universe;
