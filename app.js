// importing fs & path module
const fs = require('node:fs/promises')
const path = require('node:path')

// initializing source & destination directory
const cluttersDir = path.join(__dirname, 'clutters')
const organizedDir = path.join(__dirname, 'organized')

async function organizeFiles() {
	// Read all files from the clutters directory
	const files = await fs.readdir(cluttersDir)

	for (const file of files) {
		// extracting ext name of file
		const ext = path.extname(file).slice(1)

		// Skip files with no extension
		if (!ext) {
			console.warn(`Skipping "${file}" — no extension found.`)
			continue
		}

		// making sourch, destination-dir & destination path
		const sourcePath = path.join(cluttersDir, file)
		const destDirPath = path.join(organizedDir, ext)
		const destPath = path.join(destDirPath, file)

		// Creating directory if it doesn't exist
		await fs.mkdir(destDirPath, { recursive: true })

		// moving file to organized directory
		await fs.rename(sourcePath, destPath)
		console.log(`Moved: ${file} to - organized/${ext}/`)
	}

	console.log('File organization completed!')
}

organizeFiles().catch((err) => {
	console.error('Error occures during file organization:', err)
	process.exit(1)
})