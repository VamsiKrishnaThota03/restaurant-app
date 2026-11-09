import { ActivityIndicator, Pressable, StyleSheet, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../common/styles';

/** Loading, error and empty states for the results list. */
const ResultsState = ({ loading, error, term, onRetry }) => {
  if (loading) {
    return (
      <View style={styles.box} accessibilityLiveRegion="polite">
        <ActivityIndicator size="large" color={colors.primary} />
        <Text style={styles.text}>Finding {term.toLowerCase()} places…</Text>
      </View>
    );
  }
  if (error) {
    return (
      <View style={styles.box} accessibilityLiveRegion="polite">
        <FontAwesome name="exclamation-circle" size={32} color={colors.danger} />
        <Text style={styles.title}>Couldn&apos;t load restaurants</Text>
        <Text style={styles.text}>{error}</Text>
        <Pressable onPress={onRetry} accessibilityRole="button" style={({ pressed }) => [styles.button, pressed && { opacity: 0.8 }]}>
          <Text style={styles.buttonText}>Try again</Text>
        </Pressable>
      </View>
    );
  }
  return (
    <View style={styles.box}>
      <FontAwesome name="cutlery" size={32} color={colors.muted} />
      <Text style={styles.title}>No restaurants found</Text>
      <Text style={styles.text}>Try another category or search term.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    alignItems: 'center',
    paddingVertical: 40,
    paddingHorizontal: 32,
  },
  title: {
    marginTop: 12,
    fontSize: 17,
    fontWeight: '700',
    color: colors.text,
  },
  text: {
    marginTop: 8,
    color: colors.muted,
    textAlign: 'center',
  },
  button: {
    marginTop: 16,
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 999,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
  },
});

export default ResultsState;
