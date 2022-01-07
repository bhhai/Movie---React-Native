import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View} from 'react-native';
import {category} from '../api/tmdbApi';
import MovieGrid from '../components/MovieGrid';
import PageHeader from '../components/PageHeader';

const Movies = () => {
  return (
    <ScrollView>
      <PageHeader title="Movies" />

      <MovieGrid category={category.movie} />
    </ScrollView>
  );
};

export default Movies;

const styles = StyleSheet.create({});
