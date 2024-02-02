const Footer = () => {
  return (
    <>
      <div className="flex flex-row px-20 py-10 text-white border-t border-t-white border-opacity-40">
        <div className="flex flex-col">
          <h5>Copyright © {new Date().getFullYear()}</h5>
          <p
            className="mt-1 text-white cursor-pointer text-opacity-80"
            onClick={() => {}}
          >
            Need Help? Contact Us
            <br />-
            <span
              onClick={() => {
                window.open("mailto:asterjoules@gmail.com", "_blank");
              }}
              className="text-white underline text-opacity-40 hover:text-opacity-70"
            >
              {" "}
              asterjoules@gmail.com
            </span>
            <br />-
            <span
              onClick={() => {
                window.open("mailto:nabhagmotivaras76@gmail.com", "_blank");
              }}
              className="text-white underline text-opacity-40 hover:text-opacity-70"
            >
              {" "}
              nabhagmotivaras76@gmail.com
            </span>
          </p>
        </div>
        <div className="flex flex-grow"></div>
        <button className="h-[5vh] shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 flex flex-row items-center justify-center gap-4">
          <FigmaSpotlight />
          Try CoverCraft Now!
        </button>
      </div>
    </>
  );
};
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

export default Footer;
