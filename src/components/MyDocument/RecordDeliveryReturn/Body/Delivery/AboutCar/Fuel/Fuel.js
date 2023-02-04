import React from 'react'
import { Circle, Image, Page, Path, Svg, Text, View } from '@react-pdf/renderer'
import { styles } from './Fuel.styles'
import { dateKMDeliveryData } from '../../../../../../../constants/constants'


export const Fuel = () => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Carburante alla consegna</Text>
            <Image src='/img/fuel.png' style={styles.img} />
            <View style={styles.wrapper_circle}>
                <Svg width={dateKMDeliveryData[3].amountFoul} height='55'>
                    <Circle
                        cx="52"
                        cy="76"
                        r="52"
                        fill=""
                        stroke="red"
                        strokeWidth="5"
                    />
                </Svg >
            </View>
            <View style={styles.wrapper_arrow}>
                <Image style={styles.arrow} src='/img/arrow.png' />

            </View>

        </View>
    )
}