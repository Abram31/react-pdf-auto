import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: "column", width: '100%'},

    container_row: { 
        padding: '7 0 0 0',
        flex:'1', display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
        // height:'100%'
        // display: 'flex', flexDirection: "column", justifyContent: "flex-start", 
    }
});