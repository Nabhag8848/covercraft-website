import searchCoverImg from "/search_cover.png";
import coverImg from "/cover_img.png";
import rect_1 from "/rect_1.png";
import rect_2 from "/rect_2.png";
import rect_3 from "/rect_3.png";
import lightImg from "/ss_light.png";

const LexicaFeature = () => {
  return (
    <>
      <div className="h-[70vh] relative">
        <img
          className="h-[30vh] md:h-[60vh] top-[-0vh] rounded-md absolute left-[10vw] md:left-[15vw]"
          src={searchCoverImg}
          alt=""
        />
        <img
          className="h-[30vh] md:h-[60vh] top-[-0vh] rounded-md absolute right-[10vw] md:right-[15vw]"
          src={lightImg}
          alt=""
        />

        <img
          className="h-[30vh] md:h-[60vh] rounded-md absolute top-[25vh] left-[50%] transform -translate-x-[50%] -translate-y-[50%] shadow-lg"
          src={coverImg}
          alt=""
        />
      </div>

      <div className="h-[80vh] relative flex flex-col justify-start md:justify-center text-white ml-10  md:ml-20">
        <h1 className="text-4xl font-bold">
          Embrace the Power of <br />
          <a href="https://lexica.art" className="underline">
            Lexica AI
          </a>
        </h1>
        <h2 className="text-sm md:text-xl w-full md:w-[30vw] text-white opacity-80 mt-4">
          Effortlessly Insert AI-Generated Images into Your Figma Boards with
          Our Plugin, ensuring you never have to change a tab.
        </h2>
        <img
          className="top-[30vh] md:top-0  h-[30vh] md:h-[60vh] absolute right-[35%] md:right-[5%] shadow-lg rounded-md"
          src={searchCoverImg}
          alt=""
        />

        <img
          className="hidden md:flex h-[20vh] w-[20vw] object-cover absolute top-[0%]  right-[35%] rounded-lg shadow-lg"
          src={rect_1}
          alt=""
        />
        <img
          className="hidden md:flex h-[20vh] w-[20vw] object-cover absolute top-[30%]  right-[30vw] rounded-lg shadow-lg"
          src={rect_2}
          alt=""
        />
        <img
          className="hidden md:flex h-[20vh] w-[20vw] object-cover absolute top-[60%]  right-[35%] rounded-lg shadow-lg"
          src={rect_3}
          alt=""
        />
      </div>
    </>
  );
};

export default LexicaFeature;
