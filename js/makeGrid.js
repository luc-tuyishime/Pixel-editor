import { addColorToGrid } from './addColor';

export const makeGrid = (x, y) => {
    $('tr').remove();
    for (let i = 0; i <= x; i++) {
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for (let j = 1; j <= y; j++) {
            $('#table' + i).append('<td></td>');
        }
    }

    addColorToGrid();
}