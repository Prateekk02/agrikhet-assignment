const fs = require('fs');
const path = require('path');


const schemaTemplatePath = path.join(__dirname, 'schema-template.prisma');
const modelsPath = path.join(__dirname, 'models');
const outputSchemaPath = path.join(__dirname, 'schema.prisma');


let schemaTemplate = fs.readFileSync(schemaTemplatePath, 'utf8');


const modelFiles = fs.readdirSync(modelsPath).filter(file => file.endsWith('.prisma'));


modelFiles.forEach(file => {
  const modelFilePath = path.join(modelsPath, file);
  const modelContent = fs.readFileSync(modelFilePath, 'utf8');
  schemaTemplate += '\n' + modelContent; // Append each model's content
});


fs.writeFileSync(outputSchemaPath, schemaTemplate);

console.log('Schemas merged successfully!');
