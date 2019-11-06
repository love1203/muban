import * as API from "./index.js"

export default{
    // 根据经纬度获取地址
  getLocation: params => {
    return API.GET('/v3/geocode/regeo', params)
  },
  // 天气
  getTianqi: params => {
    return API.GET('/v3/weather/weatherInfo', params)
  },
  // POI点
  getPOI: params => {
    return API.GET('/v3/place/text', params)
  },
}