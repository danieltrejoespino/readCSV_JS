$(document).ready( function () {
    $('#example').DataTable()
   
} )

$.ajax({
  url: '../db/extensiones.csv',
  dataType: 'text',
}).done(leerDatos)

function leerDatos(data) {
  var allRows = data.split(/\r?\n|\r/)
  var table = '<table id="example" class="table table-striped" style="width:100%">'
  for (var singleRow = 0; singleRow < allRows.length ;singleRow++) {
    if (singleRow === 0) {
      table += '<thead>'
      table += '<tr class="table-primary">'
    } else {
      table += '<tr>'
    }
    var rowCells = allRows[singleRow].split(',')
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>'
        table += rowCells[rowCell]
        table += '</th>'
      } else {
        table += '<td>'
        table += rowCells[rowCell]
        table += '</td>'
      }
    }
    if (singleRow === 0) {
      table += '</tr>'
      table += '</thead>'
      table += '<tbody>'
    } else {
      table += '</tr>'
    }
  } 
  table += '</tbody>'
  table += '</table>'
  $('body').append(table)
}