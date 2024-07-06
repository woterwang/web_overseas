/**
 * @Author: hqwx.com
 * @Date: 2024-07-06 19:23:56
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-06 19:40:32
 * @😍: 😃😃
 */
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const saveKey = 'user_temp_fingerprint'
function getFingerprint () {
	return new Promise((resolve, reject) => {
		// 从localStorage获取指纹
		const fingerprint = localStorage.getItem(saveKey) || null
		// 如果localStorage中有指纹，直接返回
		if (fingerprint) {
			resolve(fingerprint)
		}
		// 如果localStorage中没有指纹，重新生成并保存
		FingerprintJS.load().then(fp => {
			fp.get().then(result => {
				const { visitorId } = result
				localStorage.setItem(saveKey, visitorId)
				resolve(visitorId)
			})
		})
	})
}
function saveFingerprint (fingerprint) {
	localStorage.setItem(saveKey, fingerprint)
}
export default getFingerprint