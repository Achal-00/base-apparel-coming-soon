const width = screen.width;

const HeroImage = () => {
  if (width < 1200) {
    return (
      <div className="image-container-mobile">
        <img src="images/hero-mobile.jpg" alt="hero image" />
      </div>
    );
  } else {
    return (
      <div className="image-container-desktop">
        <img src="images/hero-desktop.jpg" alt="hero image" />
      </div>
    );
  }
};

export default HeroImage;
