import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { allBooks } from '../index'; // ✅ 從 index 引入統一書籍資料

export default function BookDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const [bookmarked, setBookmarked] = useState(false);

  // ✅ 根據 id 找到對應書籍
  const book = allBooks.find((b) => b.id === id);

  if (!book) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={{ padding: 20 }}>找不到書籍資料</Text>
      </SafeAreaView>
    );
  }

  const source = typeof book.image === 'string' ? { uri: book.image } : book.image;

  return (
    <SafeAreaView style={styles.container}>
      {/* Header：返回 + 書籤 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.headerBtn}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setBookmarked(!bookmarked)} style={styles.headerBtn}>
          <Image
            source={
              bookmarked
                ? require('../../icons/icon_nav_bookmark_actived.png')
                : require('../../icons/icon_nav_bookmark.png')
            }
            style={styles.bookmarkIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* 書封 */}
        <View style={styles.imageContainer}>
          <Image source={source} style={styles.bookImage} />
        </View>

        {/* 書名 */}
        <Text style={styles.title}>{book.title}</Text>

        {/* 作者 */}
        <Text style={styles.author}>{book.author}</Text>

        {/* 評分列 */}
        <View style={styles.ratingRow}>
          {renderStars(book.rating)}
          <Text style={styles.ratingText}>
            {book.rating.toFixed(1)} / 5.0
          </Text>
        </View>

        {/* 簡介 */}
        <Text style={styles.description}>{book.description}</Text>

        {/* 購買按鈕 */}
        <TouchableOpacity style={styles.buyBtn}>
          <Text style={styles.buyText}>BUY NOW FOR ${book.price.toFixed(2)}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const renderStars = (rating = 4) => {
  const rat = Number.isFinite(rating) ? rating : 4;
  return Array.from({ length: 5 }).map((_, i) => (
    <Image
      key={i}
      source={
        i < rat
          ? require('../../icons/icon_star_filled.png')
          : require('../../icons/icon_star_empty.png')
      }
      style={{ width: 18, height: 18, marginRight: 3 }}
    />
  ));
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  headerBtn: {
    padding: 4,
  },
  backArrow: {
    fontSize: 36,
    color: '#333',
    lineHeight: 38,
  },
  bookmarkIcon: {
    width: 24,
    height: 24,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 40,
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    marginBottom: 24,
    width: '100%',
    alignItems: 'center',
  },
  bookImage: {
    width: 200,
    height: 280,
    borderRadius: 8,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 6,
    fontFamily: 'Roboto',
  },
  author: {
    fontSize: 14,
    color: 'gray',
    textAlign: 'center',
    marginBottom: 10,
    fontFamily: 'Roboto',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  ratingText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#555',
  },
  description: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    textAlign: 'left',
    marginBottom: 32,
    fontFamily: 'Roboto',
  },
  buyBtn: {
    backgroundColor: '#6C3CE1',
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 32,
    width: '100%',
    alignItems: 'center',
  },
  buyText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
    letterSpacing: 0.5,
  },
});