"use client";

import { View, Text as RNText } from "react-native";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";

export function NativeWindReactNativeExample({
  className,
}: {
  className?: string;
}) {
  return (
    <View className={cn("gap-4", className)}>
      <Text className="text-3xl">What works?</Text>
      <p className="text-base">- All html elements</p>
      <RNText className="text-base">
        - All components imported from `react-native` (ex: `Text`, `View`, or
        `Pressable`)
      </RNText>
      <Text className="text-base">
        - Custom components made with html elements or components imported from
        `react-native` (ex: react-native-reusables&apos; `Button` or `Text`)
      </Text>
      <Text className="text-sm italic text-center opacity-60">
        React-Native based components must be used in a file with the &quot;use
        client&quot; directive.
      </Text>
    </View>
  );
}
