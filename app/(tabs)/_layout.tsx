import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="home" size={size} color={color} />
            ) : (
              <Ionicons name="home-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: 'Community',
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="people" size={size} color={color} />
            ) : (
              <Ionicons name="people-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout',
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="barbell" size={size} color={color} />
            ) : (
              <Ionicons name="barbell-outline" size={size} color={color} />
            ),
        }}
      />
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
          tabBarIcon: ({ size, color, focused }) =>
            focused ? (
              <Ionicons name="restaurant" size={size} color={color} />
            ) : (
              <Ionicons name="restaurant-outline" size={size} color={color} />
            ),
        }}
      />
    </Tabs>
  )
}
