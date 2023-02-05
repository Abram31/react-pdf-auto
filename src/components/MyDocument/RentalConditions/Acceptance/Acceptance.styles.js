import { StyleSheet } from '@react-pdf/renderer'


export const styles = StyleSheet.create({
    // wrapper: {  },
    wrapper: { position: 'relative', display: 'flex', flexDirection: 'row', gap: '200',  width: '100%',  },
    container_right: { width: '15%', fontFamily: "Manrope", fontSize: '8px', height: '60', display: "flex", flexDirection: 'column', justifyContent: 'flex-end' },
    container_left: { width: '35%', fontFamily: "Manrope", fontSize: '8px', height: '60', display:"flex", flexDirection:'column', justifyContent:'space-between' },
    wrapper_date_time: { display: "flex", flexDirection: 'row', justifyContent: 'space-between' },
    wrapper_row_title: { display: "flex", flexDirection: 'column', justifyContent: 'space-between', gap: '2' }
});