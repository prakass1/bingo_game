import { generateBoard } from './methods.js';
$(document).ready(function () {
    //var bingo_game = 0;
    var bingo_arr = ["B", "I", "N", "G", "O"].sort();
    var bingo_clicked_arr = [];
    var board_data = generateBoard(5);
    $("#game-done").hide();
    $('#new-board').click(function () {
        $("#game-done").hide();
        $('#game-start').append(board_data);
        $('.new-board-text').hide();
        $(".game-board").on('click', 'tr', function (e) {
            let target = $(e.target);
            let td = target.closest('td');
            if (td.attr('class') === 'game-cell') {
                td.css('color', 'red').css('font-weight', 'bold');
                td.prop("disabled", true);
            }
            else if (td.attr('class') === 'game-header-cell') {
                td.css('opacity', '0.5');
            }
            if (bingo_arr.includes(td.text())) {
                bingo_clicked_arr.push(td.text());
            }
            let tempSelectedBingoArr = bingo_clicked_arr.sort();
            if (JSON.stringify(tempSelectedBingoArr) === JSON.stringify(bingo_arr)) {
                $('.new-board-text').show();
                $('#game-done').show();
                $('#game-start').empty();
                board_data = generateBoard(5);
                bingo_clicked_arr = [];
            }
            // if (bingo_game === 5){
            //     $('.new-board-text').show();
            //     $('#game-done').show();
            //     $('#game-start').empty();
            //     board_data = generateBoard(5);
            //     bingo_game = 0;
            // }
        });
    });
    // $(document).on('click', '.game-header-cell', function(){
    //     $('.game-header-cell').css('opacity', 0.2 )
    // });

});