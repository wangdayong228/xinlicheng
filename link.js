const fs = require("fs")
const { join } = require("path")

const root = "./pic"
// const dir = fs.readdirSync(root)
// console.log(dir)
// dir.forEach(d => {
//     // if (d != ".DS_Store") {
//         // let files = fs.readdirSync(`./pic/${d}`)
//         // console.log(files)
//         // files.map(f=>`![${f}](./pic/${d}/${f})`).forEach(f=>console.log(f))
//     // }
//     let subDir = `${root}/${d}`
//     fs.stat(subDir, (err,stats)=>{
//         console.log(subDir, stats.isDirectory())
//         if(stats.isDirectory()){
//             printFiles(subDir)
//         }else{

//         }
//     })
// })

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
    files.map(f => `![${f}](${path}/${f})`).forEach(f => {
        if (f.indexOf(".DS_Store") < 0) {
            console.log("[" + f.replace("!", "").substr(3))
            if (f.indexOf(".mp4") < 0) {
                console.log(f)
            }
            console.log()
        }
    })
}