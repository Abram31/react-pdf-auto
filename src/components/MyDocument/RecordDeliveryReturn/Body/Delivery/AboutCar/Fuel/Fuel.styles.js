import { StyleSheet } from '@react-pdf/renderer'
import { dateKMDeliveryData } from '../../../../../../../constants/constants';
import { calculateFuel } from './calculateFuel';

export const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', gap: '5' },
    img: {
        position:'relative',
        width: '20vw', 
        zIndex:'10'
        // transform: 'rotate(30deg)'
    },
    title : {
        fontFamily: "Manrope", fontSize: '10px', textAlign:'center'
    },
    wrapper_circle : {
        position:'absolute',
        left: '8'
    },
    wrapper_arrow: {
        position: 'absolute',
        left: '55',
        top: '40',
    
        transformOrigin: '50% 100%',
        transform: `rotate(${calculateFuel(dateKMDeliveryData[3].amountFoul)}deg)`
    },
    arrow: {
        height: '30',
        width: '10',
    }

});