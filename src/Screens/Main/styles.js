import { StyleSheet } from 'react-native'; 

export const Styles = StyleSheet.create({
    View: {
        flex: 1
    },
    Header: {
        flex: 1,
        display: 'flex',
        backgroundColor: '#FFA500',
        height: 100
    },
    Title: {
        marginTop: 40,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#000000',
        fontSize: 30
    },
    Card: {
       flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    Avatar: {
        margin: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    Button: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    Body: {
        flex: 8
    },
    Footer: {
        flex: 1
    }
});