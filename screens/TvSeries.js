import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {category} from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid';
import PageHeader from '../components/PageHeader';

const TvSeries = () => {
  return (
    <ScrollView>
      <PageHeader title="TV Series" />
      <MovieGrid category={category.tv} />
    </ScrollView>
  );
};

export default TvSeries;

const styles = StyleSheet.create({});
