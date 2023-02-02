import { StyleSheet, Font } from '@react-pdf/renderer'


Font.register({ family: "DM Serif Display", src: '/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf',  })
Font.register({ family: "ManropeMedium", fonts: [{ src: '/fonts/Manrope/static/Manrope-Medium.ttf' }, { src: '/fonts/Manrope/static/Manrope-SemiBold.ttf', fontWeight: 'bold' }] })
export const styles = StyleSheet.create({
    md: { fontFamily: "DM Serif Display", letterSpacing: "1.5px", fontSize:'18px' },
    sm: { fontFamily: "ManropeMedium", fontSize: '14px' }

});