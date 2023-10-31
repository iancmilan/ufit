import { Image, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default function Community() {
  return (
    <View className="flex-1 bg-[#11141B] px-6 py-6 ">
      <View className="min-w-full flex-row">
        <View>
          <Image
            source={{
              uri: 'https://pbs.twimg.com/profile_images/1633088018985697282/C_fU6nYO_400x400.jpg',
            }}
            alt="Profile pic"
            className="h-14 w-14 rounded-full"
          />
        </View>
        <View className="shrink">
          <View className="flex-row">
            <Text className="font-bold text-[#fefefe]">Ian Carlos Milan</Text>
            <Text className="text-[#fefefe]">@iancmilan</Text>
          </View>
          <Text className="text-[#fefefe]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            velit necessitatibus earum dolores et totam, possimus odit odio
            exercitationem, quisquam ex maiores inventore. Aperiam consequatur
            beatae veniam sint numquam mollitia!
          </Text>
          <View className="flex-row">
            <Ionicons name="chatbubble-outline" size={20} color={'#66CD7C'} />
            <Ionicons name="heart-outline" size={20} color={'#66CD7C'} />
          </View>
        </View>
      </View>
    </View>
  )
}
