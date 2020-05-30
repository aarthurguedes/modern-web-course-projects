const fs = require('fs')

module.exports = paths => {
    return new Promise((resolve, reject) => {
        try {
            const rows = paths
                .map(path => fs.readFileSync(path).toString('utf-8'))
                .reduce((fullText, currentText) => `${fullText}\n${currentText}`)
                .split('\n')
            resolve(rows)
        } catch (error) {
            reject(error)
        }
    })
}