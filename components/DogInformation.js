import {View, Text} from 'react-native'

export default function DogInformation({ title, value, Icon }) {
  return (
    <View style={{display: "flex", alignItems: "center", paddingHorizontal: 10}}>
        <View style={{backgroundColor:"#c3e6b8", padding: 5, borderRadius: "100%", marginBottom: 5}}>
            <Icon color={"#0b3b00"}/>
        </View>
        <Text>{title}</Text>
        <Text>{value ? "Sim" : "Não"}</Text>
    </View>
  );
}