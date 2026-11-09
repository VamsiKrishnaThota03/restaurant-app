import { Image, Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors, elevation } from '../common/styles';

const Stars = ({ rating = 0 }) => {
  const full = Math.floor(rating);
  const half = rating - full >= 0.5;
  return (
    <View style={styles.stars} accessibilityLabel={`Rated ${rating} out of 5`}>
      {[0, 1, 2, 3, 4].map((i) => (
        <FontAwesome
          key={i}
          name={i < full ? 'star' : i === full && half ? 'star-half-o' : 'star-o'}
          size={13}
          color={colors.star}
        />
      ))}
    </View>
  );
};

const RestaurantItem = ({ restaurant }) => {
  const categories = (restaurant.categories || []).map((c) => c.title).slice(0, 2).join(' · ');
  const address = restaurant.location?.address1;
  const distanceKm = restaurant.distance ? (restaurant.distance / 1000).toFixed(1) : null;

  return (
    <Pressable
      onPress={() => restaurant.url && Linking.openURL(restaurant.url)}
      accessibilityRole="link"
      accessibilityLabel={`${restaurant.name}, open on Yelp`}
      style={({ pressed, hovered }) => [styles.container, elevation, (pressed || hovered) && styles.hover]}
    >
      {restaurant.image_url ? (
        <Image source={{ uri: restaurant.image_url }} style={styles.image} accessibilityIgnoresInvertColors />
      ) : (
        <View style={[styles.image, styles.placeholder]}>
          <FontAwesome name="cutlery" size={24} color={colors.muted} />
        </View>
      )}
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {restaurant.name}
        </Text>
        <View style={styles.row}>
          <Stars rating={restaurant.rating} />
          <Text style={styles.meta}>
            {restaurant.rating?.toFixed?.(1)} ({restaurant.review_count ?? 0})
          </Text>
          {restaurant.price ? <Text style={styles.price}>{restaurant.price}</Text> : null}
        </View>
        {categories ? (
          <Text style={styles.meta} numberOfLines={1}>
            {categories}
          </Text>
        ) : null}
        {(address || distanceKm) && (
          <Text style={styles.meta} numberOfLines={1}>
            {[address, distanceKm && `${distanceKm} km`].filter(Boolean).join(' · ')}
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    marginHorizontal: 20,
    marginBottom: 12,
    padding: 12,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hover: {
    borderColor: colors.primary,
  },
  image: {
    width: 84,
    height: 84,
    borderRadius: 10,
  },
  placeholder: {
    backgroundColor: colors.page,
    alignItems: 'center',
    justifyContent: 'center',
  },
  info: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  stars: {
    flexDirection: 'row',
    marginRight: 6,
  },
  meta: {
    color: colors.muted,
    fontSize: 13,
  },
  price: {
    marginLeft: 8,
    color: '#2e7d32',
    fontWeight: '700',
    fontSize: 13,
  },
});

export default RestaurantItem;
