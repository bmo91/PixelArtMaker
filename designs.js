// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$(function () {

    //Define variables

    const colorPicker = $('#color-picker');
    let tableCanvas = $('#pixel-canvas');
    const createButton = $('#create-grid');
    const clearButton = $('#clear-grid');
    let gridHeight = $('#input-height');
    let gridWidth = $('#input-width');

    let color = '#000';            // Default color of the grid.

    // Select color input and save the color picked

    colorPicker.change(function() {
        color = colorPicker.val();
        colorPicker.attr('value', color);
    });

    // Select size input after pressing createButton

    createButton.click(function(evt) {
        let N = gridHeight.val();
        gridHeight.attr('value',N);
        let M = gridWidth.val();
        gridWidth.attr('value',M);
        for(let i=1; i<=N; i++) {
            $('#pixel-canvas tr').remove();
        }

        // Depending on the inputs, show a message alert when these are not acceptable

        if((N != parseInt(N, 10)) || (M != parseInt(M, 10))) {
            alert('Some of your inputs are not integers! Please try again.');
        } else if((parseInt(N) <= 1) || (parseInt(M) <= 1) || (parseInt(N) > 100) || (parseInt(M) > 100)) {
            alert('Some of your inputs are incorrect! Please try again.');
        } else {
            makeGrid(N,M);
        }
        evt.preventDefault();
    });

    //Declaration of makeGrid() function

    function makeGrid(N,M) {
        for(let i=1; i<=N; i++) {
            tableCanvas.append('<tr></tr>');
            for(let j=1; j<=M; j++) {
                $('table tr:last-child').append('<td></td>');
            }
        }
    }

    // Draw the pixel art, by clicking on the desire square.

    tableCanvas.click(function(evt) {
        $(evt.target).toggleClass('color-changed');       // When a cell is clicked, the "color-changed" class, associated to the color picked, is added.
        let colorBg = $(evt.target).hasClass('color-changed') ? color : 'white';
        $(evt.target).css('background-color', colorBg);
    });

    // Clear grid pressing button

    clearButton.click(function(evt) {
        evt.preventDefault();
        $('td').css('background-color','white');
    });

});
