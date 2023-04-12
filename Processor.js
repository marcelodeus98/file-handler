class Processor{
    static Process(data){
        var line = data.split("\r\n");
        var rows = [];

        line.forEach(row => {
            var arr = row.split(",");
            rows.push(arr);
        });

        return rows;
    }
}

module.exports = Processor;