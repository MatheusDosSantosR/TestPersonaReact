import './Input.css';

interface InputProps {
  value: string | "";
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    type={type}
    className='inputData'
  />
);

export default Input;