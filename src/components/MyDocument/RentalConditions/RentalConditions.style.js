import { StyleSheet } from '@react-pdf/renderer'
import { paddings } from '../common/common.styles';

export const styles = StyleSheet.create({
    page: { display:'flex', flexDirection:'column', gap:'20', width: '100%', padding: `${paddings.page} ${paddings.page} 0 ${paddings.page}` },
    wrapper_footer: {margin: `0 -${paddings.page}`}
});