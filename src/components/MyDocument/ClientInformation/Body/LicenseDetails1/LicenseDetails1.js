import { View } from '@react-pdf/renderer'
import React from 'react'
import { licenseDetails1Data } from '../../../../../constants/constants'
import { Row } from '../../../Row/Row'
import { Title } from '../../../Title/Title'
import { styles } from './LicenseDetails1.styles'

export const LicenseDetails1 = () => {
    return (
        <View style={styles.wrapper}>
            <Title size={'sm'}>Dati patente 1</Title>
            <View style={styles.container}>
                <View style={styles.column}>
                    {licenseDetails1Data.firstColumn.map((data, index) => {
                        if (!Array.isArray(data)) {
                            return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
                        } return <View key={index + data.name}  style={styles.container}>
                            <Row key={index + data[0].name} nameRow={data[0].name} valueRow={data[0].value} />
                            <Row key={index + data[1].name} nameRow={data[1].name} valueRow={data[1].value} />
                        </View>
                    })}
                </View>
                <View style={styles.column}>
                    {licenseDetails1Data.secondColumn.map((data, index) => {
                        if (!Array.isArray(data)) {
                            return <Row key={index + data.name} nameRow={data.name} valueRow={data.value} />
                        } return <View key={index + data.name} style={styles.container}>
                            <Row key={index + data[0].name} nameRow={data[0].name} valueRow={data[0].value} />
                            <Row key={index + data[1].name} nameRow={data[1].name} valueRow={data[1].value} />
                        </View>
                    })}
                </View>
            </View>
        </View>
    )
}