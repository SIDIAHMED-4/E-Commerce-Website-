const Arrow = () => {
  return (
    <div className="hidden md:block  gap-2">
      <button className="bg-white rounded-full shadow-lg p-2 hover:bg-gray-200 focus:outline-none">
        <svg
          width="36"
          height="36"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
          <path
            d="M22 16L15 23L22 30M15 23H31"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button>
        <svg
          width="36"
          height="36"
          viewBox="0 0 46 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="23" cy="23" r="23" fill="#F5F5F5" />
          <path
            d="M14.5 23H31M31 23L24 16M31 23L24 30"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Arrow;
