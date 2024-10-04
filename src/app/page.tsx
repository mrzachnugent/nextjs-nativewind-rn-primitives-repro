import { Text } from "@/components/ui/text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Avatar as HackAvatar,
  AvatarFallback as HackAvatarFallback,
  AvatarImage as HackAvatarImage,
} from "@/components/hack-ui/avatar";
import { NativeWindReactNativeExample } from "@/components/NativeWindReactNativeExample";
import { Button } from "@/components/ui/button";
import { Pressable } from "@/components/Pressable";
import {
  LocalAvatar,
  LocalAvatarFallback,
  LocalAvatarImage,
} from "@/components/LocalAvatar";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 justify-center items-center py-24 px-4">
      <WorkingSection />
      <NotWorkingSection />
      <HackSection />
    </main>
  );
}

function WorkingSection() {
  return (
    <div className="max-w-5xl mx-auto">
      <NativeWindReactNativeExample />
      <p className="pt-12 font-medium">
        These components are styled with tailwind classes:
      </p>
      <div className="grid md:grid-cols-3 gap-4 py-4 ">
        <div className="border border-dashed aspect-square rounded-lg grid place-items-center">
          <button className="border p-2">HTML button</button>
        </div>
        <div className="border border-dashed aspect-square rounded-lg grid place-items-center">
          <Pressable className="bg-muted p-2">
            Pressable from React-Native
          </Pressable>
        </div>
        <div className="border border-dashed aspect-square rounded-lg grid place-items-center">
          <Button>
            <Text>RNR Button</Text>
          </Button>
        </div>
      </div>
    </div>
  );
}

function NotWorkingSection() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-4">
        <Text className="text-3xl">What doesn&apos;t works?</Text>
        <p className="text-base">
          @rn-primtives which are made from React-Native components but they are
          located in the `node_modules`
        </p>
        <Text className="text-sm italic text-center opacity-60">
          Note: @rn-primitives from Shared are utilities that still work since
          they do not accept class names.
        </Text>
      </div>
      <p className="pt-12 font-medium">
        These components are attempted to be styled with tailwind classes:
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-4 ">
        <div className="border border-dashed border-destructive aspect-square rounded-lg grid place-items-center">
          <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
            <AvatarImage />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="border border-dashed border-destructive aspect-square rounded-lg grid place-items-center">
          <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}

function HackSection() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-4">
        <Text className="text-3xl">Workarounds</Text>
        <p className="text-base">
          - Using the `$$css` field in the style prop to pass tailwind classes
          to the components. See the `/components/hack-ui/avatar`
        </p>
        <p className="text-base">
          - Using the manual installation for the @rn-primitives components. See
          `/components/primitives/avatar` and `/components/LocalAvatar`
        </p>
        <Text className="text-sm italic text-center opacity-60">
          Note: @rn-primitives from Shared are utilities that still work since
          they do not accept class names. These are: `@rn-primitives/hooks`,
          `@rn-primitives/hooks`, `@rn-primitives/portal`,
          `@rn-primitives/slot`, `@rn-primitives/types`
        </Text>
      </div>
      <p className="pt-12 font-medium">
        These components are attempted to be styled with tailwind classes:
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-4 ">
        <div className="border border-dashed  aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <HackAvatar alt="Rick Sanchez's Avatar">
            <HackAvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <HackAvatarFallback>
              <Text>RS</Text>
            </HackAvatarFallback>
          </HackAvatar>
          <p>HackAvatar</p>
        </div>
        <div className="border border-dashed aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <LocalAvatar alt="Rick Sanchez's Avatar">
            <LocalAvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <LocalAvatarFallback>
              <Text>RS</Text>
            </LocalAvatarFallback>
          </LocalAvatar>
          <p>LocalAvatar</p>
        </div>
      </div>
    </div>
  );
}
