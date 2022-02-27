import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const RoundedTabItem = (props, navigation) => {
  return (
    <TouchableOpacity
      style={[style.main, props.tab.selected ? style.selectedTab : null]}>
      <Text style={[props.tab.selected ? style.selectedText : style.text]}>
        {props.tab.title}
      </Text>
    </TouchableOpacity>
  );
};
export default RoundedTabItem;
