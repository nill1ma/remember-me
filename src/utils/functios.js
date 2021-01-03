export function check(listStore, correct, letter) {
    var is = Array.from(correct).filter((c) => c === letter)
    if (is.length === 2) { shown(listStore, letter) }
    setTimeout(() => {
        clear(listStore)
    }, 1000)
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
