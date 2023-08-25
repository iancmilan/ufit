import { Stack } from 'expo-router'

export default function CommunityLayout() {
  return (
    <Stack
      screenOptions={{
        headerBackTitleVisible: false,
        headerStyle: { backgroundColor: '#2C2E33' },
        headerTintColor: '#fefefe',
      }}
    >
      <Stack.Screen name="community" options={{ title: 'Comunidade' }} />
    </Stack>
  )
}
