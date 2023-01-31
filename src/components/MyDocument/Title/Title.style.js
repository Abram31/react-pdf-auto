import { StyleSheet, Font } from '@react-pdf/renderer'


Font.register({ family: "DM Serif Display", src: '/fonts/DM_Serif_Display/DMSerifDisplay-Regular.ttf',  })
export const styles = StyleSheet.create({
    title: { fontFamily: "DM Serif Display", letterSpacing: "1.5px", fontSize:'18px' }
});