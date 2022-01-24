let table;
let fields = []


function preload() {
    table = loadTable( "Titanic-Dataset_CY.csv", "header", "csv")
}


function setup() {


 noCanvas();

 let rows = table.getRows()
 for (let i = 0; i< rows.length; i++) {
        let output = rows[i].getString("gender")
        if ( output == "male"){
            table.setNum(i, "gender", "1")
        } else {
            table.setNum(i, "gender", "0")
        }
 }

 //saveTable(table, "Titanic-Dataset_CY2.csv") 
}