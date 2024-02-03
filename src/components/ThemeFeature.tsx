import bgImg from "/ss_dark.png";
import lightImg from "/ss_light.png";

const ThemeFeature = () => {
  return (
    <>
      <div className="h-[80vh] relative flex flex-col justify-start  md:justify-center items-end text-white mx-5 md:mx-20">
        <h1 className="text-4xl font-bold w-full md:w-[30vw]">
          Experience Flexibility with Our Figma Plugin
        </h1>
        <h2 className="text-xl w-full md:w-[30vw] text-white opacity-80 mt-4">
          Supporting Both Light and Dark Modes, We Adapt to Your Preferred
          Design Environment.
        </h2>
        <img
          className="h-[30vh] md:h-[60vh] absolute top-[40%] md:top-0 left-[50%] md:left-[5%] shadow-lg rounded-md"
          src={lightImg}
          alt=""
        />
        <img
          className="h-[30vh] md:h-[60vh] absolute top-[50%] md:top-0 left-[10%] md:left-[25%] shadow-lg rounded-md"
          src={bgImg}
          alt=""
        />
      </div>
    </>
  );
};

export default ThemeFeature;
