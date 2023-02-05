import { StyleSheet } from '@react-pdf/renderer'
import { dateKMDeliveryData } from '../../../../../../../constants/constants';
import { fonts } from '../../../../../common/common.styles';
import { calculateFuel } from './calculateFuel';

export const styles = StyleSheet.create({
        
    wrapper: { display: 'flex', flexDirection: 'column', gap: '5', width: '15vw', },
    img: {
        position:'relative',
        width: '15vw', 
        height: '40',
        zIndex:'10'
    },
    title : {
        fontFamily: "Manrope", fontSize: fonts.row, textAlign:'center'
    },
    wrapper_circle : {
        position:'absolute',
        left: '8'
    },
    wrapper_arrow: {
        position: 'absolute',
        left: '41',
        top: '26',
        transformOrigin: '50% 100%',
    },
  
    arrow: {
        height: '20',
        width: '10',
    }

});

export const stylesReturn = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', gap: '5', width:'10vw' },
    img: {
        position: 'relative',
        width: '10vw',
        zIndex: '10'
    },
    title: {
        fontFamily: "Manrope", fontSize: '10px', textAlign: 'center'
    },
    wrapper_circle: {
        position: 'absolute',
        left: '8'
    },
    wrapper_arrow: {
        position: 'absolute',
        left: '40',
        top: '26',
        transformOrigin: '50% 100%',
    },
     arrow: {
        height: '30',
        width: '10',
    }

});