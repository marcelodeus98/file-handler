const fs = require('fs');
const util = require('util');

class Reader{

    constructor(){
        this.reader = util.promisify(fs.readFile);
    }

    async Read(filepath){
        try{
           return await this.reader(filepath, "utf-8")
        }
        catch(error){
            return "There was error in reading file";
        }
    }
}

module.exports = Reader;