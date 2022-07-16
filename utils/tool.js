const fs = require('fs');
const path = require('path');


export const getJsonData = () => {
    const filePath = path.join(process.cwd(), "utils", "db.json")
    const db = fs.readFileSync(filePath)
    const data = JSON.parse(db)
    return data
}