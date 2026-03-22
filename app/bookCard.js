import { forwardRef } from 'react';
import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

// ✅ 必須用 forwardRef + Pressable，Link asChild 才能正確傳遞 onPress
const BookCard = forwardRef(function BookCard(
  { title, author, image, rating, onPress, ...rest },
  ref
) {
  const source = typeof image === 'string' ? { uri: image } : image;

  return (
    <Pressable ref={ref} onPress={onPress} {...rest} style={styles.card}>
      <Image source={source} style={styles.image} />
      <View style={styles.stars}>{renderStars(rating)}</View>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <Text style={styles.author} numberOfLines={1}>{author}</Text>
    </Pressable>
  );
});

export default BookCard;

const styles = StyleSheet.create({
  card: {
    width: 120,
    marginRight: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 8,
  },
  stars: {
    flexDirection: 'row',
    marginTop: 4,
  },
  title: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
    fontFamily: 'Roboto',
  },
  author: {
    color: 'gray',
    fontSize: 12,
    fontFamily: 'Roboto',
  },
});

const renderStars = (rating = 4) => {
  const rat = Number.isFinite(rating) ? rating : 4;
  return Array.from({ length: 5 }).map((_, i) => (
    <Image
      key={i}
      source={
        i < rat
          ? require('../icons/icon_star_filled.png')
          : require('../icons/icon_star_empty.png')
      }
      style={{ width: 14, height: 14, marginRight: 2 }}
    />
  ));
};