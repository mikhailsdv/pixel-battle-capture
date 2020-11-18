const axios = require("axios")
const { createCanvas, loadImage, registerFont } = require("canvas")
const fs = require("fs")
const colors = {
	0: "rgb(255,255,255)",
	1: "rgb(194,194,194)",
	2: "rgb(133,133,133)",
	3: "rgb(71,71,71)",
	4: "rgb(0,0,0)",
	5: "rgb(58,175,255)",
	6: "rgb(113,170,235)",
	7: "rgb(74,118,168)",
	8: "rgb(7,75,248)",
	9: "rgb(94,48,235)",
	a: "rgb(255,108,91)",
	b: "rgb(254,37,0)",
	c: "rgb(255,33,139)",
	d: "rgb(153,36,79)",
	e: "rgb(77,44,156)",
	f: "rgb(255,207,74)",
	g: "rgb(254,180,63)",
	h: "rgb(254,134,72)",
	i: "rgb(255,91,54)",
	j: "rgb(218,81,0)",
	k: "rgb(148,224,68)",
	l: "rgb(92,191,13)",
	m: "rgb(195,209,23)",
	n: "rgb(252,199,0)",
	o: "rgb(211,131,1)"
}
const width = 1590 //don't change, actual width of pixel battle canvas
const height = 400 //don't change, actual height of pixel battle canvas
const pixelSize = 10 //size of a pixel in result image, min = 1, max = 20

const getData = async () => {
	const response = await axios.get("https://pixel-dev.w84.vkforms.ru/api/data")
	if (response.status === 200) {
		return response.data.replace(/\[.+/, "").split("")
	}
	else {
		console.log("Request error. Try again.")
	}
}

const drawPixels = pixels => {
	const canvas = createCanvas(width * pixelSize, height * pixelSize)
	const ctx = canvas.getContext("2d")

	for (let y = 0; y < height; y++) {
		for (let x = 0; x < width; x++) {
			let index = x + (y * width)
			const colorCode = pixels[index]
			const color = colors[colorCode]
			ctx.fillStyle = color
			ctx.fillRect(x * pixelSize, y * pixelSize, pixelSize, pixelSize);
		}
	}

	const resultBuffer = canvas.toBuffer("image/png")
	fs.writeFileSync(__dirname + `/pb_${(new Date()).valueOf()}.png`, resultBuffer)
}

const start = async () => {
	const pixels = await getData()
	drawPixels(pixels)
}

start()