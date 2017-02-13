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
    ListView,
    Dimensions,
} from 'react-native';
import Category from './category';

export default class CategoryNav extends Component {

    render() {
        return  (<NavigatorIOS
            initialRoute={{
                component: Category,
                title: '分类',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF'
            }}
            style={{flex: 1}}
        />);
    }
}
