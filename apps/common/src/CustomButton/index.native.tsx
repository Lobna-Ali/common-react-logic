import * as React from 'react';
import {StyleSheet} from 'react-native'
import ButtonCore from './index.common';

const styles = StyleSheet.create({
    viewContainer: {
      backgroundColor: '#f4e1d2',
      width: '50%'
    }
  });

  interface props {
      text?: string
      customContainerClass?: object
      buttonColor?: string
      disabled?: boolean
  };

  const defaultProps: props = {
      customContainerClass: styles.viewContainer,
      buttonColor: 'red',
      disabled: false
  }

const ButtonNative : React.FC<props> = (props) => {

    return ( 
        <ButtonCore data= {{ text: props.text, ...defaultProps }}/>
    )
}

ButtonNative.defaultProps = defaultProps;

export default ButtonNative;