const fs = require("fs")
const { join } = require("path")

const root = "./pic"

printFiles(`${root}/1`)
printFiles(`${root}/2/1green`)
printFiles(`${root}/2/2blue`)
printFiles(`${root}/2/3red`)
printFiles(`${root}/2/4yellow`)
printFiles(`${root}/3`)
printFiles(`${root}/4`)

function printFiles(dir) {
    path = dir
    let files = fs.readdirSync(path)
    files.map(f => {
        return {
            name: f.substr(2).replace(".jpeg", "").replace(".mp4", "").replace(".png", ""),
            link: f.indexOf(".mp4") >= 0 ? `[${f}](${path}/${f})` : `![${f}](${path}/${f})`
        }
    }).forEach(item => {
        if (item.name.indexOf("_Store") < 0) {
            console.log(item.name)
            // if (item.link.indexOf(".mp4") < 0) {
            console.log(item.link)
            // }
            console.log()
        }
    })
}