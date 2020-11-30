let square = 5;
let hashes = '';

for (let base = 0 ; base < square ; base += 1) {
    hashes = hashes + '*';
}
for (let height = 0 ; height < square ; height += 1) {
    console.log(hashes)
}