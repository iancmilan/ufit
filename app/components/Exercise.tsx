import { View, Text, FlatList, Image } from 'react-native'

const data = [
  { id: '1', kg: '32', reps: '8' },
  { id: '2', kg: '32', reps: '8' },
  { id: '3', kg: '32', reps: '8' },
  { id: '4', kg: '32', reps: '8' },
  { id: '5', kg: '32', reps: '8' },
]

export default function Exercise() {
  const renderItem = ({ item, index }) => (
    <View
      className={`flex-row bg-white ${index % 2 === 0 ? 'bg-slate-400' : ''}`}
    >
      <Text className="flex-1 p-2">{item.id}</Text>
      <Text className="flex-1 p-2">{item.kg}</Text>
      <Text className="flex-1 p-2">{item.reps}</Text>
    </View>
  )

  return (
    <View>
      <View className="flex-row items-center">
        <Image
          source={{
            uri: 'https://static.strengthlevel.com/images/illustrations/bent-over-row-1000x1000.jpg',
          }}
          alt="Bent Over Row"
          className="h-14 w-14 rounded-full"
        />
        <Text className="ml-3 font-bold text-black">Bent Over Row</Text>
      </View>
      <View className="mb-2 mt-2 flex-row">
        <Text className="flex-1 p-2 font-bold uppercase">Set</Text>
        <Text className="flex-1 p-2 font-bold uppercase">Kg</Text>
        <Text className="flex-1 p-2 font-bold uppercase">Reps</Text>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
      />
    </View>
  )
}
