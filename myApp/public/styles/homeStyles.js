/**
 * Created by renminghe on 2017/1/16.
 */
import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
let columns = 3;
let itemWidth = 100;
let itemHeight = 120;
const screenWidth = Dimensions.get('window').width;
let wMargins = (screenWidth - itemWidth * columns) / (columns + 1);
let hMargins = 20;
const styles = StyleSheet.create({
    // --home
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
    },
    categoryTitle: {
        flex: 1,
        fontWeight: 'bold',
        marginTop: 5,
    },
    listViewContent: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    itemContainer: {
        width: itemWidth,
        height: itemHeight,
        marginLeft: wMargins,
        marginTop: hMargins,
        alignItems: 'center',
        shadowColor: '#CCC',
        shadowOpacity: 0.7,
        shadowRadius: 5,
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
    },
    centering: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 8,
    },

});

module.exports = styles;

