import "./Input.css";

export default function Input({ label, placeholder, value, onChange, error }) {
  return (
    <div className="input-wrapper">
      {label && <label>{label}</label>}
      <input 
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={error ? "error" : ""}
      />
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
