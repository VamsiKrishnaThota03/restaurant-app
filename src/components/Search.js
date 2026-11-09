import { useState } from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, elevation } from '../common/styles';

const Search = ({ setTerm }) => {
  const [input, setInput] = useState('');

  const submit = () => {
    const term = input.trim();
    if (!term) return;
    setTerm(term);
    setInput('');
  };

  return (
    <View style={[styles.container, elevation]}>
      <FontAwesome name="search" size={18} color={colors.muted} />
      <TextInput
        placeholder="Search restaurants or food"
        placeholderTextColor={colors.muted}
        style={styles.input}
        onChangeText={setInput}
        onSubmitEditing={submit}
        returnKeyType="search"
        value={input}
        accessibilityLabel="Search restaurants or food"
      />
      {input.length > 0 && (
        <Pressable onPress={() => setInput('')} accessibilityRole="button" accessibilityLabel="Clear search" hitSlop={10}>
          <FontAwesome name="times-circle" size={18} color={colors.muted} />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
  },
  input: {
    flex: 1,
    fontSize: 16,
    marginLeft: 10,
    color: colors.text,
  },
});

export default Search;
