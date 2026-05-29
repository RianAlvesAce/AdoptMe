import { Dot, ShieldCheck, BugOff, HeartPulse, Microchip, ImageIcon, ImagesIcon, Send, ArrowLeft, Share2, Heart } from "lucide-react-native";
import React from "react";
import { Image, StyleSheet, View, Text, Touchable, TouchableOpacity } from "react-native";

export default function PetProfile() {

    const dogInfos = {
        name: "Mel",
        age: 2,
        gender: "f",
        size: "Médio",
        about: "Mel é muito dócil, brincalhona e adora passeios. Se dá bem com crianças e outros animais. Está vacinada e vermifugada.",
        type: "Cão",
        vaccinated: true,
        dewormed: true, 
        castrated: true,
        microchip: true
    }

    return (
        <View style={{width: "100%", height: "100%"}}>
            <View style={styles.btnContainer}>
                <ArrowLeft/>
                <View style={{display: "flex", flexDirection: "row", gap: 20}}>
                    <Share2/>
                    <Heart/>
                </View>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../assets/dog.png")} />
            </View>
            <View style={styles.infoContainer}>
                <View style={styles.infoContainer.topLine}></View>
                <View style={{padding:20, paddingTop:10, height: "100%"}}>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                        <Text style={{color: "#0b3b00", fontWeight: "bold", fontSize: 25}}>{dogInfos.name}</Text>
                        <View style={{backgroundColor: "#c3e6b8", display: "flex", alignItems: "center", justifyContent: "center", paddingHorizontal: 15, paddingVertical: 5, borderRadius: 50}}>
                            <Text style={{color: "#0b3b00", fontWeight: "bold"}}>{dogInfos.type}</Text>
                        </View>
                    </View>
                    <View style={{display: "flex", flexDirection: "row"}}>
                        <Text>{dogInfos.age} anos </Text> 
                        <Dot color={"#0b3b00"}/> 
                        <Text> {dogInfos.gender === "f" ? "Fêmea" : "Macho"} </Text> 
                        <Dot color={"#0b3b00"}/> 
                        <Text> {dogInfos.size} porte</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={{fontWeight: "bold", marginBottom: 10}}>Sobre {dogInfos.name}</Text>
                        <Text>{dogInfos.about}</Text>
                    </View>
                    <View style={{display: "flex", flexDirection: "row", justifyContent: "space-between", marginTop: 25}}>
                        <View style={{display: "flex", alignItems: "center", paddingHorizontal: 10}}>
                            <View style={{backgroundColor:"#c3e6b8", padding: 5, borderRadius: "100%", marginBottom: 5}}>
                                <ShieldCheck color={"#0b3b00"}/>
                            </View>
                            <Text>Vacinada</Text>
                            <Text>{dogInfos.vaccinated ? "Sim" : "Não"}</Text>
                        </View>
                        <View style={{height: "100%", backgroundColor: "#ededed", width: 1}}></View>
                        <View style={{display: "flex", alignItems: "center", paddingHorizontal: 10}}>
                            <View style={{backgroundColor:"#c3e6b8", padding: 5, borderRadius: "100%", marginBottom: 5}}>
                                <BugOff color={"#0b3b00"}/>
                            </View>
                            <Text>Vermifugada</Text>
                            <Text>{dogInfos.dewormed ? "Sim" : "Não"}</Text>
                        </View>
                        <View style={{height: "100%", backgroundColor: "#ededed", width: 1}}></View>
                        <View style={{display: "flex", alignItems: "center", paddingHorizontal: 10}}>
                            <View style={{backgroundColor:"#c3e6b8", padding: 5, borderRadius: "100%", marginBottom: 5}}>
                                <HeartPulse color={"#0b3b00"}/>
                            </View>
                            <Text>Castrada</Text>
                            <Text>{dogInfos.castrated ? "Sim" : "Não"}</Text>
                        </View>
                        <View style={{height: "100%", backgroundColor: "#ededed", width: 1}}></View>
                        <View style={{display: "flex", alignItems: "center", paddingHorizontal: 10}}>
                            <View style={{backgroundColor:"#c3e6b8", padding: 5, borderRadius: "100%", marginBottom: 5}}>
                                <Microchip color={"#0b3b00"}/>
                            </View>
                            <Text>Microchip</Text>
                            <Text>{dogInfos.microchip ? "Sim" : "Não"}</Text>
                        </View>
                    </View>

                    <View style={{display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%", height: "40%", gap: 15}}>
                        <TouchableOpacity style={{flex: 1}}>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderWidth: 2, borderColor: "#115202", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10}}>
                                <ImagesIcon color={"#115202"} size={20}/> 
                                <Text style={{color: "#115202", fontWeight: "bold", fontSize: 16}}>Ver galeria</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={{flex: 1}}>
                            <View style={{display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", borderWidth: 1, borderColor: "#115202", backgroundColor: "#115202", paddingVertical: 10, paddingHorizontal: 20, borderRadius: 10}}>
                                <Send color={"#fff"} size={20}/>
                                <Text style={{color: "#fff", fontWeight: "bold", fontSize: 16}}>Quero adotar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    btnContainer: {
        position: "absolute",
        display: "flex",
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        top: 50,
        left: 0,
        zIndex: 10
    },
    imageContainer: {
        backgroundColor: "#c3c3",
        height: "45%",
    },
    image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover"
    },
    infoContainer: {
        width: "100%",
        height: "45%",
        backgroundColor: "#fff",
        topLine: {
            backgroundColor:"#fff", 
            position: "absolute", 
            width: "100%", 
            height: "3%", 
            top: "-3%", 
            borderTopEndRadius: 50, 
            borderTopStartRadius: 50
        }
    }
});