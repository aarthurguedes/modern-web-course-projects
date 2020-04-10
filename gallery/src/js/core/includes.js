import $ from 'jquery'

const loadHTMLSuccessCallbacks = []

export function onLoadHTMLSuccess(callback) {
    if (!loadHTMLSuccessCallbacks.includes(callback)) {
        loadHTMLSuccessCallbacks.push(callback)
    }
}

const loadIncludes = parent => {
    if (!parent) {
        parent = 'body'
    }

    $(parent).find('[include]').each((index, element) => {
        const url = $(element).attr('include')
        $.ajax({
            url,
            success(data) {
                $(element).html(data)
                $(element).removeAttr('include')

                loadHTMLSuccessCallbacks.forEach(callback => callback())
                loadIncludes(element)
            }
        })
    })
}

loadIncludes()