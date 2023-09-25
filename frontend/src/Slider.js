import "./css/Slider.css";
export const Slider = () => {
  return (
    <div className="slider">
      <div className="images">
        <input type="radio" id="slide1"></input>
        <input type="radio" id="slide2"></input>
        <input type="radio" id="slide3"></input>
        <input type="radio" id="slide4"></input>

        <img
          className="image"
          src="../images/slide1.jpg"
          alt="Image 1"
          checked
        />
        <img className="image" src="../images/slide3.jpeg" alt="Image 2"></img>
        <img className="image" src="../images/slide4.jpeg" alt="Image 3"></img>
        <img className="image" src="../images/slide2.jpeg" alt="Image 4"></img>
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
