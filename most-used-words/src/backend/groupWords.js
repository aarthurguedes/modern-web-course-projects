module.exports = words => {
    return new Promise((resolve, reject) => {
        try {
            const groupedWordsObj = words
                .reduce((obj, word) => {
                    if (obj[word]) {
                        obj[word]++
                    } else {
                        obj[word] = 1
                    }
                    return obj
                }, {})
            
            const groupedWordsArray = Object.keys(groupedWordsObj)
                .map(key => ({ name: key, amount: groupedWordsObj[key] }))
                .sort((w1, w2) => w2.amount - w1.amount)

            resolve(groupedWordsArray)
        } catch (error) {
            reject(error)
        }
    })
}
