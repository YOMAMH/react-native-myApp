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
import net from '../../tools/netTool';
import style from '../../styles/homeStyles';
const {width, height} = Dimensions.get('window');
import Detail from './detail';
let self = '';

export default class Category extends Component {
    // 初始化模拟数据
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        self = this;
        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    title: "恐怖漫画", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/" + "2017/01/17/17020886_1484218034_4Bb64fwdjkd1.png_x"
                },
                {
                    title: "故事漫画", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/" + "2017/01/12/20170112_587755fcbe3e8.png_x"
                },
                {
                    title: "段子手", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/17/20170117_587d6334c5922.jpg_x"
                },
                {
                    title: "冷知识", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2016/11/21/a2tsg38380555519305.png_x"
                },
                {
                    title: "奇趣", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/17/20170117_587da289aa5ce.jpg_x"
                },
                {
                    title: "电影", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2016/12/22/20161222_585b741a4bb61.jpg_x"
                },
                {
                    title: "搞笑", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/17/20170117_587d620f11ef0.jpg_x"
                },
                {
                    title: "萌宠", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/13/20170113_5878c723386bb.jpg_x"
                },
                {
                    title: "新奇", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/14/20170114_5879968eef6c1.jpg_x"
                },
                {
                    title: "环球", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2016/10/02/20161002_57f0b77c2fc91.jpg_x"
                },
                {
                    title: "摄影", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2016/12/31/20161231_5867251618f80.jpg_x"
                },
                {
                    title: "玩意", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2016/10/16/20161016_5802fda1cf91b.jpg_x"
                },
                {
                    title: "插画", img: "http://cdn.heibaimanhua.com/slt/tu.php?src=http://img.heibaimanhua.com/" +
                "wp-content/uploads/2017/01/08/20170108_5871e950ef94c.jpg_x"
                }])
        };
    }

    _renderRow(rowData) {
        return (
            <TouchableHighlight
                onPress={() => {
                self.props.navigator.push({
                component: Detail,
                title: rowData.title,
                passProps: {category:rowData.title},
                tintColor: '#FFF',
                barTintColor: '#FF410B',
                titleTextColor: '#FFF',
    });
            }}
                activeOpacity={0.1}
                underlayColor="rgba(255,255,255,.1)"
                style={style.itemContainer}
            >
                <View style={{flex: 1,alignItems: 'center'}}>
                    <Image source={{uri: rowData.img}} style={{width: width/5, height: width/4}} resizeMode='cover'/>
                    <Text style={style.categoryTitle}>{rowData.title}</Text>
                </View>
            </TouchableHighlight>
        );
    }


    render() {
        return (
            <View style={{flex: 1,width:width}}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this._renderRow}
                    contentContainerStyle={style.listViewContent}
                />
                <Image
                    source={require('../../images/bg.jpg')}
                    style={{width: width, height: height,position: 'absolute', zIndex: -1000}}
                    resizeMode='cover'/>
            </View>
        );
    }
}