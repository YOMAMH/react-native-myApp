/**
 * Created by renminghe on 2017/1/19.
 */
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
let itemHeight = 60;
const styles = StyleSheet.create({
    detailItem: {
        flex: 6,
        marginLeft: 5,
    },
    title: {
        flex: 1,
    },
    itemContainer: {
        height: itemHeight,
        alignItems: 'center',
        shadowColor: '#CCC',
        shadowOpacity: 0.7,
        shadowRadius: 5,
        marginTop: 10,
        backgroundColor: 'rgba(251, 255, 231,.4)'
    },
});

module.exports = styles;