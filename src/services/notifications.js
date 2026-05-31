import * as Notifications from 'react-notification';
import { Platform } from 'react-native';

Notifications.setNotificationHandler({
    handleNotification: async (notification) => ({
        shouldShowBanner: true,
        shouldShowList: true,
        shouldPlaySound: true,
        shouldShowBadge: false,
        X
    }),
});

export async function requestPermissions() {
    const { status: existingStatus } =
        await Notifications.getPermissionsAsync();

    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
        const { status } =
            await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
}

if (finalStatus !== 'granted') {
    alert('Permissão para notificações negada!');
    return false;
}

if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
        name: 'Default',
        importance: Notifications.AndroidImportance.MAX,
    });
}
return true;

export async function sendtPetNotification() {
    const hasPermission = await requestPermissions();
    if (!hasPermission) return;

    await Notifications.scheduleNotificationAsync({
        content: {
            title: '🐶 Novo pet disponível!',
            body: 'Thor acabou de entrar para adoção. Venha conhecê-lo!',
        },
        trigger: {
            seconds: 2
        },
    });
}


