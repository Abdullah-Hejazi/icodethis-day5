let items = document.getElementsByClassName('chart-canvas-bars')

let heights = [
    {
        purple: 168,
        pink: 80
    },
    {
        purple: 108,
        pink: 36
    },
    {
        purple: 72,
        pink: 18
    },
    {
        purple: 157,
        pink: 81
    },
    {
        purple: 99,
        pink: 62
    },
    {
        purple: 67,
        pink: 36
    },
    {
        purple: 26,
        pink: 13
    }
]

for(let i = 0; i < items.length; i++) {
    items[i].getElementsByClassName('chart-canvas-bar-purple')[0].style.height = heights[i].purple + 'px'
    items[i].getElementsByClassName('chart-canvas-bar-pink')[0].style.height = heights[i].pink + 'px'
}

let topbarButtons = document.getElementsByClassName('topbar-option')

for(let i = 0; i < topbarButtons.length; i++) {
    topbarButtons[i].addEventListener('click', function() {
        for(let j = 0; j < topbarButtons.length; j++) {
            topbarButtons[j].classList.remove('topbar-option-selected')
        }
        topbarButtons[i].classList.add('topbar-option-selected')
    })
}

let mainContainer = document.getElementById('main-container')

mainContainer.style.boxShadow = '-18px -18px 0px 0px rgba(255, 255, 255, 0.2)'