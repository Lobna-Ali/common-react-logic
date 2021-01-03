import { __assign } from "tslib";
import * as React from 'react';
import { StyleSheet } from 'react-native';
import ButtonCore from './index.common';
var styles = StyleSheet.create({
    viewContainer: {
        backgroundColor: 'green',
        width: '10%'
    }
});
;
var defaultProps = {
    customContainerClass: styles.viewContainer,
    buttonColor: 'green',
    disabled: false
};
var ButtonWeb = function (props) {
    return (React.createElement(ButtonCore, { data: __assign({ text: props.text }, defaultProps) }));
};
ButtonWeb.defaultProps = defaultProps;
export default ButtonWeb;
//# sourceMappingURL=index.web.js.map