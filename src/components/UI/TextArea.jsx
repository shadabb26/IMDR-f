// import './Textarea.css';
export default function Textare({ className = "", ...props }) {
  return <textarea className={`textarea ${className}`} {...props} />;
}
