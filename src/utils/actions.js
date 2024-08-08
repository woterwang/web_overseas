/**
 * @Author: hqwx.com
 * @Date: 2024-08-08 10:38:58
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-08-08 21:52:08
 * @😍: 😃😃
 */
import Request from './request';

export const get = (url, params) => Request.get(url, { params });

//用户登录接口
export const login = (params = {
	app_id: 'fantasylabsai.com',//	String	是	产品标识
	user_id: 0,//	String	是	客户端生成的用户ID
	account_id: 0,//	String	是	用户邮箱
}) => Request.post('/auth/login', { ...params, app_id: 'fantasylabsai.com' }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

//登录有效期检测接口
export const checkLogin = (key = 'account_id') => {
	const account_id = localStorage.getItem(key) || null;
	if (!account_id) return Promise.resolve(`${ key } is null`);
	const params = { account_id };
	return Request.get('/auth/login/check', { params });
}

//用户退出登录接口
export const logout = (params = {
	account_id: 0,//	String	是	用户邮箱
}) => Request.post('/auth/logout', params);

//用户通过邮件链接登录接口
export const loginByMail = (params = {
	token: 0,//	String	是	邮件中包含的登录 token
}) => Request.get('/auth/login/confirm', {params});