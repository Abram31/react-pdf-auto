import { StyleSheet } from '@react-pdf/renderer'
import { fonts, paddings } from '../../common/common.styles';

export const styles = StyleSheet.create({
    wrapper: { width: '100%', height: '50', backgroundColor: '#D9D9D9', display: 'flex', flexDirection: 'row', justifyContent:'space-between', alignItems:'center', padding: `0 ${paddings.page}` },
    name_auto: { width: '40vw',  fontFamily: "DM Serif Display", letterSpacing: "1.5px", fontSize: '18px' },
    title: { fontFamily: "Manrope", fontSize: fonts.nameAuto, },
    wrapper_color: { display: 'flex', flexDirection: 'row', width: '20vw', gap: "10"},
    wrapper_number: { display: 'flex', flexDirection: 'row', width: '20vw', gap: "10" },
});