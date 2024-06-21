import { StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from "react-native";

interface MoviesCardProps {
  movieURL: any;
}

const MoviesCard = ({movieURL}: MoviesCardProps) => {
  return (
    <TouchableOpacity>
      <Image 
        style={styles.img}
        source={movieURL} />
    </TouchableOpacity>
  );
};

export default MoviesCard;

const styles = StyleSheet.create({
  img: {
    marginRight: 20,
  },
});
