export function check(listStore, correct, letter) {
    var is = Array.from(correct).filter((c) => c === letter)
    if (is.length === 2) { shown(listStore, letter) }
    is.length < 2 ? setTimeout(() => {
        clear(listStore)
    }, 200) : clear(listStore)
}

function clear(listStore) {
    listStore.map((store) => {
        if (!store.correct) store.show = false
    })
}

function shown(listStore, letter) {
    listStore.map((store) => {
        if (letter === store.letter) store.correct = true
    })
}

export function lesThenTen(value) {
    return value < 10 ? `0${value}` : value
}

export function saveHistory(history, totalTime) {
    var date = new Date()
    history[history.length - 1].name = history[history.length - 1].name
    history[history.length - 1].date = `${date.getUTCDate() < 10 ? '0' + date.getUTCDate()
        : date.getUTCDate()}/
          ${date.getUTCMonth() < 10 ? '0' + (date.getUTCMonth() + 1)
            : date.getUTCMonth() + 1}/${date.getUTCFullYear()}`
    history[history.length - 1].time = totalTime
    localStorage.setItem('history', JSON.stringify(history))
}