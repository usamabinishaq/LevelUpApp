import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';
import style from './style';

const RoundedTabItem = (props, navigation) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.callback({pos: props.data.index, cat: props.data.tab.title});
      }}
      style={[
        style.main,
        props.data.position == props.data.index ? style.selectedTab : null,
      ]}>
      <Text
        style={[
          props.data.position == props.data.index
            ? style.selectedText
            : style.text,
        ]}>
        {props.data.tab.title}
      </Text>
    </TouchableOpacity>
  );
};
export default RoundedTabItem;
