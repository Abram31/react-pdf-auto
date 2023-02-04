import { StyleSheet } from '@react-pdf/renderer'
import { gaps } from '../../../common/common.styles';


export const styles = StyleSheet.create({
    wrapper: { display: 'flex', flexDirection: 'column', gap: '3px' },
    container: { display: "flex", flexDirection: 'row', gap: gaps.rentTerms },
    aboutCar: { display: 'flex', flexDirection: 'column', width:'100%', gap:'5px' }
});