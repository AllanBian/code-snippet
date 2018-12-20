import React, { PureComponent } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Button, Text, Footer, FooterTab } from "native-base";

const styles = StyleSheet.create({
    tabIcon: {
        width: 26,
        height: 26,
    },
    tabText: {
        color: "#333",
        fontSize: 12,
    },
    tabActiveText: {
        color: "#1bc7cc",
        fontSize: 12,
    },
    footStyle: {
        position: "absolute",
        bottom: 0,
    },
})

class FootComponent extends PureComponent {
    constructor(props){
        super(props);
    }

    switchTab = (type) => {
        this.props.onPress(type);
    }

    render() {
        const { footerTabs, currentFooterTab } = this.props;

        return (
            <Footer style={styles.footStyle}>
                <FooterTab>
                    {
                        footerTabs.map((item, index) => {
                            return (
                                <Button key={index} onPress={() => { this.switchTab(item.type) }}>
                                    <Image source={currentFooterTab === item.type ? item.active : item.normal} style={styles.tabIcon} resizeMode='contain' />
                                    <Text style={[currentFooterTab === item.type ? styles.tabActiveText : styles.tabText]}>{item.text}</Text>
                                </Button>
                            )
                        })
                    }
                </FooterTab>
            </Footer>
        )
    }
}

export default FootComponent;