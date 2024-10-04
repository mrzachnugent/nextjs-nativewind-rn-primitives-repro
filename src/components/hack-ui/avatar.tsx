"use client";

import * as React from "react";
import * as AvatarPrimitive from "@rn-primitives/avatar";
import { cn } from "@/lib/utils";

const AvatarPrimitiveRoot = AvatarPrimitive.Root;
const AvatarPrimitiveImage = AvatarPrimitive.Image;
const AvatarPrimitiveFallback = AvatarPrimitive.Fallback;

const Avatar = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitiveRoot>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveRoot>
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitiveRoot
    ref={ref}
    style={[
      {
        // @ts-expect-error className hack
        $$css: true,
        test: cn(
          "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
          className
        ),
      },
      style,
    ]}
    {...props}
  />
));
Avatar.displayName = AvatarPrimitiveRoot.displayName;

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitiveImage>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveImage>
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitiveImage
    ref={ref}
    style={[
      {
        // @ts-expect-error className hack
        $$css: true,
        test: cn("aspect-square h-full w-full", className),
      },
      style,
    ]}
    {...props}
  />
));
AvatarImage.displayName = AvatarPrimitiveImage.displayName;

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitiveFallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitiveFallback>
>(({ className, style, ...props }, ref) => (
  <AvatarPrimitiveFallback
    ref={ref}
    style={[
      {
        // @ts-expect-error className hack
        $$css: true,
        test: cn(
          "flex h-full w-full items-center justify-center rounded-full bg-muted",
          className
        ),
      },
      style,
    ]}
    {...props}
  />
));
AvatarFallback.displayName = AvatarPrimitiveFallback.displayName;

export { Avatar, AvatarFallback, AvatarImage };
