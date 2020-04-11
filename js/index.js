import { colors, slider, input, height, width } from './moduleA';
import { getRGBValues } from './getRGBValues';
import { gridSize } from './gridSize';

slider.style.background = `linear-gradient(to top ${colors.reduce(
    (style, c) => `${style}, rgb(${c[0]},${c[1]},${c[2]})`,
    ''
)})`;

input.addEventListener('change', getRGBValues);

gridSize();





