window.onload = function(){
    // var today = new Date();
    // var displayitem ="";
    // var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
    // var day_num = 7;
    
    // for (let i=0; i<day_num; i++){
    //     var dis_ = (today.getMonth()+1) +'/'+ (today.getDate());
    //     displayitem += dis_; 
    //     displayitem += '(';
    //     displayitem += weekDay[today.getDay()];
    //     displayitem += ')：';
    //     displayitem += '\n';
    //     today.setDate(today.getDate() + 1); // 次の日付をセット
    // }
    // document.getElementById('text-area').innerHTML = displayitem;
    display(day_num=7);
}

function display(day_num){
    var today = new Date();
    var displayitem ="";
    var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
    //var day_num = 7;
    
    for (let i=0; i<day_num; i++){
        var dis_ = (today.getMonth()+1) +'/'+ (today.getDate());
        displayitem += dis_; 
        displayitem += '(';
        displayitem += weekDay[today.getDay()];
        displayitem += ')：';
        displayitem += '\n';
        today.setDate(today.getDate() + 1); // 次の日付をセット
    }
    document.getElementById('text-area').innerHTML = displayitem;
  }

document.addEventListener('DOMContentLoaded', function() {
    function copyClipboard(event) {
        const clipboard = document.createElement('textarea');
        clipboard.value = event.target.previousElementSibling.value;
        event.target.appendChild(clipboard);
        clipboard.select();
        document.execCommand('copy');
        event.target.removeChild(clipboard);
    }

    const buttons = document.getElementsByClassName('copy_clipboard');
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', copyClipboard);
    }
});


function change_day_n(){
    let day_n = document.getElementById('day_num').value;
    display(day_num=day_n);
}
