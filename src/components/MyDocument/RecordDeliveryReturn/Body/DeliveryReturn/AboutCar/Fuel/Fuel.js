import React from 'react'
import { Image, Text, View } from '@react-pdf/renderer'
import { styles, stylesReturn } from './Fuel.styles'
import { calculateFuel } from './calculateFuel';


export const Fuel = ({ dateKMData, returnFlag }) => {
    if (returnFlag) {
        stylesReturn.wrapper_arrow.transform = `rotate(${calculateFuel(dateKMData.find(data => data.amountFoul).amountFoul)}deg)`;
    } else {
        styles.wrapper_arrow.transform = `rotate(${calculateFuel(dateKMData.find(data => data.amountFoul).amountFoul)}deg)`;
    }

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Carburante alla consegna</Text>
            <Image src='/img/fuel.png' style={styles.img} />
            {/* <View style={styles.wrapper_circle}>
                <Svg width={dateKMData[2].amountFoul} height='55'>
                    <Circle
                        cx="52"
                        cy="76"
                        r="52"
                        fill=""
                        stroke="red"
                        strokeWidth="5"
                    />
                </Svg >
            </View> */}
            <View style={returnFlag ? styles.wrapper_arrow : stylesReturn.wrapper_arrow}>
                <Image style={styles.arrow} src='/img/arrow.png' />

            </View>

        </View>
    )
}