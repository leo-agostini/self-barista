import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import React from "react";
import { BottomTabBar } from "./components/BottomTabBar";
import Home from "./screens/Home/Home";

const { Navigator, Screen } = createBottomTabNavigator();
export function Navigation() {
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={{
          headerTitleAlign: "center",
        }}
        tabBar={(props) => <BottomTabBar {...props} />}
      >
        <Screen name="Home" component={Home} />
      </Navigator>
    </NavigationContainer>
  );
}
