import {ImageBackground, View, Text, FlatList} from "react-native"
import {styles} from "./styles"
import { ComponentListMarker, ComponentPageTitulo, ComponentPanelTitulo } from "../../components"
import { IPage } from "../../../App"


export function Pagina1({setPageI, pagenumber}:IPage) {
    const fundo = require("../../assets/motoca.png")
    const pagina1Texto = [
        { id: "Ninguem vai parar o Paulão" },
        { id: "Dorivalismo ta na área" },
        { id: "Toca no Calleri que é gol" },
    ]
    return (
        <ImageBackground source={fundo} style={styles.container}>
            <ComponentPageTitulo setPageI={setPageI} pagenumber={pagenumber} />
            <View style={styles.panel}>
                <ComponentPanelTitulo titulo="Dorivalismo chegou no Paulão"/>
                <FlatList
                data={pagina1Texto}
                renderItem={({item})=>
                <ComponentListMarker key={item.id} textMarker={item.id} />
            }
                keyExtractor={(item) => item.id}
                />

            </View>
        </ImageBackground>
    )
}