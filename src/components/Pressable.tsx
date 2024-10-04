"use client";
import * as React from "react";
import { Pressable as RNPressable } from "react-native";

export const Pressable = React.forwardRef<
  React.ElementRef<typeof RNPressable>,
  React.ComponentPropsWithoutRef<typeof RNPressable>
>((props, ref) => <RNPressable ref={ref} {...props} />);

Pressable.displayName = "Pressable";
