import {View, Text, FlatList} from "react-native"
import { styles } from "./styles"
import { ComponentListImage, ComponentPageTitulo, ComponentPanelTitulo } from "../../components"
import { IPage } from "../../../App"

export function Pagina2({setPageI, pagenumber}:IPage) {
    const img = require ("../../assets/dorival.png")
    const img2 = require ("../../assets/tricolor.png")
    const pagina2Texto = [
        { id: "Salve o tricolor", img: img2 },
        { id: "Lenda Dorival !!!", img: img },
    ]
    return (
        <View style={styles.container}>
        <ComponentPageTitulo setPageI={setPageI} pagenumber={pagenumber} />
        <View style={styles.panel}>
            <ComponentPanelTitulo titulo="Todas as vezes que viajou para Europa, voltou campeão "/>
            <FlatList
            data={pagina2Texto}
            renderItem={({item})=>
            <ComponentListImage key={item.id} text={item.id} img={item.img} />
        }
            keyExtractor={(item: { id: any }) => item.id}
            />

        </View>
    </View>
    )
}