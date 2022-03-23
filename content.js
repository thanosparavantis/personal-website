const fs = require("fs")

console.log("Starting content export")

const photos = []
const photosPath = "./content/photos/previews"
const photosExportPath = "./src/_photos.json"

fs.cpSync("./content/photos/", "./src/images/", {recursive: true})

fs.readdirSync(photosPath).forEach(filename => {
  console.log(`Found photo: ${filename}`)

  const baseFileName = filename.replaceAll(".jpg", "")
  const slug = baseFileName.replaceAll("_", "-")

  let name = baseFileName.replaceAll("_", " ")
  name = name.charAt(0).toUpperCase() + name.slice(1)

  photos.push({
    "slug": slug,
    "name": name,
    "filename": filename,
  })
})

console.log(`Exporting photos to file: ${photosExportPath}`)
fs.writeFileSync(photosExportPath, JSON.stringify(photos))

const projects = []
const projectsPath = "./content/projects"
const projectsExportPath = "./src/_projects.json"

fs.readdirSync(projectsPath).forEach(filename => {
  console.log(`Found project: ${filename}`)

  const projectPath = `${projectsPath}/${filename}`
  const projectObj = JSON.parse(fs.readFileSync(projectPath, "utf8"))
  projects.push(projectObj)
})

console.log(`Exporting projects to file: ${projectsExportPath}`)
fs.writeFileSync(projectsExportPath, JSON.stringify(projects))

console.log("Finished exporting content")
