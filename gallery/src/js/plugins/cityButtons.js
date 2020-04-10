import $ from 'jquery'

import { onLoadHTMLSuccess } from '../core/includes'

const animationDuration = 300

function filterByCity(city) {
    $('[city]').each(function(index, element) {
        const isTarget = $(this).attr('city') === city
            || city === null

        if (isTarget) {
            $(this).parent().removeClass('d-none')
            $(this).fadeIn(animationDuration)
        } else {
            $(this).fadeOut(animationDuration, () => {
                $(this).parent().addClass('d-none')
            })
        }
    })
}

$.fn.cityButtons = function() {
    const cities = new Set
    $('[city]').each((index, element) => {
        cities.add($(element).attr('city'))
    })

    const buttons = Array.from(cities).map(city => {
        const button = $('<button>')

        button.addClass(['btn, btn-info']).html(city)
        button.click(event => filterByCity(city))

        return button
    })

    const buttonAll = $('<button>')
    buttonAll.addClass(['btn', 'btn-info', 'active']).html('All')
    buttonAll.click(event => filterByCity(null))
    buttons.push(buttonAll)

    const buttonGroup = $('<div>').addClass(['btn-group'])
    buttonGroup.append(buttons)

    $(this).html(buttonGroup)

    return this
}

onLoadHTMLSuccess(() => $('[city-buttons]').cityButtons())