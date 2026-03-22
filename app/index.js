import { Link } from 'expo-router';
import { useRef, useState } from 'react';
import { Animated, Image, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import BookCard from './bookCard';

export default function Home() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const slideAnim = useRef(new Animated.Value(-300)).current;

  const openDrawer = () => {
    setDrawerOpen(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -300,
      duration: 200,
      useNativeDriver: true,
    }).start(() => setDrawerOpen(false));
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <Modal
        visible={drawerOpen}
        transparent
        animationType="none"
        onRequestClose={closeDrawer}
      >
        <Pressable style={styles.drawerOverlay} onPress={closeDrawer}>
          <Animated.View
            style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}
          >
            <Pressable onPress={() => {}} style={{ flex: 1 }}>
              <Image
                source={require('../image/img_avatar.png')}
                style={styles.avatar}
              />
              <Text style={styles.drawerName}>May</Text>
              <View style={styles.drawerDivider} />
              {[
                { label: 'Home', icon: require('../icons/icon_home.png') },
                { label: 'Account', icon: require('../icons/icon_account.png') },
                { label: 'Setting', icon: require('../icons/icon_settings.png') },
              ].map((item) => (
                <TouchableOpacity
                  key={item.label}
                  style={styles.drawerItem}
                  onPress={closeDrawer}
                >
                  <Image source={item.icon} style={styles.drawerIcon} />
                  <Text style={styles.drawerLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </Pressable>
          </Animated.View>
        </Pressable>
      </Modal>

      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={require('../icons/icon_menu.png')} style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={require('../icons/icon_search.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Popular Books</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {popularBooks.map((book) => (
            <Link key={book.id} href={`/book/${book.id}`} asChild>
              <BookCard {...book} showStars={false} />
            </Link>
          ))}
        </ScrollView>

        <Text style={styles.sectionTitle}>Newest</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 20 }}>
          {newestBooks.map((book) => (
            <Link key={book.id} href={`/book/${book.id}`} asChild>
              <BookCard {...book} />
            </Link>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Roboto',
    marginVertical: 10,
  },
  drawerOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    flexDirection: 'row',
  },
  drawer: {
    width: '75%',
    backgroundColor: 'white',
    paddingTop: 60,
    paddingHorizontal: 24,
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginBottom: 12,
  },
  drawerName: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  drawerDivider: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginBottom: 16,
  },
  drawerItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  drawerIcon: {
    width: 22,
    height: 22,
    marginRight: 16,
    tintColor: '#666',
  },
  drawerLabel: {
    fontSize: 16,
    color: '#444',
  },
});

export const allBooks = [
  {
    id: '1',
    title: 'Fashionopolis',
    author: 'Dana Thomas',
    rating: 5,
    image: require('../image/img_book_fashinopolis.png'),
    description: 'An eye-opening investigation into the global fashion industry and its impact on our world.',
    price: 29.99,
  },
  {
    id: '2',
    title: 'Chanel',
    author: 'Patrick Mauriès',
    rating: 4,
    image: require('../image/img_book_chanel.png'),
    description: 'A comprehensive look at the iconic Chanel brand and its enduring influence on fashion.',
    price: 39.99,
  },
  {
    id: '3',
    title: 'Calligraphy',
    author: 'June & Lucy',
    rating: 4,
    image: require('../image/img_book_calligraphy.png'),
    description: 'A beautiful guide to the art of calligraphy for beginners and enthusiasts alike.',
    price: 24.99,
  },
  {
    id: '4',
    title: 'Yves Saint Laurent',
    author: 'Suzy Menkes',
    rating: 4,
    image: require('../image/img_book_ysl.png'),
    description: 'A spectacular visual journey through 40 years of haute couture from one of the best-known and most trend-setting brands in fashion.',
    price: 46.99,
  },
  {
    id: '5',
    title: 'The Book of Signs',
    author: 'Rudolf Koch',
    rating: 3,
    image: require('../image/img_book_tbos.png'),
    description: 'A collection of symbols used from earliest times to the Middle Ages by primitive peoples and early Christians.',
    price: 19.99,
  },
  {
    id: '6',
    title: 'Stitched Up',
    author: 'Tansy E. Hoskins',
    rating: 3,
    image: require('../image/img_book_stitchedup.png'),
    description: 'Explores the political economy of fashion and the conditions of workers in the global garment industry.',
    price: 22.99,
  },
];

const popularBooks = allBooks.slice(0, 3);
const newestBooks = allBooks.slice(3, 6);