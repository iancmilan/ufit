import { View, Text, FlatList, Image } from 'react-native'

interface Set {
  set: number
  kg: number
  reps: number
  time: number
}

interface Exercise {
  id: number
  name: string
  imgUrl: string
  muscleGroupId: number
  workoutId: number
  exerciseTypeId: number
  sets: Set[]
}

// exerciseType

// 1 = "Weight & Reps"
// 2 = "Duration"

export default function Exercise(exercise: Exercise) {
  function secondsToMinutes(seconds: number) {
    return (
      (seconds - (seconds %= 60)) / 60 + (seconds > 9 ? ':' : ':0') + seconds
    )
  }

  const renderItemTypeId1 = ({ item, index }) => (
    <View
      className={`flex-row bg-[#2C2E33] ${
        index % 2 === 0 ? 'bg-[#11141B]' : ''
      }`}
    >
      <Text className="flex-1 p-2 text-[#fefefe]">{item.set}</Text>
      <Text className="flex-1 p-2 text-[#fefefe]">{item.kg}</Text>
      <Text className="flex-1 p-2 text-[#fefefe]">{item.reps}</Text>
    </View>
  )

  const renderItemTypeId2 = ({ item, index }) => (
    <View
      className={`flex-row bg-[#2C2E33] ${
        index % 2 === 0 ? 'bg-[#11141B]' : ''
      }`}
    >
      <Text className="flex-1 p-2 text-[#fefefe]">{item.set}</Text>
      <Text className="flex-1 p-2 text-[#fefefe]">
        {secondsToMinutes(item.time)}
      </Text>
    </View>
  )

  return (
    <View className="mb-8 rounded-md border border-[#2C2E33] bg-[#2C2E33]">
      <View className="mb-2 mt-3 flex-row items-center justify-start p-2">
        <Image
          source={{
            uri: exercise.imgUrl,
          }}
          alt="Bent Over Row"
          className="h-14 w-14 rounded-full"
        />
        <Text className="ml-3 font-bold text-[#fefefe]">{exercise.name}</Text>
      </View>
      <View className="mb-2 mt-2 flex-row">
        {exercise.exerciseTypeId === 1 ? (
          <>
            <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
              Set
            </Text>
            <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
              Kg
            </Text>
            <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
              Reps
            </Text>
          </>
        ) : exercise.exerciseTypeId === 2 ? (
          <>
            <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
              Set
            </Text>
            <Text className="flex-1 p-2 font-bold uppercase text-[#fefefe]">
              Duration
            </Text>
          </>
        ) : null}
      </View>
      <FlatList
        data={exercise.sets}
        renderItem={
          exercise.exerciseTypeId === 1
            ? renderItemTypeId1
            : exercise.exerciseTypeId === 2
            ? renderItemTypeId2
            : null
        }
        keyExtractor={(item) => item.set}
        scrollEnabled={false}
        className="flex-1 rounded-b-md"
      />
    </View>
  )
}
