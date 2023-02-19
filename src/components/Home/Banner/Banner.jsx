import { BsCodeSlash } from "react-icons/bs";

const Banner = () => {
    return (
        <div id="HomeBanner">
            <div className="container">
                <div className="code-icon">
                    <BsCodeSlash />
                </div>
                <h2 className="header-lg">Code. Eat. Sleep</h2>
                <div className="sub-header">
                    I create meaningful solutions for your brands and products. <br />
                    Give your customers the best experience possible.
                </div>
                <button className="btn btn-primary round-pill" value="contact">
                    Let's Chat Now!
                </button>
            </div>
        </div>
    );
}

export default Banner;