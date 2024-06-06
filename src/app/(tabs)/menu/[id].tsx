import { Stack, useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native'

export default function Product() {
    const { id } = useLocalSearchParams();
    return (
        <View>
            <Stack.Screen options={{title:`Details ${id}`}}/>
            <Text>product {id}</Text>
        </View>
    )
}