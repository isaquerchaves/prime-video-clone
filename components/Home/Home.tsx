import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import PrimeVideoLogo from "../../assets/images/prime_video.png";
import AmazonLogo from "../../assets/images/amazon_logo.png";
import MovieTheWhell from "../../assets/images/movies/the_wheel_of_time.png";
import { MOVIESWATCHING } from "@/utils/moviesWatching";
import { MOVIESCRIME } from "@/utils/moviesCrimes";
import { MOVIESWATCH } from "@/utils/moviesWatch";
import MoviesCard from "../MoviesCard";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={PrimeVideoLogo} />
        <Image source={AmazonLogo} style={styles.amazonLogoImg} />
      </View>

      <View style={styles.category}>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>TV Shows</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Movies</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.categoryText}>Kids</Text>
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.contentMovies}>
      <TouchableOpacity style={styles.movieImageThumbnail}>
        <Image source={MovieTheWhell} />
      </TouchableOpacity>

      <Text style={styles.movieTitle}>Continue Assistindo</Text>
      <FlatList
        data={MOVIESWATCHING}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contantList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.movieTitle}>Filmes Policiais</Text>
      <FlatList
        data={MOVIESCRIME}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contantList}
        showsHorizontalScrollIndicator={false}
      />

      <Text style={styles.movieTitle}>Assista no seu idioma</Text>
      <FlatList
        data={MOVIESWATCH}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MoviesCard movieURL={item.moviesURL} />}
        horizontal
        contentContainerStyle={styles.contantList}
        showsHorizontalScrollIndicator={false}
      /> 
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#232F3E",
    alignItems: "flex-start",
  },

  header: {
    width: "100%",
    paddingTop: 80,
    alignItems: "center",
    justifyContent: "center",
  },

  amazonLogoImg: {
    marginTop: -32,
    marginLeft: 30,
  },

  category: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 30,
    marginBottom: 15,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#FFf",
  },

  contentMovies: {},

  movieImageThumbnail: {
    width: "100%",
    alignItems: "center",
  },

  movieTitle: {
    color: "#ffff",
    fontSize: 18,
    fontWeight: "700",
    padding: 15,
  },

  contantList: {
    paddingLeft: 18,
    paddingRight: 30,
  },
});
