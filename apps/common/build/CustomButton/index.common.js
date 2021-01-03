import * as React from 'react';
import { View, Button } from 'react-native';
;
var ButtonCore = function (props) {
    var handlePress = function () {
        alert('Hello In Our POC');
    };
    var data = props.data;
    var title = data.text || 'Button';
    return (React.createElement(View, { style: [data.customContainerClass] }, props.children ? props.children : React.createElement(Button, { title: title, onPress: handlePress, color: data.buttonColor, disabled: data.disabled })));
};
export default ButtonCore;
//# sourceMappingURL=index.common.js.map