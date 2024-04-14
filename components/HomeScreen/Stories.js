import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { USERS } from "../../data/users";
import { LinearGradient } from "expo-linear-gradient";

const Stories = () => {
  console.log(USERS);
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ justifyContent: "space-evenly" }}
      >
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            {/* <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}> */}
            <Image
              source={require("../../assets/photos/profilePhotos/profile-photo.jpeg")}
              style={styles.stories}
            />
            {/* </View>
            </LinearGradient> */}
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>Your story</Text>
        </View>
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../assets/photos/profilePhotos/profile-photo2.jpeg")}
                  style={styles.storiesPhoto}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>
            {USERS[1].userName.length > 11
              ? USERS[1].userName.slice(0, 10).concat("...")
              : USERS[1].userName}
          </Text>
        </View>
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../assets/photos/profilePhotos/profile-photo3.jpeg")}
                  style={styles.storiesPhoto}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>
            {USERS[2].userName.length > 11
              ? USERS[2].userName.slice(0, 10).concat("...")
              : USERS[2].userName}
          </Text>
        </View>
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../assets/photos/profilePhotos/profile-photo4.jpeg")}
                  style={styles.storiesPhoto}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>
            {USERS[3].userName.length > 11
              ? USERS[3].userName.slice(0, 10).concat("...")
              : USERS[3].userName}
          </Text>
        </View>
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../assets/photos/profilePhotos/profile-photo5.jpeg")}
                  style={styles.storiesPhoto}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>
            {USERS[4].userName.length > 11
              ? USERS[4].userName.slice(0, 10).concat("...")
              : USERS[4].userName}
          </Text>
        </View>
        <View style={styles.storiesContainer}>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb097a", "#ebb609"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.linearGradient}
            >
              <View style={styles.innerContainer}>
                <Image
                  source={require("../../assets/photos/profilePhotos/profile-photo6.jpeg")}
                  style={styles.storiesPhoto}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <Text style={styles.storiesUserName}>
            {USERS[5].userName.length > 11
              ? USERS[5].userName.slice(0, 10).concat("...")
              : USERS[5].userNamess}
          </Text>
        </View>
        {/* {USERS.map((user) => (
          <Text>{user.userName}</Text>
        ))} */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 13,
  },
  stories: {
    width: 87,
    height: 87,
    resizeMode: "cover",
    marginLeft: 15,
    borderRadius: 50,
  },
  storiesContainer: {
    alignItems: "center",
  },
  storiesPhoto: {
    width: 80,
    height: 80,
    marginLeft: 0.6,
    resizeMode: "cover",

    borderRadius: 50,
  },
  storiesUserName: {
    marginTop: 10,
    marginLeft: 10,
  },
  linearGradient: {
    height: 88,
    width: 88,
    marginLeft: 15,
    borderRadius: 50, // <-- Outer Border Radius
  },
  innerContainer: {
    borderRadius: 40, // <-- Inner Border Radius
    flex: 1,
    margin: 3, // <-- Border Width
    backgroundColor: "#fff",
    justifyContent: "center",
  },
});

export default Stories;
