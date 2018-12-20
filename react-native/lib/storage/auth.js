import { AsyncStorage } from 'react-native';
import storageParams from './storageParams';

/**
 * 判断是否登陆，true已登录
 * @return {boolean}
 */
const checkAuth = async () => {
    const isLogin = await getAuth();
    return isLogin !== false;
};

/**
 * 设置登陆信息
 * @return {object}
 */
const setAuth = ( data ) => {
    const info = AsyncStorage.setItem( storageParams.AuthInfo, JSON.stringify( data ) );
    info.then( res => {
        console.log( '保存登录信息成功' )
    } ).catch( res => {
        console.log( '保存登录信息失败' )
    } );
};

/**
 * 获取登陆信息
 * @return {object}
 */
const getAuth = async () => {
    const info = await AsyncStorage.getItem( storageParams.AuthInfo );
    return info !== null ? JSON.parse( info ) : false;
};

/**
 * 删除登录信息
 */
const clearAuth = () => {
    const info = AsyncStorage.removeItem( storageParams.AuthInfo );
    info.then( res => {
        console.log( '删除登录信息成功' )
    } ).catch( res => {
        console.log( '删除登录信息失败' )
    } )
};

export default {
    checkAuth,
    setAuth,
    getAuth,
    clearAuth,
}
