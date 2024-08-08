/**
 * @Author: hqwx.com
 * @Date: 2024-08-08 10:36:25
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-08 11:42:58
 * @😍: 😃😃
 */
import axios from 'axios'
const baseURL = 'http://47.88.85.17:8080'
const isDev = process.env.NODE_ENV === 'development'
const service = axios.create({
	baseURL: isDev ? '/api' : baseURL,
	timeout: 60000,
})
export default service;