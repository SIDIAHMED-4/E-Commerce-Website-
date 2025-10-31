const PaginationIndicator = ({ activeIndex, onClick, data }) => {
  const allIndicators = data.map((_, index) => (
    <button
      key={index}
      onClick={() => onClick(index)}
      className={`w-3 h-3 rounded-full mx-1 transition-all duration-300 ${
        activeIndex === index ? "bg-red-500 scale-110" : "bg-gray-400"
      }`}
    ></button>
  ));

  return (
    <div className="flex justify-center items-center mb-8 md:my-4">
      {allIndicators}
    </div>
  );
};
export default PaginationIndicator;
