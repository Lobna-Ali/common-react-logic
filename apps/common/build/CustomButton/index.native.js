import { __assign } from "tslib";
import * as React from 'react';
import { StyleSheet } from 'react-native';
import ButtonCore from './index.common';
var styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: '#f4e1d2',
        width: '50%'
    }
});
;
var defaultProps = {
    customContainerClass: styles.viewContainer,
    buttonColor: 'red',
    disabled: false
};
var ButtonNative = function (props) {
    return (React.createElement(ButtonCore, { data: __assign({ text: props.text }, defaultProps) }));
};
ButtonNative.defaultProps = defaultProps;
export default ButtonNative;
//# sourceMappingURL=index.native.js.map