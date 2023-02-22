import { Image, Text, View, ScrollView } from "react-native";
import { AllStyles } from "../Styles/AllStyles";

export default function Demo({ name }) {
  const Avatars = [
    require("../Assets/IMG/Avatar1.png"),
    require("../Assets/IMG/Avatar2.png"),
    require("../Assets/IMG/Avatar3.png"),
  ];
  return (
    <View style={AllStyles.DemoView}>
      <Text style={AllStyles.DemoText}>Some text</Text>
      <ScrollView>
        <View style={AllStyles.FlexColumn}>
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
        </View>

        <ScrollView horizontal>
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
          <Image
            source={Avatars[2]}
            style={[AllStyles.imageOne, AllStyles.imageTwo]}
          />
        </ScrollView>
      </ScrollView>
    </View>
  );
}
