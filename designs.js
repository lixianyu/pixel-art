let myColor = '';
// Select color input
function getColor(evt) {
    console.log("getColor");
    myColor = $(this).val();
    // console.log(typeof(myColor));
    console.log(myColor);
    // console.log(evt.data);
}

// When size is submitted by the user, call makeGrid()
function makeGrid(evt) {
// Your code goes here!
    // console.log(evt);
    evt.preventDefault();
    let row = parseInt($('#inputHeight').val());
    let col = parseInt($('#inputWeight').val());
    console.log(`row = ${row}, col = ${col}`);

    let table = $('#pixelCanvas');
    table.children().remove();

    for (let hang = 0; hang < row; hang++) {
        let hangVal = `<tr id="row${hang}"></tr>`;
        table.append(hangVal);
        console.log(hangVal);
        let curTr = $(`#row${hang}`);
        for (let lie = 0; lie < col; lie++) {
            curTr.append('<td></td>');
        }
    }
}

$('#sizePicker').submit(makeGrid);
$('#colorPicker').change(getColor);

$('#pixelCanvas').click(function(evt) {
    // console.log(evt.target.nodeName);
    if (evt.target.nodeName !== 'TD') {
        return;
    }
    let target = $( event.target );
    let bgColor = target.css('background-color');
    // console.log(`typeof(bgColor) == ${typeof(bgColor)}`);
    // console.log(typeof(bgColor));
    // console.log(`Current background color is: ${bgColor}`);
    // console.log(target);
    if (bgColor.indexOf('rgba') === 0) {
        target.css('background-color', myColor);
    }
    else {
        target.css('background-color', 'rgba(0,0,0,0)');
    }
});

function load_done() {
    myColor = $('#colorPicker').val();
    console.log(`DOM 加载完成!, default color = ${myColor}`);
}

$(load_done);
