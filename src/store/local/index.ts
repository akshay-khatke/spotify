import EncryptedStorage from 'react-native-encrypted-storage';

const storeLocalData = async (key: string, value: any) => {
  try {
    const data = JSON.stringify(value);
    await EncryptedStorage.setItem(key, data);
    console.info('Item with some key and value stored');
  } catch (error) {
    console.error('Error while saving some key value');
  }
};

const getItem = async (key: string) => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (value) {
      return JSON.parse(value);
    }
    return null;
  } catch (error) {
    console.error('Error while retrieving some key');
  }
};

const removeLocalData = async (key: string) => {
  try {
    await EncryptedStorage.removeItem(key, () => {
      console.info('Item with some key removed');
    });

    return null;
  } catch (error) {
    console.error('Error while removing some key');
  }
};

const clearSession = async () => {
  try {
    await EncryptedStorage.clear(() => {
      console.info('Cleared the Login session');
    });
  } catch (error) {
    console.error('Error while clearing the Login session');
  }
};
const keys = {
  User: 'User',
};

//local storage utils

export { storeLocalData, getItem, removeLocalData, clearSession, keys };
