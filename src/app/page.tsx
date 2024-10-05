import { Code } from "@/components/Code";
import {
  Avatar as HackAvatar,
  AvatarFallback as HackAvatarFallback,
  AvatarImage as HackAvatarImage,
} from "@/components/hack-ui/avatar";
import {
  LocalAvatar,
  LocalAvatarFallback,
  LocalAvatarImage,
} from "@/components/LocalAvatar";
import { NativeWindReactNativeExample } from "@/components/NativeWindReactNativeExample";
import { Pressable } from "@/components/Pressable";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";

const GITHUB_AVATAR_URI =
  "https://i.pinimg.com/originals/ef/a2/8d/efa28d18a04e7fa40ed49eeb0ab660db.jpg";

export default function Home() {
  return (
    <main className="flex flex-col gap-12 justify-center items-center py-24 px-4">
      <WorkingSection />
      <NotWorkingSection />
      <WorkaroundSection />
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
          @rn-primtives npm packages cannot be styled with class names.
        </p>
        <Text className="text-sm italic text-center opacity-60">
          Note:{" "}
          <a
            href="https://rnprimitives.com#shared-primitives"
            className="hover:underline"
          >
            Shared @rn-primitives
          </a>{" "}
          are not components so they still work as intended. These are:{" "}
          <Code>@rn-primitives/hooks</Code>, <Code>@rn-primitives/portal</Code>,
          <Code>@rn-primitives/slot</Code>, <Code>@rn-primitives/types</Code>,{" "}
          <Code>@rn-primitives/utils</Code>
        </Text>
      </div>
      <p className="pt-12 font-medium">
        These components are made using the @rn-primitives/avatar npm package
        and they attempt to be styled with tailwind classes but they don&apos;t
        work:
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-4 ">
        <div className="border border-dashed border-destructive aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
            <AvatarImage />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
          <small>Avatar Fallback</small>
        </div>
        <div className="border border-dashed border-destructive aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <Avatar alt="Rick Sanchez's Avatar" className="w-24 h-24">
            <AvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <AvatarFallback>
              <Text>RS</Text>
            </AvatarFallback>
          </Avatar>
          <small>Rick Avatar</small>
        </div>
      </div>
    </div>
  );
}

function WorkaroundSection() {
  return (
    <div className="max-w-5xl mx-auto w-full">
      <div className="flex flex-col gap-4">
        <Text className="text-3xl">Workarounds</Text>
        <p className="text-base">
          - HackAvatar: Using the <Code>$$css</Code> field in the style prop to
          pass tailwind classes to the components. See the
          <Code>/components/hack-ui/avatar</Code>
        </p>
        <p className="text-base">
          - LocalAvatar: Using the manual installation for the @rn-primitives
          components. See <Code>/components/primitives/avatar</Code> and
          <Code>/components/LocalAvatar</Code>
        </p>
        <Text className="text-sm italic text-center opacity-60">
          Note:{" "}
          <a
            href="https://rnprimitives.com#shared-primitives"
            className="hover:underline"
          >
            Shared @rn-primitives
          </a>{" "}
          are not components so they still work as intended. These are:{" "}
          <Code>@rn-primitives/hooks</Code>, <Code>@rn-primitives/portal</Code>,
          <Code>@rn-primitives/slot</Code>, <Code>@rn-primitives/types</Code>,{" "}
          <Code>@rn-primitives/utils</Code>
        </Text>
      </div>
      <p className="pt-12 font-medium">
        These components are styled with tailwind classes:
      </p>
      <div className="grid md:grid-cols-2 gap-4 py-4 ">
        <div className="border border-dashed  aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <HackAvatar alt="Rick Sanchez's Avatar">
            <HackAvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <HackAvatarFallback>
              <Text>RS</Text>
            </HackAvatarFallback>
          </HackAvatar>
          <small>HackAvatar</small>
        </div>
        <div className="border border-dashed aspect-square rounded-lg flex flex-col items-center justify-center gap-2">
          <LocalAvatar alt="Rick Sanchez's Avatar">
            <LocalAvatarImage source={{ uri: GITHUB_AVATAR_URI }} />
            <LocalAvatarFallback>
              <Text>RS</Text>
            </LocalAvatarFallback>
          </LocalAvatar>
          <small>LocalAvatar</small>
        </div>
      </div>
    </div>
  );
}
