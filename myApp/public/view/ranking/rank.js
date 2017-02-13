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
    Dimensions,
    WebView,
} from 'react-native';
const web = 'http://m.ac.qq.com/rank/index?type=pgv';

export default class RankNav extends Component {

    render() {
        return (
            <View style={{flex:1}}>
                <WebView
                    source={{url:web}}
                    startInLoadingState={true}
                    domStorageEnabled={true}
                    javaScriptEnabled={true}
                >
                </WebView>
            </View>
        );
    }
}