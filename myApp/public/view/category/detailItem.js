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
    ScrollView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const showapi_appid = 30933;
const showapi_sign = '3dcb2ffef94b4387b2383ebcb806b133';
let data = '';
import netTool from '../../tools/netTool';

class ImageItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uri : this.props.uri,
        };
    }
    render(){
        return (
            <View>
                <Image
                    style={{width:width,height:height-200}}
                    resizeMode='cover'
                    source={{uri:this.state.uri}}
                />
            </View>
        );
    }
}


export default class detailItem extends Component {

    constructor(props) {
        super(props);
        let categoryId = this.props.categoryId;
        this.state = {
            type: false,
        };

        netTool.categoryDetail({
            id: categoryId,
            showapi_appid: showapi_appid,
            showapi_sign: showapi_sign
        }).then((res) => {
            data = res['showapi_res_body']['item'];
            this.setState({type: true,});
        }).catch((err) => {
            throw new Error(err)
        });
    }

    render() {
        return (
            <View style={{flex:1,marginTop:100,marginBottom:80}}>
                {this.state.type?(<ScrollView
                        automaticallyAdjustContentInsets={false}
                        horizontal={true}
                        style={{flex:1}}>
                        {data.imgList?data.imgList.map((uri, i) => {
                                return <ImageItem key={i} uri={uri}/>;
                            }):null}
                    </ScrollView>):null}

            </View>
        );
    }
}