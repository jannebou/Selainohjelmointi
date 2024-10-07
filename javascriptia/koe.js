const x = 1
let y = 5

console.log(x, y)
y += 10
console.log(x, y)
y = "teksti"
console.log(x, y)

const t = [1, -1, 3]

console.log(t.length) // tulostuu 3
console.log(t[1])     // tulostuu -1

t.push(5)             // lisätään taulukkoon luku 5

console.log(t.length) // tulostuu 4

t.forEach(value => {
  console.log(value)  // tulostuu 1, -1, 3, 5 omille riveilleen
})      