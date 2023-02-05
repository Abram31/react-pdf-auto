import { StyleSheet } from '@react-pdf/renderer'
import { gaps, paddings } from '../../common/common.styles';


export const styles = StyleSheet.create({
    body: {
        padding: `20 ${paddings.page} 10 ${paddings.page}`, display: 'flex',
        flexDirection: 'column', gap: gaps.body
    },
    line: {
        margin: '15 0 20 0', display: 'flex', flexDirection: 'column', justifyContent: 'center'
    }
});