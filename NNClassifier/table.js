let table;
let fields = []


function preload() {
    table = loadTable( "Titanic-Dataset.csv", "header", "csv")
}


function setup() {


 noCanvas();

 let rows = table.getRows()
 for (let i = 0; i< rows.length; i++) {
        let output = rows[i].getNum("prediction")
        if ( output == 0){
            table.setString(i, "prediction", "No")
        } else {
            table.setString(i, "prediction", "Yes")
        }
 }

 //saveTable(table, "Titanic-Dataset_CY.csv") 
}
