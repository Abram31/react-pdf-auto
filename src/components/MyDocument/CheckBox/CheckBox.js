import { Canvas, Circle, Path, StyleSheet, Svg, View } from '@react-pdf/renderer'
import React from 'react'
import { Row } from '../Row/Row'
import { styles } from './CheckBox.module'



export const CheckBox = () => {
    return (
        <View style={styles.wrapper}>
            <Row nameRow={'C. Credito |'} valueRow={'1231321231'} />
            <View style={styles.svg}>
                <Svg width='18' height='18' >
                    <Circle
                        cx="8"
                        cy="8"
                        r="6"
                        fill="#f1f4ff"
                        stroke="gray"

                    />
                </Svg>
                <Svg style={{ position: "absolute", top: '-4'}} width="20" height="20" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <Path d="M17.5 5.83334L7.5 15.8333L2.91666 11.25L4.09166 10.075L7.5 13.475L16.325 4.65834L17.5 5.83334Z" fill="black" />
                </Svg>
            </View>
        </View>
    )
}
