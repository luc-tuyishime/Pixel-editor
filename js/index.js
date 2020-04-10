import { colors, slider, input } from './moduleA';
import { getRGBValues } from './getRGBValues';

slider.style.background = `linear-gradient(to top ${colors.reduce(
            (style, c) => `${style}, rgb(${c[0]},${c[1]},${c[2]})`,
            ''
)})`;

input.addEventListener('change', getRGBValues);
