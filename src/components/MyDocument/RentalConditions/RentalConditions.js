import React from 'react'
import { Page, View } from '@react-pdf/renderer'
import { styles } from './RentalConditions.style'
import { Title } from './Title/Title'
import { TextCondition } from './Text/TextCondition'
import { Acceptance } from './Acceptance/Acceptance'
import { Footer } from '../Footer/Footer'


export const RentalConditions = () => {
    return (
        <Page style={styles.page} size="A4">
            <Title />
            <TextCondition />
            <Acceptance />
            <View style={styles.wrapper_footer}>
                <Footer />
            </View>
        </Page>
    )
}
