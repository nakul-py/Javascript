const myObject = {
    js: 'JavaScript',
    py: 'Python',
    cpp: 'C++',
}

for (const i in myObject) {
    // console.log(`Key: ${i}, Value: ${myObject[i]}`);
}

const programming = ['js', 'py', 'cpp'];

for (const i in programming) {
    // console.log(`Key: ${i}, Value: ${programming[i]}`);
}

const map = new Map()
map.set('In', 'India')
map.set('Us', 'United States')
map.set('Au', 'Australia')

for (const key in map) {
    console.log(key, "->", map[key]); // This will not work as expected because map is not an array
}
