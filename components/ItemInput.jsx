import {Button, StyleSheet, TextInput, View} from 'react-native';
import {useState} from 'react';

const ItemInput = props => {
  const [item, setItem] = useState('');

  const addItem = () => {
    props.onItemAdd(item);
    setItem('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Podaj nazwę"
        onChangeText={setItem}
        value={item}
      />
      <Button title="Dodaj" onPress={addItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#cfcfcf',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
});

export default ItemInput;
