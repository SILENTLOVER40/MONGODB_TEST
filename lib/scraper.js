const axios = require('axios')
const fs = require('fs-extra')	
const path = require('path')	
const cheerio = require('cheerio')	
const {	
	spawn	
} = require('child_process')	
let BodyForm = require('form-data')	
let {	
	fromBuffer	
} = require('file-type')	
let fetch = require('node-fetch')
function TelegraPh(Path) {
	return new Promise(async (resolve, reject) => {	
		if (!fs.existsSync(Path)) return reject(new Error("File not Found"))	
		try {	
			const form = new BodyForm();	
			form.append("file", fs.createReadStream(Path))	
			const data = await axios({	
				url: "https://telegra.ph/upload",	
				method: "POST",	
				headers: {	
					...form.getHeaders()	
				},	
				data: form	
			})	
			return resolve("https://telegra.ph" + data.data[0].src)	
		} catch (err) {	
			return reject(new Error(String(err)))	
		}	
	})	
}	
