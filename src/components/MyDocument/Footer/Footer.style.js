import { StyleSheet } from '@react-pdf/renderer'
import { fonts } from '../common/common.styles';


export const styles = StyleSheet.create({
    wrapper:{},
    line: {height: '10', width: "100%", backgroundColor:'black'},
    container_text: { display:'flex', flexDirection:'column', gap: '2', padding: '5 20', fontFamily: "Manrope", fontSize: fonts.row, },
    title: { fontWeight: 'bold'}

});