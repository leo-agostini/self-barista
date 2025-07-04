import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
  BottomNavigation,
  BottomNavigationTab,
  Icon,
} from "@ui-kitten/components";
import { useTheme } from "../hooks/useTheme";

const tabs = [
  {
    title: "Home",
    icon: "home-outline",
  },
  {
    title: "Receipts",
    icon: "file-outline",
  },
  {
    title: "Extraction",
    icon: "plus-circle-outline",
  },
  {
    title: "Evolution",
    icon: "trending-up-outline",
  },
];

export const BottomTabBar = ({ navigation, state }: BottomTabBarProps) => {
  const { theme } = useTheme();
  const { routes, index } = state;

  const activeColor = theme["color-primary-500"];
  const inactiveColor = theme["color-basic-500"];

  return (
    <BottomNavigation
      selectedIndex={state.index}
      indicatorStyle={{
        backgroundColor: activeColor,
      }}
      onSelect={(index) => navigation.navigate(state.routeNames[index])}
    >
      {tabs.map(({ title, icon }) => {
        const isActive = routes[index].name === title;
        const iconName = isActive ? icon.replace("-outline", "") : icon;
        return (
          <BottomNavigationTab
            key={title}
            title={title}
            style={{ borderColor: `red`, outlineColor: "red" }}
            icon={
              <Icon
                fill={isActive ? activeColor : inactiveColor}
                name={iconName}
              />
            }
          />
        );
      })}
    </BottomNavigation>
  );
};
