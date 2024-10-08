let curArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
let curUser = 1

const sym = document.querySelectorAll('.sym')
const field = document.querySelector('.field')

function render(arr, elems) {
    arr.forEach((el, i) => {
        elems[i].textContent = el == 1 ?
            'O' :
            el == -1 ? 'X' : ''
    });
}

function checker(arr) {
    const check = (el1, el2, el3) => {
        if ((el1 !== 0) && (el2 !== 0) && (el3 !== 0) && (el1 === el2) && (el2 === el3)) {
            alert(`Победил игрок ${el1 === 1 ? '1' : '2'}`)
            curArr = [0, 0, 0, 0, 0, 0, 0, 0, 0]
            render(curArr, sym)
        }
    }

    check(arr[0], arr[1], arr[2])
    check(arr[3], arr[4], arr[5])
    check(arr[6], arr[7], arr[8])

    check(arr[0], arr[3], arr[6])
    check(arr[1], arr[4], arr[7])
    check(arr[2], arr[5], arr[8])

    check(arr[0], arr[4], arr[8])
    check(arr[2], arr[4], arr[6])
}

function userToggle() {
    curUser = curUser === 1 ? -1 : 1
}

// function compI(arr) {
//     if (arr[4] === 0) {
//         arr[4] = -1
//     } else if () {}
// }

// console.log(sym);


field.addEventListener('click', (e) => {
    curArr[e.target.id] = curArr[e.target.id] === 0 ? curUser : curArr[e.target.id]

    render(curArr, sym)
    checker(curArr)
    userToggle()
    // compI(curArr)
    render(curArr, sym)
    checker(curArr)
})