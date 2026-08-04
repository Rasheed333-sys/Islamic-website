import { type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
}

export function Container({ as: Tag = "div", children, className }: ContainerProps) {
  return <Tag className={cn("container", className)}>{children}</Tag>;
}