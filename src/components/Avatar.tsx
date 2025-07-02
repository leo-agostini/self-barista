import { Avatar as TamaguiAvatar, XStack } from "tamagui";

export const Avatar = () => {
  return (
    <XStack alignItems="center">
      <TamaguiAvatar circular size="$4">
        <TamaguiAvatar.Image
          accessibilityLabel="Cam"
          src="https://images.unsplash.com/photo-1548142813-c348350df52b?&w=150&h=150&dpr=2&q=80"
        />
        <TamaguiAvatar.Fallback backgroundColor="$blue10" />
      </TamaguiAvatar>
    </XStack>
  );
};
