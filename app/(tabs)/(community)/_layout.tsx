import { Stack } from 'expo-router'

export default function CommunityLayout() {
  return (
    <Stack screenOptions={{ headerBackTitleVisible: false }}>
      <Stack.Screen name="community" options={{ title: 'Comunidade' }} />
    </Stack>
  )
}
