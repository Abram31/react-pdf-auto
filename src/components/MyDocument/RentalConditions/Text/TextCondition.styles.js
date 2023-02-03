import { StyleSheet } from '@react-pdf/renderer'
import { fonts } from '../../common/common.styles';

export const styles = StyleSheet.create({
    wrapper: { width: '100%', 
    maxHeight:'85vh', display:'flex', flexDirection:'column', flexWrap:'wrap', columnGap: '20', rowGap: '10' 
},
    container: { fontFamily: 'Manrope', fontSize: fonts.sizeCondition, width:'48%', maxHeight: '80vh', textAlign:'justify' },
    title: { fontWeight: 'bold' },
    text: {},

});