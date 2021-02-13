import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {view} from 'rnf';
import ArticleListService from './service';
import {navigateTo} from 'rnf';

export function ArticleItem(item) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigateTo('articleDetail', {link: item.link, title: item.title});
      }}>
      <Text>{item.title}</Text>
      <Text>{item.chapterName}</Text>
    </TouchableOpacity>
  );
}
export function Page({
  articleList = [],
  refreshing = false,
  error,
  onLoadData,
  navigation,
}) {
  useEffect(() => {
    onLoadData();
  }, []);
  if (error) {
    return <Text>访问失败{error}</Text>;
  }
  return (
    <FlatList
      data={articleList}
      refreshing={refreshing}
      renderItem={({item}) => ArticleItem(item)}
      ItemSeparatorComponent={() => (
        <View style={{height: 1, backgroundColor: 'skyblue'}} />
      )}
      onRefresh={onLoadData}
      keyExtractor={(item, index) => index.toString()}
    />
  );
}
export default view(
  (viewState) => ({
    articleList: viewState.articleList,
    refreshing: viewState.refreshing,
    error: viewState.error,
  }),
  (service) => ({
    onLoadData: () => service.onLoadData(), //arrow function or bind(this) needed!
  }),
  ArticleListService,
)(Page);
