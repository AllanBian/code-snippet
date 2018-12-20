import React, { PureComponent } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Text, Icon } from "native-base";

// 引入当前页面样式
import Layout from '../../../../constants/Layout';
const styles = StyleSheet.create({
    personItem: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
        borderBottomColor: "#eee",
        borderBottomWidth: 1,
        height: 50,
    },
    personItemLast: {
        borderBottomWidth: 0,
    },
    flatIconArea: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    flatBodyArea: {
        flex: 3,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
    flatItemName: {
        fontSize: 16,
        color: "#203c7d",
    },
    flatItemJob: {
        fontSize: 16,
        color: "#203c7d",
    },
})

class ListComponent extends PureComponent {

    constructor(props) {
        super(props);
    }

    state = {

    }

    componentWillMount = () => {

    }

    componentDidMount = () => {

    }

    componentWillUnmount = () => {

    }

    onPressItem = () => {
        this.props.onPressItem(this.props.id);
    }

    render() {
        const { item, selected } = this.props;
        const iosIconChecked = "ios-checkmark-circle";
        const iosIcon = "ios-checkmark-circle-outline";
        const androidIconChecked = "md-checkmark-circle";
        const androidIcon = "md-checkmark-circle-outline";

        return (
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.personItem}
                onPress={this.onPressItem}
            >
                <View style={styles.flatIconArea}>
                    {
                        selected.includes(item.id) ? <Icon ios={iosIconChecked} android={androidIconChecked} style={Layout.radioColor} />
                            :   <Icon ios={iosIcon} android={androidIcon} style={Layout.radioColor} />
                    }
                </View>
                <View style={styles.flatBodyArea}>
                    <Text style={styles.flatItemName}>
                        {item.name}
                    </Text>
                    <Text style={styles.flatItemJob}>
                        {item.job}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default ListComponent;
