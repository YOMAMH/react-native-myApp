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
    ListView,
    Dimensions,
    ActivityIndicator,
} from 'react-native';
import netTool from '../../tools/netTool';
import style from '../../styles/homeStyles';
import styleDetail from '../../styles/categoryStyle';
import DetailItem from './detailItem';
const showapi_appid = 30933;
const showapi_sign = '3dcb2ffef94b4387b2383ebcb806b133';
let data = '';
let self = '';
let type = '';
const typeObj = {
    '恐怖漫画': 'kbmh',
    '故事漫画': 'gushimanhua',
    '段子手': 'duanzishou',
    '冷知识': 'lengzhishi',
    '奇趣': 'qiqu',
    '电影': 'dianying',
    '搞笑': 'gaoxiao',
    '萌宠': '萌宠',
    '新奇': 'xinqi',
    '环球': 'huanqiu',
    '摄影': 'sheying',
    '玩意': 'wanyi',
    '插画': 'chahua'
};

export default class Detail extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows(data),
            type: false,
        };
        Object.keys(typeObj).forEach((key) => {
            if (key.indexOf(this.props.category) != -1) type = typeObj[key];
        });
        netTool.category({
            page: 1,
            showapi_appid: showapi_appid,
            type: '/category/weimanhua/' + type,
            showapi_sign: showapi_sign
        }).then((res) => {
            data =  res['showapi_res_body']['pagebean']['contentlist'];
            this.setState({
                dataSource: ds.cloneWithRows(data),
                type: true,
            });
        }).catch((err) => {
            throw new Error(err)
        });
            self = this;
    }
    _renderRow(rowData) {
        return (
            <TouchableHighlight
                onPress={() => {
                self.props.navigator.push({
                component: DetailItem,
                title: rowData.title,
                passProps: {categoryId:rowData.id},
                tintColor: '#FFF',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF',
    });
            }}
                activeOpacity={0.1}
                underlayColor="rgba(255,255,255,.1)"
                style={styleDetail.itemContainer}
            >
                <View style={{flex: 1,alignItems: 'center', flexDirection: 'row'}}>
                    <Image source={{uri: rowData.thumbnailList[0]}} style={{width:65,height:65}} resizeMode='cover'/>
                    <View style={styleDetail.detailItem}>
                        <Text style={styleDetail.title}>{rowData.title}</Text>
                        <Text style={styleDetail.title}>{rowData.time}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (
            <View style={{flex: 1,marginTop:65}}>
                {this.state.type?(<ListView
                        dataSource={this.state.dataSource}
                        renderRow={this._renderRow}
                        contentContainerStyle={{flex: 1}}
                    />):null}
            </View>
        );
    }
}