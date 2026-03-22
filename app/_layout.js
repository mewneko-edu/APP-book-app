import { Tabs } from 'expo-router';
import { Image } from 'react-native';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../icons/icon_home_actived.png')
                  : require('../icons/icon_home.png')
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="wishlist"
        options={{
          title: 'Wishlist',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../icons/icon_nav_bookmark_actived.png')
                  : require('../icons/icon_nav_bookmark.png')
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="mybooks"
        options={{
          title: 'My books',
          tabBarIcon: ({ focused, color, size }) => (
            <Image
              source={
                focused
                  ? require('../icons/icon_mybook_actived.png')
                  : require('../icons/icon_mybook.png')
              }
              style={{ width: size, height: size }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="bookCard"
        options={{
          href: null, // 不顯示在 tab bar
        }}
      />
      <Tabs.Screen
        name="book/[id]"
        options={{
          href: null, // 不顯示在 tab bar
        }}
      />
    </Tabs>
  );
}