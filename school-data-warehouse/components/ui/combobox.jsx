"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSearchParams } from "react-router-dom";

export function Combobox({ name, list }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  React.useEffect(() => {
    const param = searchParams.get(name);
    if (param) {
      setValue(param);
    } else {
      setValue("");
    }
  }, [searchParams]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between truncate ..."
        >
          {value
            ? list.find(
                (item) => item.value.toLowerCase() === value.toLowerCase()
              )?.label
            : `${name}`}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder={`${name}`} />
          <CommandEmpty>No {name} found.</CommandEmpty>
          <CommandGroup>
            {/* Limit size of array to first 100 */}
            {list.slice(0, 100).map((item) => (
              <CommandItem
                key={item.value}
                value={item.value}
                onSelect={(currentValue) => {
                  if (currentValue.toLowerCase() === value.toLowerCase()) {
                    setValue("");
                    setSearchParams((searchParams) => {
                      if (searchParams.has(name)) {
                        searchParams.delete(name);
                      }
                      return searchParams;
                    });
                  } else {
                    setValue(currentValue);
                    setSearchParams((searchParams) => {
                      searchParams.set(name, currentValue);
                      return searchParams;
                    });
                  }
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value.toLowerCase() === item.value.toLowerCase()
                      ? "opacity-100"
                      : "opacity-0"
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
