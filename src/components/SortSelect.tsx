import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { SortSelectProps } from "@/types";
export const SortSelect = ({ onSort, selectedSort }: SortSelectProps) => {
  return (
    <div className="flex items-center gap-2">
      Sort By:
      <Select value={selectedSort} onValueChange={onSort}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="release_date">Release Date</SelectItem>
          <SelectItem value="title">Title</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
};
