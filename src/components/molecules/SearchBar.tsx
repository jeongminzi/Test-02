import { Search } from "lucide-react";
import { Input, InputProps } from "../atoms/Input";

export interface SearchBarProps extends Omit<InputProps, "leadingIcon"> {}

export function SearchBar(props: SearchBarProps) {
  return <Input leadingIcon={<Search size={16} strokeWidth={1.8} />} {...props} />;
}
