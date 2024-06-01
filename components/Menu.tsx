import { Select } from "@headlessui/react";

interface I_Meun {
  data: string[];
}

const Meun: React.FC<I_Meun> = ({ data }) => {
  return (
    <Select
      className="bg-primary text-2xl"
      name="status"
      aria-label="Project status"
    >
      {data.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};
export default Meun;
