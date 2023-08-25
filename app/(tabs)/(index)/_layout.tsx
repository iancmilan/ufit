import { Stack } from 'expo-router'

export default function IndexLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#2C2E33' },
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name="index" options={{ title: 'Início' }} />
    </Stack>
  )
}
