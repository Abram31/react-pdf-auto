import { StyleSheet } from '@react-pdf/renderer'
import { fonts } from '../../common/common.styles';



export const styles = StyleSheet.create({
    wrapper: {flex: '1', display:'flex', flexDirection:'column', justifyContent:'center'},
    text: {
        fontSize: fonts.sizeFooter, textAlign: 'center', fontFamily: "Manrope", 
    }
});