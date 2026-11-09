import { FlatList, StyleSheet } from 'react-native';
import CategoryItem from './CategoryItem';

const Categories = ({ categories, setTerm, term }) => (
  <FlatList
    data={categories}
    renderItem={({ item, index }) => (
      <CategoryItem
        name={item.name}
        imageURL={item.imageURL}
        index={index}
        isActive={item.name === term}
        handlePress={() => setTerm(item.name)}
      />
    )}
    horizontal
    showsHorizontalScrollIndicator={false}
    keyExtractor={(category) => category.name}
    contentContainerStyle={styles.list}
  />
);

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});

export default Categories;
