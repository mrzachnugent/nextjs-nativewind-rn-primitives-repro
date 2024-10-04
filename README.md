# Nextjs, NativeWind, and React Native Reusables

This repository aims to show the problem of using `@rn-primitives` npm packages in Nextjs.

### The problem

Components from `@rn-primitives` packages cannot be styled with tailwind class names in Nextjs. This is most likely a bundler issue where NativeWind is unable to register the `@rn-primitives` components as react-native components so it cannot apply the css interop from the class names.

## Demo

1. Clone the repository
2. Run `npm i`
3. Run `npm run dev`
4. Open your browser and go to `http://localhost:3000`
5. Play around

> The demo shows what works, what doesn't work and workarounds.

### Important files

- `/next.config.mjs`: bundler configuration
- `/src/app/page.tsx`: examples

### Affected React Native Reusables components

The following components use `@rn-primitives` components and are affected by this issue:

- Accordion
- Alert Dialog
- Aspect Ratio
- Avatar
- Checkbox
- Collapsible
- Context Menu
- Dialog
- Dropdown Menu
- Hover Card
- Label
- Menubar
- Navigation Menu
- Popover
- Progress
- Radio Group
- Select
- Separator
- Switch
- Table
- Tabs
- Toggle
- Toggle Group
- Tooltip

### React Native Reusables components that are not affected

The following components do not use `@rn-primitives` components so they can be styled with tailwind class names in Nextjs:

- Badge
- Button
- Card
- Input
- Skeleton
- Text
- Textarea
- Typography
