import { Tabs } from 'expo-router'

export default function TabRoutesLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: 'Home' }} />
      <Tabs.Screen name="community" options={{ title: 'Community' }} />
      <Tabs.Screen name="workout" options={{ title: 'Workout' }} />
      <Tabs.Screen name="meals" options={{ title: 'Meals' }} />
    </Tabs>
  )
}
