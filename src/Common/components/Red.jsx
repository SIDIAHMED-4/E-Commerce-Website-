const Red = (props) => {
  return (
    <div  className="flex mb-4 items-center gap-3">
      <svg
        width="20"
        height="40"
        viewBox="0 0 20 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="20" height="40" rx="4" fill="#DB4444" />
      </svg>
      <p className="text-red-500 font-bold">{props.text}</p>
    </div>
  );
};

export default Red;