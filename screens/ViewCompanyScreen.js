import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Image,
} from "react-native";
import FontAwsome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/Ionicons";
import Swiper from "react-native-swiper";
import { alignSelf } from "styled-system";

const ViewCompanyScreen = ({ route, navigation }) => {
  const { name, addr, email, id, phone } = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.item}>
        {/* <Text style={styles.text_header}>{JSON.stringify(id)}</Text> */}
        <Text style={styles.text_header}>{JSON.stringify(name)}</Text>
        <View style={styles.text_footer}>
          <Text>
            <Icon name="location" />
            {JSON.stringify(addr)}
          </Text>
        </View>
        <View style={styles.text_footer}>
          <Text>
            <Icon name="mail" />
            {JSON.stringify(email)}
          </Text>
        </View>
        <View style={styles.text_footer}>
          <Text>
            <Icon name="phone-portrait-outline" />
            {JSON.stringify(phone)}
          </Text>
        </View>
        <View style={styles.sliderContainer}>
          <Swiper autoplay height={300}>
            <View style={styles.slide}>
              <Image
                source={require("../assets/mit.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
            <View style={styles.slide}>
              <Image
                source={require("../assets/aloy.jpg")}
                resizeMode="cover"
                style={styles.sliderImage}
              />
            </View>
          </Swiper>
        </View>
        <View>
          <View>
            <TouchableOpacity style={styles.apply}>
              <Text style={styles.apptext}>Apply</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={styles.apply}>
              <Text style={styles.apptext}>View Course</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewCompanyScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text_header: {
    marginLeft: 10,
    color: "#728FCE",
    fontWeight: "bold",
    fontSize: 30,
  },
  item: {
    flex: 1,
    alignSelf: "stretch",
    paddingTop: 35,
    borderRadius: 15,
  },
  text_footer: {
    marginLeft: 10,
    color: "#05375a",
    fontSize: 18,
  },
  sliderContainer: {
    height: 300,
    width: "90%",
    marginTop: 10,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 8,
    paddingBottom: 10,
  },
  slide: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "transparent",
    borderRadius: 8,
  },
  sliderImage: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 8,
  },
  apply: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "#728FCE",
    backgroundColor: "#728FCE",
    marginLeft: 20,
    width: "40%",
  },
  apptext: {
    fontSize: 20,
    padding: 10,
    alignSelf: "center",
  },
});
