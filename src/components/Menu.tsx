import { Select } from "@headlessui/react";
import { useLTCType } from "../context/LTCTypeContent";
interface I_Meun {
  data: string[];
  type: string;
}

const Meun: React.FC<I_Meun> = ({ data, type }) => {
  const { level, setlevel, burden, setBurden, limit, setLimit } = useLTCType();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (type == "level") {
      setlevel(event.target.value);
    } else if (type == "types") {
      setBurden(event.target.value);
    } else if (type == "other") {
      setLimit(event.target.value);
    }
  };
  return (
    <Select
      className="bg-primary text-2xl xs:text-lg"
      name="status"
      aria-label="Project status"
      onChange={handleChange}
    >
      {data.map((item) => (
        <option key={type + "_" + item} value={item}>
          {item}
        </option>
      ))}
    </Select>
  );
};
export default Meun;
