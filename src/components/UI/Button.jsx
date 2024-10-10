export default function Button({
  children,
  onClick,
  variant = "default",
  size = "medium",
  className = "",
  ...props
}) {
  return (
    // <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    //   {children}
    // </button>
    <button
      className={`button button-${variant} button-${size} px-2 py-2 ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
