import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function InputFile({ label }) {
  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="xml">{label}</Label>
      <Input id="xml" type="file" />
    </div>
  );
}
