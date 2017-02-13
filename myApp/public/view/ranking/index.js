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
import Rank from './rank';

export default class RankNav extends Component {

    render() {
        return  (<NavigatorIOS
            initialRoute={{
                component: Rank,
                title: '排名',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF'
            }}
            style={{flex: 1}}
        />);
    }
}