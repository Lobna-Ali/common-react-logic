import * as React from 'react';
import {StyleSheet} from 'react-native'
import ButtonCore from './index.common';

const styles = StyleSheet.create({
    viewContainer: {
      backgroundColor: 'green',
      width: '10%'
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
      buttonColor: 'green',
      disabled: false
  }

const ButtonWeb : React.FC<props> = (props) => {

    return ( 
        <ButtonCore data= {{ text: props.text, ...defaultProps }}/>
    )
}

ButtonWeb.defaultProps = defaultProps;

export default ButtonWeb;