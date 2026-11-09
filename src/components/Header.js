import { StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../common/styles';
import { YELP_LOCATION } from '../config';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.location} accessibilityLabel={`Searching near ${YELP_LOCATION}`}>
      <FontAwesome name="map-marker" size={14} color={colors.primary} />
      <Text style={styles.locationText}>{YELP_LOCATION}</Text>
    </View>
    <Text style={styles.lightHeader}>Grab your</Text>
    <Text style={styles.boldHeader} accessibilityRole="header">
      Delicious meal!
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginHorizontal: 20,
    marginBottom: 16,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.primarySoft,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 12,
  },
  locationText: {
    marginLeft: 6,
    color: colors.primaryDark,
    fontWeight: '600',
  },
  lightHeader: {
    fontSize: 28,
    color: colors.muted,
  },
  boldHeader: {
    fontSize: 34,
    fontWeight: '800',
    color: colors.text,
  },
});

export default Header;
