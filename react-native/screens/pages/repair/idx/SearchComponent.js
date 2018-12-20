import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import { Icon, Input } from "native-base";

const styles = StyleSheet.create({
    searchBox: {
        borderColor: '#1bc7cc',
        borderWidth: 1,
        marginHorizontal: 20,
        marginVertical: 20,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 50,
    },
    searchIcon: {
        fontSize: 18,
        color: "#203c7d",
    },
    searchFilter: {
        fontSize: 18,
        color: "#203c7d",
    },
    inputItem: {
        flex: 1,
        fontSize: 18,
    },
})

class SearchComponent extends PureComponent {
    constructor(props){
        super(props);
    }

    onChangeText = (value) => {
        this.props.onChangeText(value);
    }

    render() {
        return (
            <View style={styles.searchBox}>
                <Icon ios="ios-search" android="md-search" style={styles.searchIcon} />
                <Input style={styles.inputItem} placeholder="请输入关键字" placeholderTextColor="#203c7d" onChangeText={this.onChangeText} />
                <Icon type="Feather" name="filter" style={styles.searchFilter} />
            </View>
        )
    }
}

export default SearchComponent;