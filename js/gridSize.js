import { height, width } from './moduleA';
import { makeGrid } from './makeGrid';

export const gridSize = () => {
    document.querySelector('#gridSize').addEventListener('click', (event) => {
        event.preventDefault();
        height = document.querySelector('#inputSizeHeight').value;
        width = document.querySelector('#inputSizeWidth').value;
        makeGrid(height, width);
    });
}