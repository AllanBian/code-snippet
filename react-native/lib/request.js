import hostConfig from './host';
import { apiConfig, getSysCodeText } from './api/apiConfig';
import { Platform } from "react-native";
import { Toast } from "native-base";
import { Constants } from 'expo';

const { manifest } = Constants;
const bundleId = Platform.OS === 'android' ? manifest.android.package : manifest.ios.bundleIdentifier;

const host = /\.dev$/.test( bundleId ) ? hostConfig.devHost : hostConfig.proHost;
console.log( "bundleId: ", bundleId );
console.log( "host: ", host );

// 封装fetch
const _request = async ( url, configs, headers = {} ) => {
    try {
        let options = Object.assign( {
            credentials: "include",
        }, configs );
        options.headers = Object.assign( {}, options.headers || {}, headers || {} );
        let response = await fetch( url, options );
        let res = _processResult( response );
        return res;
    } catch ( error ) {
        Toast.show({
            text: error,
            type: "danger",
        });
        // throw error;
        return null;
    }
};

// 处理异步结果
const _processResult = async ( response ) => {
    let data = await response.json();
    let status = data.status || data.err || 0;
    let message = data.msg;
    let msg = getSysCodeText( status );

    // 请求成功返回数据
    if ( status === 0 ) {
        return {
            data,
            response
        }
    } else if ( status === 403 ) {
        Toast.show({
            text: msg,
            buttonText: "好的",
            type: "warning",
        });
    } else if ( status === -200 ) {
        Toast.show({
            text: message,
            buttonText: "好的",
            type: "warning",
        });
    } else {
        Toast.show({
            text: message,
            buttonText: "好的",
            type: "warning",
        });
    }
};

// 组装不同请求的初始化参数
const getConfig = ( data, urlTag, type ) => {
    let configs = {};
    configs.url = `${host}${apiConfig[ urlTag ]}`;
    configs.headers = {};
    switch ( type ) {
        case 'POST':
            configs.method = type;
            configs.body = ( data !== null ) ? _formDataParams( data ) : _formDataParams( {} );
            break;
        case 'GET':
            configs.method = type;
            configs.url = ( data !== null ) ? configs.url + _joinParams( data ) : configs.url;
            break;
        case 'UPLOAD':
            configs.method = 'POST';
            configs.headers = { 'Content-Type': 'multipart/form-data' };
            configs.body = ( data !== null ) ? _formDataParams( data ) : _formDataParams( {} );
            break;
        default:
            break;
    }
    return configs;
};

// 拼接get请求参数
const _joinParams = ( data ) => {
    let params = '';
    Object.keys( data ).map( ( key, index ) => {
        params += `${index === 0 ? '?' : '&'}${key}=${data[ key ]}`;
    } );
    return params;
};

// 拼接post请求参数
const _formDataParams = ( data ) => {
    const timeStamp = Date.now();
    const formData = new FormData();
    data.timeStamp = timeStamp;
    Object.keys( data ).forEach( key => {
        formData.append( key, data[ key ] );
    } );
    return formData;
};

// 封装post
export const Post = ( data = null, urlTag ) => {
    const configs = getConfig( data, urlTag, type = 'POST' );
    return _request( configs.url, configs, configs.headers );
};

// 封装get
export const Get = ( data = null, urlTag ) => {
    const configs = getConfig( data, urlTag, type = 'GET' );
    return _request( configs.url, configs, configs.headers );
};

// 封装上传文件
export const Upload = ( data = null, urlTag ) => {
    const configs = getConfig( data, urlTag, type = 'UPLOAD' );
    return _request( configs.url, configs, configs.headers );
};
