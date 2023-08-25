import { View, Text, FlatList, Image } from 'react-native'

const data = [
  { id: '1', kg: '32', reps: '8' },
  { id: '2', kg: '32', reps: '8' },
  { id: '3', kg: '32', reps: '8' },
  { id: '4', kg: '32', reps: '8' },
]

export default function Exercise() {
  const renderItem = ({ item, index }) => (
    <View
      className={`flex-row bg-[#2C2E33] ${
        index % 2 === 0 ? 'bg-[#11141B]' : ''
      }`}
    >
      <Text className="flex-1 p-2 text-[#fefefe]">{item.id}</Text>
      <Text className="flex-1 p-2 text-[#fefefe]">{item.kg}</Text>
      <Text className="flex-1 p-2 text-[#fefefe]">{item.reps}</Text>
    </View>
  )

  return (
    <View className="mb-8 rounded-md bg-[#2C2E33]">
      <View className="mb-2 mt-3 flex-row items-center justify-center">
        <Image
          source={{
            uri: 'https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg',
          }}
          alt="Bent Over Row"
          className="h-14 w-14 rounded-full"
        />
        <Text className="ml-3 font-bold text-[#fefefe]">Bent Over Row</Text>
      </View>
      <View className="mb-2 mt-2 flex-row">
        <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
          Set
        </Text>
        <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
          Kg
        </Text>
        <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
          Reps
        </Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        className="rounded-b-md"
      />
    </View>
  )
}
