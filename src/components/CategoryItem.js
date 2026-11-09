import { Image, Pressable, StyleSheet, Text } from 'react-native';
import { colors, elevation } from '../common/styles';

const CategoryItem = ({ name, imageURL, index, isActive, handlePress }) => (
  <Pressable
    onPress={handlePress}
    accessibilityRole="button"
    accessibilityState={{ selected: isActive }}
    accessibilityLabel={`${name} restaurants`}
    style={({ pressed, hovered }) => [
      styles.container,
      elevation,
      index > 0 && { marginLeft: 12 },
      isActive ? styles.active : null,
      (pressed || hovered) && !isActive ? styles.hover : null,
    ]}
  >
    <Image style={styles.image} source={imageURL} />
    <Text style={[styles.label, isActive && styles.activeLabel]}>{name}</Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    width: 84,
    height: 104,
    backgroundColor: colors.surface,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  hover: {
    borderColor: colors.primary,
  },
  active: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  image: {
    width: 52,
    height: 52,
    marginBottom: 6,
  },
  label: {
    fontWeight: '700',
    color: colors.text,
    fontSize: 13,
  },
  activeLabel: {
    color: '#fff',
  },
});

export default CategoryItem;
