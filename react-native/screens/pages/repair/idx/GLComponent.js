import React, { PureComponent } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Text, Input } from "native-base";

import FlatComponent from './FlatComponent';

const styles = StyleSheet.create({
    glTabBox: {
        height: 40,
        flexDirection: "row",
        justifyContent: "space-around",
        borderBottomColor: "#efefef",
        borderBottomWidth: 1,
        marginBottom: 10,
        backgroundColor: "white",
    },
    glTab: {
        paddingHorizontal: 10,
    },
    glTabActive: {
        borderBottomColor: "#1bc7cc",
        borderBottomWidth: 2,
        paddingHorizontal: 10,
    },
    glTabText: {
        lineHeight: 40,
        textAlign: "center",
        color: "#333",
    },
    glTabActiveText: {
        color: "#1bc7cc",
    },
})

class GLComponent extends PureComponent {
    constructor(props){
        super(props);
    }

    changeGLTab = (type) => {
        this.props.changeGLTab(type);
    }

    render() {
        const { glTabs, currentglTab, searchText } = this.props;

        const Gl_Tab_Component = glTabs.map((item, index) => {
            return (
                <TouchableOpacity key={index} activeOpacity={0.8} onPress={() => { this.changeGLTab(item.type) }} style={[styles.glTab, currentglTab === item.type && styles.glTabActive]}>
                    <Text style={[styles.glTabText, currentglTab === item.type && styles.glTabActiveText]}>{item.text}</Text>
                </TouchableOpacity>
            )
        })

        return (
            <View>
                <View style={styles.glTabBox}>
                    {Gl_Tab_Component}
                </View>
                {
                    glTabs.map((item, index) => {
                        return (
                            <View key={index}>
                                <FlatComponent {...this.props} item={item} currentglTab={currentglTab} searchText={searchText} />
                            </View>
                        )
                    })
                }
            </View>
        )
    }
}

export default GLComponent;