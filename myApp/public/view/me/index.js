/**
 * Created by renminghe on 2017/1/19.
 */
import React, {Component} from 'react';
import {
    NavigatorIOS,
    AppRegistry,
    Text,
    View,
    Image,
    TouchableHighlight,
    TextInput,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';
import styles from '../../styles/homeStyles';
import Me from './me';

export default class MeNav extends Component {

    render() {
        return  (<NavigatorIOS
            initialRoute={{
                component: Me,
                title: '我的书籍',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF'
            }}
            style={{flex: 1}}
        />);
    }
}