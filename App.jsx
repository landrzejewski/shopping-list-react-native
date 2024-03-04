import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import ItemInput from './components/ItemInput';
import Item from './components/Item';

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = item => {
    if (item) {
      setItems(currentItems => [
        ...currentItems,
        {
          key: Math.random(),
          name: item,
        },
      ]);
    }
  };

  const removeItem = itemKey =>
    setItems(currentItems => currentItems.filter(item => itemKey !== item.key));

  return (
    <SafeAreaView style={styles.container}>
      <ItemInput onItemAdd={addItem} />
      <View style={styles.itemsList}>
        <FlatList
          data={items}
          renderItem={data => <Item data={data.item} onSelect={removeItem} />}
          /*keyExtractor={(data, index) => data.item.key}*/
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  itemsList: {
    flex: 6,
  },
});

export default App;
