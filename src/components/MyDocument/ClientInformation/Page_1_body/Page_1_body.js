import { Text, View } from '@react-pdf/renderer'
import React from 'react'
import { firstBlock } from '../../../../constants/constants'
import { Row } from '../../Row/Row'
import { Title } from '../../Title/Title'
import { styles } from './Page_1_body.style'

export const Page_1_body = () => {
    return (
        <View style={styles.page}>
            {/* <View >
            <Title />
                <View >
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                </View>
                <View >
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                    <Row nameRow={firstBlock[0].name} valueRow={firstBlock[0].value} />
                </View>
            </View> */}
            <View >
                <Text>Section #2</Text>
            </View>
        </View>
    )
}
