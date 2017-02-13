/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    TabBarIOS,
    Text,
    View,
} from 'react-native';
import styles from './public/styles/homeStyles';
import HomeNav from './public/view/home/';
import Category from './public/view/category';
import RankNav from './public/view/ranking';
import MeNav from './public/view/me';
import Icon from './node_modules/react-native-vector-icons/Ionicons';

export default class myApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab:'homeTab',
        };
    }

    render() {
        return (
            <TabBarIOS tintColor="forestgreen" translucent={true}>
              <Icon.TabBarItem
                  title="首页"
                  iconName="ios-home-outline"
                  selectedIconName="ios-home"
                  selected={this.state.selectedTab === 'homeTab'}
                  onPress={() => {
                        this.setState({
                            selectedTab: 'homeTab',
                        });
                    }}>
                <HomeNav/>
              </Icon.TabBarItem>
              <Icon.TabBarItem
                  title="排行"
                  iconName="ios-trending-up-outline"
                  selectedIconName="ios-trending-up"
                  selected={this.state.selectedTab === 'messTab'}
                  onPress={() => {
                        this.setState({
                            selectedTab: 'messTab',
                        });
                    }}>
                  <RankNav/>
              </Icon.TabBarItem>
              <Icon.TabBarItem
                  title="分类"
                  iconName="ios-star-outline"
                  selectedIconName="ios-star"
                  selected={this.state.selectedTab === 'feedbackTab'}
                  onPress={() => {
                        this.setState({
                            selectedTab: 'feedbackTab',
                        });
                    }}>
                <Category/>
              </Icon.TabBarItem>
              <Icon.TabBarItem
                  title="我的"
                  iconName="ios-contact-outline"
                  selectedIconName="ios-contact"
                  selected={this.state.selectedTab === 'calendarTab'}
                  onPress={() => {
                        this.setState({
                            selectedTab: 'calendarTab',
                        });
                    }}>
                <MeNav/>
              </Icon.TabBarItem>
            </TabBarIOS>
        );
    }
}

AppRegistry.registerComponent('myApp', () => myApp);
