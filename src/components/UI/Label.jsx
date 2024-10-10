// import './Label.css';

export default function Label ({ children, className = '', ...props }) {
  return (
    <label className={`label ${className}`} {...props}>
      {children}
    </label>
  );
};
