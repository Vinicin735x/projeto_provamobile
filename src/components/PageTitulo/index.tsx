import { Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
export function PageTitulo() {
    return(
        <View style={styles.container}>
        <Text style={styles.text}>Acelera a motoca</Text>
        <TouchableOpacity>
            <Text style={styles.text}>{'>>'}</Text>
        </TouchableOpacity>  
        </View>
       
    )
}