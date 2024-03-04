import {Pressable, StyleSheet, Text, View} from 'react-native';

const Item = props => {
  return (
    <View style={styles.container}>
      <Pressable
        android_ripple={styles.androidRipple}
        style={({pressed}) => pressed && styles.pressed}
        onPress={() => props.onSelect(props.data.key)}>
        <Text style={styles.text}>{props.data.name}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 8,
    backgroundColor: '#323a4f',
    borderRadius: 6,
  },
  text: {
    color: 'white',
    padding: 8,
    textAlign: 'center',
    fontSize: 16,
  },
  androidRipple: {
    color: '#b2bccf',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default Item;
