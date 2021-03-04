import React, {useEffect, useRef, useState} from 'react';
import s from './Button.s';
import {View, TouchableOpacity, Image, Vibration, Animated} from 'react-native';
import {ACTIVE_OPACITY} from '../../values/values';
import plusIcon from '../../assets/icons/plus.png';
import trashIcon from '../../assets/icons/trash.png';

const Button = ({addAction, removeAction, onModeChange}) => {
  const [deleting, setDeleting] = useState(false);
  const [animationToggle, setAnimationToggle] = useState(true);
  const animation = useRef(new Animated.Value(1)).current;

  const toggleButton = () => {
    Animated.spring(animation, {
      toValue: animationToggle ? 1.1 : 1,
      friction: 1,
      duration: 100,
      useNativeDriver: true,
    }).start(animation.resetAnimation());
    setAnimationToggle((prev) => !prev);

    Vibration.vibrate(50);
    setDeleting((prev) => !prev);
  };

  useEffect(() => {
    onModeChange(deleting);
  }, [deleting]);

  return (
    <Animated.View style={[s.container, {transform: [{scale: animation}]}]}>
      <TouchableOpacity
        style={s.button}
        activeOpacity={ACTIVE_OPACITY}
        delayLongPress={800}
        onLongPress={toggleButton}
        onPress={deleting ? removeAction : addAction}>
        <Image style={s.image} source={deleting ? trashIcon : plusIcon} />
      </TouchableOpacity>
    </Animated.View>
  );
};

export default Button;
