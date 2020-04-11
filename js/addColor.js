
export const addColorToGrid = () => {
    $('td').click(function addColor() {
        const color = $('#colorRandonPicker').val();
        return $(this).attr('style') ?
            $(this).removeAttr('style') :
            $(this).attr('style', 'background-color:' + color)
    })
}