interface InputFieldProps {
  placeholder: string;
}

const InputField = ({ placeholder }: InputFieldProps) => {
  return (
    <div className="input">
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default InputField;
