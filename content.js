const fs = require("fs")

console.log("Starting content export")

const photos = []
const photosSourceFullPath = "./content/photos/full"
const photosSourcePreviewsPath = "./content/photos/previews"
const photosTargetFullPath = "./src/images/full"
const photosTargetPreviewsPath = "./src/images/previews"
const photosExportPath = "./src/_photos.json"

fs.readdirSync(photosSourceFullPath).forEach(filename => {
  console.log(`Found photo: ${filename}`)

  const baseFileName = filename.replace(/.jpg/g, "")
  const slug = baseFileName.replace(/_/g, "-")

  let name = baseFileName.replace(/_/g, " ")
  name = name.charAt(0).toUpperCase() + name.slice(1)

  photos.push({
    "slug": slug,
    "name": name,
    "filename": filename,
  })
})

fs.readdirSync(photosSourceFullPath).forEach(filename => {
  fs.writeFileSync(`${photosTargetFullPath}/${filename}`, fs.readFileSync(`${photosSourceFullPath}/${filename}`))
  fs.writeFileSync(`${photosTargetPreviewsPath}/${filename}`, fs.readFileSync(`${photosSourcePreviewsPath}/${filename}`))
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
