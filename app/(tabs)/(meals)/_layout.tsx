import { Stack } from 'expo-router'

export default function MealsLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#2C2E33' },
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name="meals" options={{ title: 'Dieta' }} />
    </Stack>
  )
}
