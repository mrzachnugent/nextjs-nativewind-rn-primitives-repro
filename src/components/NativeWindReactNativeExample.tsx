"use client";

import { Code } from "@/components/Code";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import { Text as RNText, View } from "react-native";

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
        - All components imported from <Code>react-native</Code> (ex:{" "}
        <Code>Text</Code>, <Code>View</Code>, and
        <Code>Pressable</Code>)
      </RNText>
      <Text className="text-base">
        - Custom components made with html elements or components imported from
        `react-native` (ex: <Code>components/ui/button</Code> and
        <Code>/components/ui/text</Code>)
      </Text>
      <Text className="text-sm italic text-center opacity-60">
        React-Native based components must be used in a file with the &quot;use
        client&quot; directive.
      </Text>
    </View>
  );
}
