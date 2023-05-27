var DeviceInfo = require('react-native-device-info');

export const getDeviceInfo = () => {
  try {
    let AppName = DeviceInfo.getApplicationName();
    let DeviceBrand = DeviceInfo.getBrand();
    let OS = DeviceInfo.getSystemName();
    let SystemVersion = DeviceInfo.getSystemVersion();
    let AppVersion = DeviceInfo.getVersion();
    return {
      AppName,
      DeviceBrand,
      OS,
      SystemVersion,
      Module: 'MobileApp-Phase1',
      AppVersion,
    };
  } catch (e) {
    return {
      AppName: 'Tru Gate App',
      Module: 'MobileApp-Phase1',
    };
  }
};
