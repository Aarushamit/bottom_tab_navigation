import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class TransactionScreen extends React.Component {
    render () {
        return (
           
                <Text style = {styles.transactionStyle}> this is instagram! </Text>
            
        )
    }
}

const styles = StyleSheet.create({
    transactionStyle: {
        flex: 1,
        alignSelf: 'center',
        justifyContent: 'center',
        fontSize: 20,
        marginTop: 200,
        marginBottom: 200,
        color: 'red',
       
    }
})