import { Path, Svg,  } from '@react-pdf/renderer'
import React from 'react'
import { styles } from './Tick.module'


export const Tick = () => {
    return (
        <Svg style={ styles.svg } width="20" height="20" viewBox="0 0 0 0" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Path d="M17.5 5.83334L7.5 15.8333L2.91666 11.25L4.09166 10.075L7.5 13.475L16.325 4.65834L17.5 5.83334Z" fill="black" />
        </Svg>
    )
}
