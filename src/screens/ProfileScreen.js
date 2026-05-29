import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default function ProfileScreen() {
    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Image
                source={{
                    uri: 'https://i.pravatar.cc/300',
                }}
                style={styles.profileImage}
            />

            <Text style={styles.name}>Fernando</Text>
            <Text style={styles.email}>fernando@email.com</Text>

            <View style={styles.menuContainer}>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>❤️ Favoritos</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>🔔 Notificações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>⚙️ Configurações</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <Text style={styles.menuText}>❓ Ajuda</Text>
                </TouchableOpacity>

            </View>

            <TouchableOpacity style={styles.notificationButton}>
                <Text style={styles.notificationButtonText}>
                    Testar Notificação
                </Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        alignItems: 'center',
        backgroundColor: '#F4F6F8',
        padding: 20,
    },

    profileImage: {
        width: 130,
        height: 130,
        borderRadius: 65,
        marginTop: 40,
        marginBottom: 20,
    },

    name: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#2E7D32',
    },

    email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 30,
    },

    menuContainer: {
        width: '100%',
    },

    menuItem: {
        backgroundColor: '#FFFFFF',
        padding: 18,
        borderRadius: 12,
        marginBottom: 15,
        elevation: 2,
    },

    menuText: {
        fontSize: 18,
        color: '#333',
    },

    notificationButton: {
        backgroundColor: '#2E7D32',
        paddingVertical: 16,
        paddingHorizontal: 30,
        borderRadius: 12,
        marginTop: 30,
        width: '100%',
        alignItems: 'center',
    },

    notificationButtonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
    },
});