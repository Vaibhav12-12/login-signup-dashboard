const ButtonLoginAlt = ({ imgLogo }) => {
  return (
    <>
      <button className="flex items-center justify-center px-8 py-1 bg-white border border-gray-300 rounded-lg shadow-md hover:bg-gray-100">
        <img
          src={imgLogo}
          alt="button"
          className="min-w-2 max-w-7 h-auto p-1"
        />
      </button>
    </>
  );
};

export default ButtonLoginAlt;
