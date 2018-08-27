import React from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';


const AppHeaderComponent = () => {
    return (
        <View style={styles.header}>
            <Text style={styles.appname}>WindowsBlogItalia</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        backgroundColor: '#238E9A',
        padding: 6,
    },
    appname: {
        color: 'white',
        fontSize: 18,
        fontWeight: '200',
        marginTop: 'auto',
        marginBottom: 'auto',        
    }
});

export default AppHeaderComponent;
