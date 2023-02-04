import { Canvas, Circle, Path, StyleSheet, Svg, View } from '@react-pdf/renderer'
import React from 'react'
import { Row } from '../Row/Row'
import { styles } from './CheckBox.module'
import { Tick } from './Tick/Tick'



export const CheckBox = ({ name, value, select }) => {
    return (
        <View style={styles.wrapper}>
            <Row nameRow={name} valueRow={value} />
            <View style={styles.svg}>
                <Svg width='18' height='12' >
                    <Circle
                        cx="7"
                        cy="7"
                        r="5"
                        fill="#f1f4ff"
                        stroke="gray"
                    />
                </Svg >
                { select && <Tick /> }
            </View>
        </View>
    )
}
