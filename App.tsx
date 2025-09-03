import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { BlurView } from "expo-blur";
import { FontAwesome } from "@expo/vector-icons";

export default function NowPlaying() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Background */}
      <ImageBackground
        source={{
          uri: "data:image/jpeg;base64,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",
        }}
        style={styles.background}
        blurRadius={20}
      >
        {/* Glassmorphism Overlay */}
        <BlurView intensity={60} tint="dark" style={styles.glassPanel}>
          {/* Album Art */}
          <View style={styles.albumContainer}>
            <ImageBackground
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBSYx9N6JgP9sUpF3GMgZgvHgcOB6DrfPwcXhORewM3JJ9kM3_yX51-kcBJWWwZFMXHqk&usqp=CAU",
              }}
              style={styles.albumArt}
              imageStyle={{ borderRadius: 24 }}
            />
          </View>

          {/* Song Info */}
          <Text style={styles.songTitle}>Midnight Lo-Fi</Text>
          <Text style={styles.artist}>DJ Relax</Text>

          {/* Playback Controls */}
          <View style={styles.controls}>
            <TouchableOpacity>
              <FontAwesome name="backward" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.playButton}>
              <FontAwesome name="play" size={28} color="white" />
            </TouchableOpacity>

            <TouchableOpacity>
              <FontAwesome name="forward" size={28} color="white" />
            </TouchableOpacity>
          </View>

          {/* Progress Bar */}
          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          {/* Extra Controls */}
          <View style={styles.bottomControls}>
            <TouchableOpacity>
              <FontAwesome name="heart-o" size={22} color="white" />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="repeat" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </BlurView>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  background: { flex: 1, resizeMode: "cover" },
  glassPanel: {
    flex: 1,
    margin: 20,
    borderRadius: 30,
    padding: 20,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  albumContainer: {
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 8 },
    shadowRadius: 12,
    elevation: 8,
  },
  albumArt: {
    width: 240,
    height: 240,
    borderRadius: 24,
  },
  songTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
  },
  artist: {
    fontSize: 16,
    color: "rgba(255,255,255,0.8)",
    marginBottom: 20,
  },
  controls: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    justifyContent: "space-between",
    width: "60%",
  },
  playButton: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderRadius: 50,
    padding: 18,
    shadowColor: "#000",
    shadowOpacity: 0.4,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 8,
    elevation: 6,
  },
  progressBar: {
    width: "90%",
    height: 6,
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 3,
    overflow: "hidden",
    marginTop: 10,
  },
  progressFill: {
    width: "40%",
    height: "100%",
    backgroundColor: "white",
  },
  bottomControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "40%",
    marginTop: 20,
  },
});

