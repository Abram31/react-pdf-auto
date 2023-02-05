import { View } from '@react-pdf/renderer'
import React from 'react'
import { totalKMData } from '../../../../../../constants/constants'
import { Row } from '../../../../Row/Row'
import { Title } from '../../../../Title/Title'
import { styles } from './TotalKM.module.js'

export const TotalKM = () => {
    return (
        <View style={styles.wrapper}>
            <Title size={'sm'}>Km totali inclusi</Title>
            <View style={styles.container_row}>
                {totalKMData.map((data, index) => {
                    return (
                        <View key={index + data.name}>
                            {/* <Svg width='0' height='18' >
                            </Svg > */}
                            <Row nameRow={data.name} valueRow={data.value} />
                        </View>
                    )

                })
                }
            </View>

        </View>)
}
