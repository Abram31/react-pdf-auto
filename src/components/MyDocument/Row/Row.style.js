import { StyleSheet, Font } from '@react-pdf/renderer'
// import font from '@fontsource/dm-serif-display'


Font.register({ family: "Manrope", fonts: [{ src: '/fonts/Manrope/static/Manrope-ExtraLight.ttf' }, { src: '/fonts/Manrope/static/Manrope-SemiBold.ttf', fontWeight: 'bold' }] })
export const styles = StyleSheet.create({
    view: { position: 'relative', display: 'flex', flexDirection: 'row', gap: '10px', borderBottom: '1px solid #c6c6c6', fontFamily: "Manrope", fontSize: '10px', width: '100%' },
    value: { fontWeight: 'bold', flex: '1', maxLines: '2' }
});