import { Font, StyleSheet } from '@react-pdf/renderer'

Font.register({ family: "ManropeBold", fonts: [{ src: '/fonts/Manrope/static/Manrope-Bold.ttf' }, { src: '/fonts/Manrope/static/Manrope-Light.ttf', fontWeight: 'light' }] })

export const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', gap: '1px', width:"100%" },
    title: { fontSize: "9px", fontFamily:"ManropeBold" },
    text_wrapper: {display:'flex', flexDirection:'row', width:'100%'},
    circle: { margin: '4px 0 0 0' },
    text: { fontSize: "9px", fontFamily: "ManropeBold", fontWeight:'light' },
});