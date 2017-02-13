/**
 * Created by renminghe on 2017/1/16.
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
import Home from './home'

export default class HomeNav extends Component {

    render() {
        return  (<NavigatorIOS
            initialRoute={{
                component: Home,
                title: '首页',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF'
            }}
            style={{flex: 1}}
        />);
    }
}