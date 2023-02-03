import React from 'react'
import { Page, Text, View } from '@react-pdf/renderer'
import { styles } from './RentalConditions.style'
import { Title } from './Title/Title'
import { TextCondition } from './Text/TextCondition'
import { Acceptance } from './Acceptance/Acceptance'


export const RentalConditions = () => {
    return (
        <Page style={styles.page} size="A4">
            <Title />
            <TextCondition />
            <Acceptance />
        </Page>
    )
}
