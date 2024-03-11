import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile({ label, onChange }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="xml">{label}</Label>
      <Input onChange={onChange} id="xml" type="file" />
    </div>
  );
}
