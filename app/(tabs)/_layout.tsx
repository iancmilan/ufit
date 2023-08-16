import { Tabs } from 'expo-router'

import { Ionicons } from '@expo/vector-icons'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
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
          title: 'Comunidade',
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
          title: 'Treino',
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
          title: 'Dieta',
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
