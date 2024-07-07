/**
 * @Author: hqwx.com
 * @Date: 2024-07-07 12:11:45
 * @LastEditors: WRG(woter_wang@live.com)
 * @LastEditTime: 2024-07-07 17:31:54
 * @😍: 😃😃
 */
/**
 * @description 编辑图片 1.支持笔刷涂抹 2.支持橡皮擦擦除
 * @date 07/07/2024
 * @class EditImg
 */
class EditImg {
	constructor({ el, imgFile, size = 50, brashColor = 'rgba(224, 54, 115, 0.5)', tool = 'brush' } = {}) {
		// 容器
		this.el = el
		// 图片文件
		this.imgFile = imgFile
		//获取Dom元素尺寸
		this.wrapW = this.el.offsetWidth
		this.wrapH = this.el.offsetHeight
		// 是否正在绘制
		this.isDrawing = false
		// 上一个点的坐标
		this.lastX = 0
		// 上一个点的坐标
		this.lastY = 0
		// 笔刷大小
		this.brashSize = size
		// 笔刷颜色
		this.brashColor = brashColor;
		// 橡皮擦颜色
		this.eraseColor = brashColor;
		// 当前工具
		this.tool = tool // brush | eraser
		//初始化
		this.init()
	}

	//设置参数
	setOption (option) {

	}

	//设置笔刷大小
	setBrushSize (size) {
		this.brashSize = size
	}

	//设置笔刷颜色
	setBrushColor (color) {
		this.brashColor = color
	}

	createCanvas () {
		const canvas = document.createElement('canvas')
		const ctx = canvas.getContext('2d');
		//获取像素比
		const pixRatio = devicePixelRatio
		canvas.width = this.wrapW * pixRatio
		canvas.height = this.wrapH * pixRatio
		canvas.style.width = this.wrapW + 'px'
		canvas.style.height = this.wrapH + 'px'
		//设置canvas背景为透明
		ctx.fillStyle = 'rgba(255,255,255,1)';
		//插入到dom中
		this.el.appendChild(canvas)
		return { canvas, ctx };
	}

	//初始化
	init () {
		const { canvas, ctx } = this.createCanvas()
		this.canvas = canvas
		this.ctx = ctx
		// this.ctx.globalAlpha = 0.3

		//绑定事件
		this.bindEvent()
	}

	bindEvent () {
		const { canvas } = this
		canvas.addEventListener('mousedown', (e) => {
			this.handleMouseDown(e)
		})
		window.addEventListener('mousemove', this.handleMouseMove.bind(this), false)
		window.addEventListener('mouseup', (e) => {
			this.handleMouseUp(e)
			window.removeEventListener('mousemove', this.handleMouseMove.bind(this))
		})
	}

	handleMouseDown (e) {
		//是否为左键
		if (e.button !== 0) return
		const { offsetX, offsetY } = e
		this.isDrawing = true
		this.lastX = offsetX
		this.lastY = offsetY
		this.draw(offsetX, offsetY)
	}

	handleMouseMove (e) {
		if (!this.isDrawing) return
		//是否超出画布
		if (e.target !== this.canvas) {
			this.isDrawing = false
			return
		}
		const { offsetX, offsetY } = e
		this.lastX = offsetX
		this.lastY = offsetY
		this.draw(offsetX, offsetY)
	}

	draw (x, y) {
		if (this.tool === 'brush') {
			this.drawPath(x, y)
		}
		if (this.tool === 'eraser') {
			this.erasePath(x, y)
		}

	}

	handleMouseUp () {
		const { ctx } = this
		ctx.closePath()
		this.isDrawing = false
		this.lastX = 0
		this.lastY = 0
	}

	changeTool (tool) {
		this.tool = tool
	}

	//事件节流
	throttle (fn, delay) {
		let last = 0
		return function () {
			const now = Date.now()
			if (now - last > delay) {
				fn.apply(this, arguments)
				last = now
			}
		}
	}

	//事件防抖
	debounce (fn, delay) {
		let timer = null
		return function () {
			clearTimeout(timer)
			timer = setTimeout(() => {
				fn.apply(this, arguments)
			}, delay)
		}
	}

	//绘制路径
	drawPath (x, y,) {
		const { ctx } = this
		ctx.save()
		ctx.globalCompositeOperation = "xor"
		ctx.lineWidth = this.brashSize
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		ctx.strokeStyle = this.brashColor
		ctx.beginPath()
		ctx.moveTo(this.lastX, this.lastY)
		ctx.lineTo(x, y)
		ctx.stroke()
	}

	//橡皮擦 擦除路径 而不是绘制路径
	erasePath (x, y) {
		const { ctx, canvas } = this
		ctx.save()
		ctx.beginPath()
		ctx.globalCompositeOperation = "destination-out"
		ctx.lineWidth = this.brashSize
		ctx.strokeStyle = this.eraseColor
		ctx.lineCap = 'round'
		ctx.lineJoin = 'round'
		ctx.moveTo(x, y)
		ctx.lineTo(x, y)
		ctx.stroke()
	}

	//清空画布
	clear () {
		const { canvas, ctx } = this
		ctx.clearRect(0, 0, canvas.width, canvas.height)
	}

	//导出图片
	exportImg (outputType = 'image/png', quality = 1) {
		//把所有 > 0 的像素点转换为黑色且不透明
		const { ctx, canvas } = this
		const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height)
		const data = imgData.data
		for (let i = 0; i < data.length; i += 4) {
			if (data[ i ] > 0) {
				data[ i ] = 0
				data[ i + 1 ] = 0
				data[ i + 2 ] = 0
				data[ i + 3 ] = 255
			}
		}
		// ctx.putImageData(imgData, 0, 0)
		// return this.canvas.toDataURL(outputType, quality)
		// imgData.data = data
		return OutputWithCanvas(imgData, outputType, quality)
	}
}
/**
 * @description
 * @date 07/07/2024
 * @param {*} imgFile
 * @param {string} [outputType='image/png']
 * @param {number} [quality=1]
 * @return {*} 
 */
function OutputWithCanvas (imgFile, outputType = 'image/png', quality = 1) {
	console.log('🚀 ~ file: cavasWithEditImg.js:219 ~ OutputWithCanvas ~ imgFile:', imgFile);
	//判断imgFile是否arrayBuffer
	if (imgFile instanceof ImageData) {
		const canvas = document.createElement('canvas')
		canvas.width = imgFile.width
		canvas.height = imgFile.height
		const ctx = canvas.getContext('2d');
		ctx.putImageData(imgFile, 0, 0)
		return canvas.toDataURL(outputType, quality)
	}
	//判断imgFile是否为图片路径
	if (typeof imgFile == 'string') {
		const img = new Image()
		img.src = imgFile
		img.onload = () => {
			const canvas = document.createElement('canvas')
			const ctx = canvas.getContext('2d');
			canvas.width = img.width
			canvas.height = img.height
			ctx.drawImage(img, 0, 0)
			return canvas.toDataURL(outputType, quality)
		}
	}
	//判断imgFile是否为图片对象
	if ((imgFile instanceof HTMLImageElement)) {
		const canvas = document.createElement('canvas')
		canvas.width = imgFile.width
		canvas.height = imgFile.height
		const ctx = canvas.getContext('2d');
		ctx.drawImage(imgFile, 0, 0)
		return canvas.toDataURL(outputType, quality)
	}

	return null
}
export {
	EditImg,
	OutputWithCanvas
};