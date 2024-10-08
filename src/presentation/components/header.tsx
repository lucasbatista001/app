import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';

const Header = ({ navigation }) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [visibleSubMenus, setVisibleSubMenus] = useState({}); // State to store submenu visibility

  const menuItems = [
    { id: '1', title: 'SBCPA', screen: 'SBCPA' },
    { id: '2', title: 'Exposições', screen: 'ProfileScreen', hasSubMenu: true },
    { id: '3', title: 'Provas/Fotos', screen: 'SettingsScreen' },
    { id: '4', title: 'Resoluções', screen: 'LogoutScreen' },
  ];

  const subMenuItems = [
    { id: '1', title: 'Próximos Eventos', screen: 'ChangePasswordScreen' },
    { id: '2', title: 'Notificações', screen: 'NotificationsScreen' },
  ];

  const renderMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.menuItem}
      onPress={() => {
        if (item.hasSubMenu) {
          // Toggle submenu visibility for this item
          setVisibleSubMenus(prev => ({
            ...prev,
            [item.id]: !prev[item.id],
          }));
        } else {
          setIsMenuVisible(false);
          navigation.navigate(item.screen);
        }
      }}
    >
      <Text style={styles.menuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const renderSubMenuItem = ({ item }) => (
    <TouchableOpacity
      style={styles.subMenuItem}
      onPress={() => {
        setIsMenuVisible(false);
        setVisibleSubMenus({}); // Close all submenus
        navigation.navigate(item.screen);
      }}
    >
      <Text style={styles.subMenuText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const toggleMenu = () => {
    setIsMenuVisible(prev => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/favicon.png')} style={styles.logo} />
        <Text style={styles.title}>SBCPA</Text>
      </View>

      <TouchableOpacity
        onPress={toggleMenu}
        style={styles.hamburgerButton}
      >
        <Text style={styles.hamburgerIcon}>☰</Text>
      </TouchableOpacity>

      {isMenuVisible && (
        <View style={styles.menuContainer}>
          <FlatList
            data={menuItems}
            renderItem={renderMenuItem}
            keyExtractor={item => item.id}
            style={styles.menuList}
          />
          {menuItems.map(item => (
            item.hasSubMenu && visibleSubMenus[item.id] && ( // Show submenu if visible
              <View key={item.id} style={styles.subMenuContainer}>
                <FlatList
                  data={subMenuItems} // Use the array of submenus
                  renderItem={renderSubMenuItem}
                  keyExtractor={subItem => subItem.id}
                />
              </View>
            )
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    position: 'relative',
    zIndex: 10,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  hamburgerButton: {
    padding: 10,
    backgroundColor: '#7AB730',
    borderRadius: 5,
  },
  hamburgerIcon: {
    fontSize: 24,
    color: '#fff',
  },
  menuContainer: {
    position: 'absolute',
    top: 90,
    left: 0,
    right: 0,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    padding: 10,
    zIndex: 9999,
  },
  menuList: {
    width: '100%',
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuText: {
    fontSize: 18,
  },
  subMenuContainer: {
    backgroundColor: '#e8e8e8',
    borderRadius: 5,
    marginTop: 10,
    padding: 10,
  },
  subMenuItem: {
    paddingVertical: 10,
  },
  subMenuText: {
    fontSize: 16,
  },
});

export default Header;
