import { StyleSheet } from '@react-pdf/renderer'
import { fonts } from '../../common/common.styles';



export const styles = StyleSheet.create({
    wrapper: { margin:'0 0 10 0', display: 'flex', flexDirection: 'row', gap: '10', fontFamily: "Manrope", fontSize: fonts.sizeTitle, justifyContent:'center', width: '100%' }
});