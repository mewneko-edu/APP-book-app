import { View, Text } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  // 用 id 查找對應書籍資料
  return (
    <View>
      <Text>Book ID: {id}</Text>
    </View>
  );
}