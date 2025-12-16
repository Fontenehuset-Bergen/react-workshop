import { useState, type ChangeEvent, type ChangeEventHandler } from "react";

export interface InputData {
  value: string;
  description: string;
  placeholder: string;
  cssClassLabel?: string;
  cssClassInput?: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}

export function TextInput({
  description,
  placeholder,
  cssClassLabel,
  cssClassInput,
  handleChange,
}: InputData) {
  return (
    <label className={`textLabelDefault ${cssClassLabel}`}>
      {" "}
      {description}
      <input
        onChange={handleChange}
        type="text"
        name="textInput"
        className={`textInputDefault ${cssClassInput}`}
        placeholder={placeholder}
      />
    </label>
  );
}

export function MissionRegForm() {
  const [textInput, setTextInput] = useState<string>("");

  return (
    <form className={`defaultForm grid`}>
      <TextInput
        value={textInput}
        description="Enter mission description"
        handleChange={(event: ChangeEvent<HTMLInputElement>) =>
          setTextInput(event.target.value)
        }
        placeholder="enter data here"
      />
    </form>
  );
}

export function DateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return <input type="date" value={value} onChange={onChange} />;
}
