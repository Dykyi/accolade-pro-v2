import { LiftStatus } from "../../../types/generated/graphqlScheme.ts";
import { default as ReactSelect, SingleValue } from "react-select";
import styles from "./Select.module.scss";
import { Option } from "../../screens/Home/Home.tsx";

interface SelectProps {
  label: string;
  value: string;
  handleChange: (option: SingleValue<Option>) => void;
  className?: string;
}

const Select = ({ label, handleChange, value, className }: SelectProps) => {
  const options = ["ALL", ...Object.values(LiftStatus)];
  const wrapperStyles = className
    ? `${styles.selectWrapper} ${className}`
    : styles.selectWrapper;

  const statusOptions = options.map((status) => ({
    value: status,
    label: status.charAt(0) + status.slice(1).toLowerCase(),
  }));

  return (
    <div className={wrapperStyles}>
      <label className={styles.label}>{label}</label>
      <ReactSelect
        placeholder="Select a status"
        defaultValue={statusOptions[0]}
        options={statusOptions}
        isMulti={false}
        value={{
          label: value,
          value,
        }}
        onChange={handleChange}
      />
    </div>
  );
};

export default Select;
