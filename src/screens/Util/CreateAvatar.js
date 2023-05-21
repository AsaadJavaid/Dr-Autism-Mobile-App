import { Image } from 'react-native';
import RNFS from 'react-native-fs';



const createAvatarObject = async () => {
    const avatarFolder = '../../../assets/Avatars'; // Path to the avatar folder
    



    try {
        const avatarFiles = await RNFS.readDirAssets(avatarFolder);
        console.log("avatar file is ", avatarFiles)


        const avatarImages = {};
        await Promise.all(
            avatarFiles.map(async (file) => {
                if (file.isFile() && file.name.match(/\.(jpg|jpeg|png)$/i)) {
                    const imageUri = `${avatarFolder}/${file.name}`;
                    const imageKey = file.name.replace(/\.(jpg|jpeg|png)$/i, '');



                    avatarImages[imageKey] = { uri: imageUri };
                    await Image.prefetch(imageUri);
                }
            })
        );


        console.log("avatar images ",avatarImages)
        return avatarImages;
    } catch (error) {
        console.error('Error reading avatar directory:', error);
        return {};
    }
};



export default createAvatarObject;