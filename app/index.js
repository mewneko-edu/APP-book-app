import { StyleSheet, Text, View, ScrollView } from "react-native";
import BookCard from './bookCard';
import { Link } from 'expo-router';
import { Image } from 'react-native';

export default function Home() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

      <View style={styles.header}>
        <Image source={require('../icons/icon_menu.png')} style={styles.icon} />
        <Image source={require('../icons/icon_search.png')} style={styles.icon} />
      </View>

      <Text style={styles.title}>Popular Books</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {popularBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`} asChild>
            <BookCard {...book} />
          </Link>
        ))}
      </ScrollView>

      <Text style={styles.title}>Newest</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {newestBooks.map((book) => (
          <Link key={book.id} href={`/book/${book.id}`} asChild>
            <BookCard {...book} />
          </Link>
        ))}
      </ScrollView>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: {
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
    marginVertical: 10,
  },
});

const popularBooks = [
  {
    id: "1",
    title: "Fashionopolis",
    author: "Dana Thomas",
    rating: 1,
    image: require('../image/img_book_fashinopolis.png'),
  },
  {
    id: "2",
    title: "Chanel",
    author: "Patrick Mauriès",
    rating: 2,
    image: require('../image/img_book_chanel.png'),
  },
  {
    id: "3",
    title: "Calligraphy",
    author: "June & Lucy",
    rating: 3,
    image: require('../image/img_book_calligraphy.png'),
  },
];

const newestBooks = [
  {
    id: "4",
    title: "Yves Saint Laurent",
    author: "Suzy Menkes",
    rating: 4,
    image: require('../image/img_book_ysl.png'),
  },
  {
    id: "5",
    title: "The Book of Signs",
    author: "Rudolf Koch",
    rating: 3,
    image: require('../image/img_book_tbos.png'),
  },
  {
    id: "6",
    title: "Stitched Up",
    author: "Tansy E. Hoskins",
    rating: 3,
    image: require('../image/img_book_stitchedup.png'),
  },
];