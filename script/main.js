function createTable(a, element) {

    if (a === null) {
        a = 30;
    }

    var tableElem, rowElem, colElem;

    //Compute the dimensions of pixels
    var pixelW = pixelH = 600 / a;

    if (a === "") { //Don't create a table with 0 rows
        return;
    } else {
        tableElem = document.createElement('table');

        for (var i = 0; i < a; i++) {
            rowElem = document.createElement('tr'); //Create the row

            for (var j = 0; j < a; j++) {
                colElem = document.createElement('td');
                rowElem.appendChild(colElem);
            }

            tableElem.appendChild(rowElem);
        }
        if (element === null) {
            $('#container').append(tableElem);
        } else {
            $("html").find(element).append(tableElem);
        }

    }

    $('td').width(pixelW).height(pixelH); //Set the pixel dimensions
    $('td').hover(function () {
        $(this).addClass("painted");
    });
}

function updateGrid() {
    var n = prompt("Please enter the size of the grid:", 64);
    $('table').remove();
    createTable(n, "#container");

}

function clearGrid() {
    $('td').removeClass('painted');
}

$(document).ready(function () {
    createTable(20, "#container");
});