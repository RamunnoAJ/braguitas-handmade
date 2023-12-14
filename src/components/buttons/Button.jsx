const Button = ({ children, cx, handleClick }) => (
  <button
    onClick={handleClick}
    className={`${cx} py-3 px-4 font-bold text-base rounded-md uppercase transition-all duration-300 ease-in-out`}>
    {children}
  </button>
);

export default Button;
