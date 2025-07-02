import { XStack } from "tamagui";
import { Avatar } from "./Avatar";

export const Header = () => {
  return (
    <XStack
      paddingHorizontal="$4"
      paddingVertical="$2"
      height="$10"
      alignItems="flex-end"
      borderBottomWidth="$0.5"
      borderBottomColor="$borderColor"
    >
      <Avatar />
      Olá
    </XStack>
  );
};
