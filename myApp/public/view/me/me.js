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
    WebView,
} from 'react-native';
const web = 'http://ui.ptlogin2.qq.com/cgi-bin/login?style=9&low_login=' +
    '1&appid=637009801&daid=43&pt_no_onekey=0&s_url=http%3A%2F%2Fm.ac.qq.com%2Fbookshelf%2Findex%3Ftype%3Dhis';

export default class Me extends Component {

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