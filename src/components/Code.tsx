import { cn } from "@/lib/utils";
import * as React from "react";

export const Code = React.forwardRef<
  React.ElementRef<"code">,
  React.ComponentPropsWithoutRef<"code">
>(({ className, ...props }, ref) => (
  <code className={cn("bg-muted text-sm", className)} ref={ref} {...props} />
));

Code.displayName = "Code";
