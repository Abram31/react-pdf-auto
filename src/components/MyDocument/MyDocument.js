import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';
import { Header } from './Header/Header';

import { ClientInformation} from './ClientInformation/ClientInformation';

export const MyDocument = () => (
    <Document>
        <ClientInformation />
        <Page size="A4" >
            <Header />
            <View >
                <Text>Section #1</Text>
            </View>
            <View >
                <Text>Section #2</Text>
            </View>
        </Page>
    </Document>
);