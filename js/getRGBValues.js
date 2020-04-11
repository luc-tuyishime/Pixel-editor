import { colors } from './moduleA';

export const getRGBValues = (event) => {
    const select = event.target.value / event.target.max;
    const offset = (colors.length - 1) * select;
    const index = Math.min(Math.floor(offset), colors.length - 2);

    const NextcolorPick = colors[index + 1];
    const CurrentcolorPick = colors[index];
    const selectColor = offset - index;

    const mix = (from, to) => parseInt((to - from) * select + from);

    const r = mix(CurrentcolorPick[0], NextcolorPick[1], selectColor);
    const g = mix(CurrentcolorPick[1], NextcolorPick[1], selectColor);
    const b = mix(CurrentcolorPick[2], NextcolorPick[2], selectColor);
};

