module.exports = rows => {
    return new Promise((resolve, reject) => {
        try {
            const words = rows
                .filter(filterValidRow)
                .map(removePunctuation)
                .map(removeTags)
                .reduce(mergeRows)
                .split(' ')
                .map(wordToLowerCase)
                .map(removeDoubleQuotes)
            
            resolve(words)
        } catch (error) {
            reject(error)
        }
    })
}

const filterValidRow = row => isNaN(row) && 
    !row.includes('-->') && 
    row.trim().length !== 0

const removePunctuation = row => row.replace(/[,?!.-]/g, '')
const removeTags = row => row.replace(/(<[^>]+)>/ig, '').trim()
const mergeRows = (fullText, currentRow) => `${fullText} ${currentRow}`
const wordToLowerCase = word => word.toLowerCase()
const removeDoubleQuotes = word => word.replace('""', '')