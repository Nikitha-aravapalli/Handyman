import "./css/Slider.css";
export const Slider = () => {
  const slide1 = () => {
    document.getElementById("images").style.backgroundImage =
      "url('../images/slide3.jpeg')";
  };
  const slide2 = () => {
    /*document.getElementById("images").style.backgroundImage =
      " url('../images/slide2.jpeg')";*/
    document.getElementById("images").style.backgroundImage =
      "url('../images/slide2.jpeg')";
    console.log("blue");
  };
  const slide3 = () => {
    document.getElementById("images").style.backgroundImage =
      "url('../images/slide1.jpg')";
  };
  const slide4 = () => {
    document.getElementById("images").style.backgroundImage =
      "url('../images/slide4.jpeg')";
  };
  return (
    <div className="slider">
      <div id="images">
        <input type="radio" name="radio" id="slide1" onChange={slide1}></input>
        <input type="radio" name="radio" id="slide2" onChange={slide2}></input>
        <input type="radio" name="radio" id="slide3" onChange={slide3}></input>
        <input type="radio" name="radio" id="slide4" onChange={slide4}></input>

        {/*<img className="image1" src="../images/slide1.jpg" alt="Image 1" />
        <img className="image2" src="../images/slide3.jpeg" alt="Image 2"></img>
        <img className="image3" src="../images/slide4.jpeg" alt="Image 3"></img>
  <img className="image4" src="../images/slide2.jpeg" alt="Image 4"></img>*/}
      </div>
      <div className="dots">
        <label htmlFor="slide1"></label>
        <label htmlFor="slide2"></label>
        <label htmlFor="slide3"></label>
        <label htmlFor="slide4"></label>
      </div>
    </div>
  );
};
