import { useState } from "react";
import { VisuallyHiddenInput, Label } from "./styled";

const Checkbox = ({
  labelComponent,
  text,
  name,
  value,
  onClick,
  onChange,
  selectedIds,
}) => {
  const LabelComponent = labelComponent;
  const [checked, setChecked] = useState(selectedIds.includes(value));

  const handleChange = (e) => {
    const newValues = [...selectedIds];
    if (newValues.includes(value)) {
      const index = newValues.indexOf(value);
      newValues.splice(index, 1);
    } else {
      newValues.push(value);
    }
    onChange && onChange(newValues);
    setChecked(newValues.includes(value));
  };
  return (
    <Label>
      <VisuallyHiddenInput
        name={name}
        value={value}
        type="checkbox"
        onChange={handleChange}
        checked={checked}
      />
      <LabelComponent onClick={() => onClick(value)} $isChecked={checked}>
        {text}
      </LabelComponent>
    </Label>
  );
};

export default Checkbox;
