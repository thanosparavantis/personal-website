const fs = require("fs")

console.log("Starting content export")

const projectsPath = "./content/projects"
const projectsExportPath = "./src/_projects.json"

projects = []

fs.readdirSync(projectsPath).forEach(file => {
  const projectPath = `${projectsPath}/${file}`
  console.log(`Found project file: ${projectPath}`)
  const projectObj = JSON.parse(fs.readFileSync(projectPath, "utf8"))
  projects.push(projectObj)
})

console.log(`Exporting projects to file: ${projectsExportPath}`)
fs.writeFileSync(projectsExportPath, JSON.stringify(projects))

console.log("✔ Finished exporting content")
