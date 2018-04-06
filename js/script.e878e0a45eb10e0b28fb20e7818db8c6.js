window.replaceWithCalendar = function (calendarPlaceholder, calendarData) {
  var ul = document.createElement('ul')
  {
    ul.classList.add('mdl-list')
    var i = 0, n = calendarData.events.length
    while (i < n) {
      var event = calendarData.events[i]
      var li = document.createElement('li')
      {
        li.classList.add('mdl-list__item')
        li.classList.add('mdl-list__item--two-line')
        var primaryContentSpan = document.createElement('span')
        {
          primaryContentSpan.classList.add('mdl-list__item-primary-content')
          var iconI = document.createElement('i')
          {
            iconI.classList.add('material-icons')
            iconI.classList.add('mdl-list__item-icon')
            iconI.appendChild(document.createTextNode(event.icon))
          }
          primaryContentSpan.appendChild(iconI)
          var contentSpan = document.createElement('span')
          {
            if (event.canceled) contentSpan.classList.add('canceled')
            contentSpan.appendChild(document.createTextNode(event.title))
          }
          primaryContentSpan.appendChild(contentSpan)
          var subtitleSpan = document.createElement('span')
          {
            subtitleSpan.classList.add('mdl-list__item-sub-title')
            subtitleSpan.appendChild(document.createTextNode(event.date))
          }
          primaryContentSpan.appendChild(subtitleSpan)
        }
        li.appendChild(primaryContentSpan)
        if (event.canceled) {
          var secondaryContentSpan = document.createElement('span')
          {
            var canceledId = 'event-' + i + '-canceled'
            secondaryContentSpan.classList.add('mdl-list__item-secondary-content')
            var statusI = document.createElement('i')
            {
              statusI.classList.add('material-icons')
              statusI.setAttribute('id', canceledId)
              statusI.appendChild(document.createTextNode('error_outline'))
            }
            secondaryContentSpan.appendChild(statusI)
            var statusTooltip = document.createElement('span')
            {
              statusTooltip.classList.add('mdl-tooltip')
              statusTooltip.classList.add('mdl-tooltip--top')
              statusTooltip.setAttribute('for', canceledId)
              statusTooltip.appendChild(document.createTextNode('Fällt aus'))
            }
            secondaryContentSpan.appendChild(statusTooltip)
          }
          li.appendChild(secondaryContentSpan)
        }
      }
      ul.appendChild(li)
      i += 1
    }
  }
  calendarPlaceholder.parentNode.replaceChild(ul, calendarPlaceholder)
}
