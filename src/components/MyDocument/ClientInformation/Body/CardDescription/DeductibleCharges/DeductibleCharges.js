import { Circle, Svg, Text, View } from '@react-pdf/renderer'
import React from 'react'
import { deductibleChargesData } from '../../../../../../constants/constants'
import { Title } from '../../../../Title/Title'
import { styles } from './DeductibleCharges.style'

export const DeductibleCharges = () => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.main_title}>
                <Title size={'sm'}>Franchigia e oneri</Title>
            </View>
            <Text wrap={true} style={styles.title}>{deductibleChargesData[0].title}</Text>
            {deductibleChargesData[0].value.map((text, index) => {
                return (<View key={index} style={styles.text_wrapper}>
                    <Svg style={styles.circle} width='5' height='4' >
                        <Circle
                            cx="2"
                            cy="2"
                            r="1"
                            fill="black"
                            stroke="black"
                        />
                    </Svg >
                    <Text style={styles.text}>{text}</Text>
                </View>)

            })}
            <Text wrap={true} style={styles.title}>{deductibleChargesData[1].title}</Text>
            {deductibleChargesData[1].value.map((text, index) => {
                return (<View key={index} style={styles.text_wrapper}>
                    <Svg style={styles.circle} width='5' height='4' >
                        <Circle
                            cx="2"
                            cy="2"
                            r="1"
                            fill="black"
                            stroke="black"
                        />
                    </Svg >
                    <Text style={styles.text}>{text}</Text>
                </View>)

            })}
        </View>
    )
}