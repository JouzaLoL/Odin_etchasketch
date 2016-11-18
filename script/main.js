/**
 * Create an a*a grid and append it to the element
 * 
 * @param {number} a the size of the grid
 * @param {string} element the jQuery expression used to search for the element
 * @returns
 */
function createGrid(a, element) {
    if (a === null) { // if a isn't specified, default to 30
        a = 64;
    }

    var tableElem, rowElem, colElem;

    tableElem = document.createElement('table');

    // Rows cycle
    for (var r = 0; r < a; r++) {
        rowElem = document.createElement('tr'); // Create the row

        // Columns cycle
        for (var c = 0; c < a; c++) {
            colElem = document.createElement('td'); // Create the column
            rowElem.appendChild(colElem); // Append the column to the row
        }

        tableElem.appendChild(rowElem); // Append the row to the table
    }

    //Append the finished table
    if (element === null) { //If no element is specified, try to append to #container
        if ($('#canvas') !== null) {
            $('#canvas').append(tableElem);
        } else { //Throw an error
            console.log("Cannot append table, bad/unspecified element (use jQuery syntax)");
        }
    } else { //If element is specified, search for it via jQuery
        if ($('html').find(element) !== null) {
            $('html').find(element).append(tableElem);
        }
    }

    // Compute the dimensions of pixels
    var pixelW = pixelH = 600 / a;

    //Set the dimensions of pixels
    $('td').width(pixelW).height(pixelH);

    //Make the user be able to paint the pixels
    $('td').hover(function () {
        $(this).addClass('painted');
    });
}

/**
 * Generate a new grid
 */
function updateGrid() {
    var n = prompt('Please enter the size of the grid:', 64);
    $('table').remove();
    createGrid(n, '#container');
}

/**
 * Clear the painted pixels
 */
function clearGrid() {
    $('td').removeClass('painted');
}

$(document).ready(function () {
    createGrid(64, '#container');
});