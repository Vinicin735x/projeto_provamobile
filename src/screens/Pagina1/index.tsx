import {ImageBackground, View, Text} from "react-native"
import {styles} from "./styles"
import { ComponentListMarker, ComponentPageTitulo } from "../../components"
export function Pagina1() {
    const fundo = require("../../assets/motoca.png")
    return (
        <ImageBackground source={fundo} style={styles.container}>
            <ComponentPageTitulo />
            <View>
                <ComponentListMarker textMarker=""/>
            </View>
        </ImageBackground>
    )
}