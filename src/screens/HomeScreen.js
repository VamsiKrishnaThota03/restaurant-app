import { useEffect, useState } from 'react';
import { FlatList, Platform, SafeAreaView, StatusBar as RNStatusBar, StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Categories from '../components/Categories';
import Header from '../components/Header';
import RestaurantItem from '../components/RestaurantItem';
import ResultsState from '../components/ResultsState';
import Search from '../components/Search';
import CategoryItems from '../data/db';
import useRestaurants from '../hooks/useRestaurants';
import { colors } from '../common/styles';
import { YELP_LOCATION } from '../config';

export default function HomeScreen() {
  const [term, setTerm] = useState('Burger');
  const [{ data, loading, error }, searchRestaurants] = useRestaurants();

  useEffect(() => {
    searchRestaurants(term);
  }, [term, searchRestaurants]);

  const showList = !loading && !error && data.length > 0;

  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={showList ? data : []}
        keyExtractor={(restaurant) => restaurant.id}
        renderItem={({ item }) => <RestaurantItem restaurant={item} />}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.content}
        ListHeaderComponent={
          <View>
            <Header />
            <Search setTerm={setTerm} />
            <Categories categories={CategoryItems} setTerm={setTerm} term={term} />
            <Text style={styles.sectionTitle} accessibilityRole="header">
              {term} near {YELP_LOCATION}
              {showList ? <Text style={styles.count}>  ·  {data.length} places</Text> : null}
            </Text>
          </View>
        }
        ListEmptyComponent={
          <ResultsState loading={loading} error={error} term={term} onRetry={() => searchRestaurants(term)} />
        }
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.page,
    paddingTop: Platform.OS === 'android' ? RNStatusBar.currentHeight : 0,
  },
  content: {
    paddingBottom: 32,
    width: '100%',
    maxWidth: 720,
    alignSelf: 'center',
  },
  sectionTitle: {
    marginHorizontal: 20,
    marginBottom: 12,
    fontSize: 20,
    fontWeight: '800',
    color: colors.text,
  },
  count: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.muted,
  },
});
