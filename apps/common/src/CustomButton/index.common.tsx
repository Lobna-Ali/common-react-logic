import * as React from 'react';
import { View, Button} from 'react-native'


interface props {
    data: {
        text?: string;
        customContainerClass?: object
        buttonColor?: string
        disabled?: boolean
    },
    onClick?: () => void
    
};


const ButtonCore : React.FC<props> = (props) => {

    const handlePress = () => {
       alert('Hello In Our POC')
    }
    const { data } = props;
    const title = data.text || 'Button'

    return (
        <View style={[data.customContainerClass]}>
            {props.children ? props.children : <Button title={title} onPress={handlePress} color={data.buttonColor} disabled={data.disabled}/>}
        </View>
    )
}


export default ButtonCore;