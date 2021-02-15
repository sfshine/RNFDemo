import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {connect} from 'react-redux';
import {view} from 'rnf';
import MainService from './service';

export function Page({result, onLoadData}) {
  useEffect(() => {
    onLoadData('https://bj.meituan.com/ptapi/recommends');
  }, []);
  return (
    <View>
      <Text>更多使用方式参考example</Text>
      <Text>result:{result}</Text>
    </View>
  );
}
export default view(
  (viewState, state) => ({
    result: viewState.result,
    error: viewState.error,
  }),
  (service) => ({
    onLoadData: (link) => service.onLoadData(link), //arrow function or bind(this) needed!
  }),
  MainService,
)(Page);
