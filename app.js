// importing fs/promises nodejs module
const fs = require('node:fs/promises')
// importing path nodejs module
const path = require('node:path')

// making files directory path
const filesDir = path.join(__dirname, 'clutters')

;(async function () {
	// scaning files directory
	const files = await fs.readdir(filesDir)

    // traversing all files inside clutters folder
    for (const file of files) {
        
    }
})()