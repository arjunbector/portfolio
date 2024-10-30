import { cn } from "@/lib/utils";
import React from "react";

interface CustomFormErrorProps {
  className?: string;
  children: any;
}
const CustomFormError = ({ children, className }: CustomFormErrorProps) => {
  return <p className={cn("text-sm text-red-500", className)}>{children}</p>;
};

export default CustomFormError;
