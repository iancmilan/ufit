import { Stack } from 'expo-router'

export default function MealsLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="meals" options={{ title: 'Dieta' }} />
    </Stack>
  )
}
