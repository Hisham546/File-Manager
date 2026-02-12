import React from 'react';

import IconEntypo from 'react-native-vector-icons/Entypo';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';
import IconFeather from 'react-native-vector-icons/Feather';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconFoundation from 'react-native-vector-icons/Foundation';
import IconIonicons from 'react-native-vector-icons/Ionicons';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconOcticons from 'react-native-vector-icons/Octicons';
import IconZocial from 'react-native-vector-icons/Zocial';
import IconFontisto from 'react-native-vector-icons/Fontisto';

import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import IconAntDesignIcons from 'react-native-vector-icons/AntDesign';
import IconFontAwesome5Pro from 'react-native-vector-icons/FontAwesome5Pro';


export const Icon = props => {
  const { color, name, size, iconFamily } = props;
  return iconFamily === 'Entypo' ? (
    <IconEntypo color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'Feather' ? (
    <IconFeather color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'EvilIcons' ? (
    <IconEvilIcons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'FontAwesome' ? (
    <IconFontAwesome color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'FontAwesome5' ? (
    <IconFontAwesome5 color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'Foundation' ? (
    <IconFoundation color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'MaterialCommunityIcons' ? (
    <IconMaterialCommunityIcons
      color={color}
      name={name}
      size={size}
      {...props}
    />
  ) : iconFamily === 'Octicons' ? (
    <IconOcticons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'Zocial' ? (
    <IconZocial color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'Ionicons' ? (
    <IconIonicons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'SimpleLineIcons' ? (
    <IconSimpleLineIcons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'AntDesign' ? (
    <IconAntDesignIcons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'Fontisto' ? (
    <IconFontisto color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'MaterialIcons' ? (
    <IconMaterialIcons color={color} name={name} size={size} {...props} />
  ) : iconFamily === 'FontAwesome5Pro' ? (
    <IconFontAwesome5Pro color={color} name={name} size={size} {...props} />
  ) : null;
};
