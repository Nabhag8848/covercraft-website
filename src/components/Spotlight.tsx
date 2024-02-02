import { cn } from "../../utils/cn";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1]  h-[169%] w-[138%] lg:w-[84%] opacity-0",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || "white"}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

export function SpotlightPreview() {
  return (
    <div className="w-full flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight className="left-0 -top-40 md:left-96 md:-top-0" fill="white" />
      <div className="relative z-10 w-full p-4 pt-20 pb-20 mx-auto max-w-7xl">
        <div
          onClick={() => {
            const url = "https://github.com/Nabhag8848/hashnode-figma-plugin";
            window.open(url, "_blank");
          }}
          className="flex flex-row items-center justify-center w-auto hover:scale-[1.025] transition-all duration-300 cursor-pointer"
        >
          <p className="px-4 py-[4px] mx-auto text-white text-opacity-80 border border-white border-opacity-60 rounded-full flex flex-row items-center justify-center text-[12px]">
            <GithubLogo />
            <div className="w-2"></div>
            Proudly OpenSource
            <svg
              width="20"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.5 5L15.5 12L8.5 19"
                stroke="#ffffff"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </p>
        </div>
        <h1 className="pb-6 text-4xl font-bold text-center text-transparent bg-opacity-50 md:text-7xl bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
          Seamlessly <br /> Set Cover Images
          <br /> from{" "}
          <strong className="inline-block">Figma to Hashnode</strong>
        </h1>
        <p className="max-w-lg mx-auto mt-6 text-base font-normal text-center text-neutral-300 ">
          Say Goodbye to downloads, naming and Effortlessly craft <br />
          Cover Images with zero hassle - no need to switch platforms.
        </p>
        <div className="h-8"></div>
        <div className="flex flex-row items-center justify-center gap-4">
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex flex-row items-center justify-center gap-4">
            <FigmaSpotlight />
            Get Plugin
          </button>
          <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex flex-row items-center justify-center gap-4">
            <TwitterLogo />
            Share on Twitter
          </button>
        </div>
      </div>
    </div>
  );
}

const FigmaSpotlight = () => {
  return (
    <>
      <svg
        width="12"
        height="17"
        viewBox="0 0 12 17"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.73438 8.50002C5.73438 7.74857 6.03647 7.0279 6.57419 6.49655C7.11192 5.9652 7.84123 5.66669 8.60169 5.66669C9.36215 5.66669 10.0915 5.9652 10.6292 6.49655C11.1669 7.0279 11.469 7.74857 11.469 8.50002C11.469 9.25147 11.1669 9.97214 10.6292 10.5035C10.0915 11.0348 9.36215 11.3334 8.60169 11.3334C7.84123 11.3334 7.11192 11.0348 6.57419 10.5035C6.03647 9.97214 5.73438 9.25147 5.73438 8.50002V8.50002Z"
          fill="#1ABCFE"
        />
        <path
          d="M0 14.1666C0 13.4152 0.302091 12.6945 0.839817 12.1632C1.37754 11.6318 2.10686 11.3333 2.86732 11.3333H5.73463V14.1666C5.73463 14.9181 5.43254 15.6388 4.89481 16.1701C4.35709 16.7015 3.62778 17 2.86732 17C2.10686 17 1.37754 16.7015 0.839817 16.1701C0.302091 15.6388 0 14.9181 0 14.1666H0Z"
          fill="#0ACF83"
        />
        <path
          d="M5.73438 0V5.66667H8.60169C9.36215 5.66667 10.0915 5.36816 10.6292 4.8368C11.1669 4.30545 11.469 3.58478 11.469 2.83333C11.469 2.08189 11.1669 1.36122 10.6292 0.829864C10.0915 0.298511 9.36215 0 8.60169 0L5.73438 0Z"
          fill="#FF7262"
        />
        <path
          d="M0 2.83333C0 3.58478 0.302091 4.30545 0.839817 4.8368C1.37754 5.36816 2.10686 5.66667 2.86732 5.66667H5.73463V0H2.86732C2.10686 0 1.37754 0.298511 0.839817 0.829864C0.302091 1.36122 0 2.08189 0 2.83333H0Z"
          fill="#F24E1E"
        />
        <path
          d="M0 8.50002C0 9.25147 0.302091 9.97214 0.839817 10.5035C1.37754 11.0348 2.10686 11.3334 2.86732 11.3334H5.73463V5.66669H2.86732C2.10686 5.66669 1.37754 5.9652 0.839817 6.49655C0.302091 7.0279 0 7.74857 0 8.50002Z"
          fill="#A259FF"
        />
      </svg>
    </>
  );
};

const TwitterLogo = () => {
  return (
    <>
      <svg
        width="15"
        height="15"
        viewBox="0 0 1200 1227"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="white"
        />
      </svg>
    </>
  );
};

const GithubLogo = () => {
  return (
    <>
      <div className="max-h-[20px] max-w-[15px]">
        <img src="/github-mark-white.png" alt="" />
      </div>
    </>
  );
};
