window.onload = function(){
    var today = new Date();
    var displayitem ="";
    var weekDay = ["日", "月", "火", "水", "木", "金", "土"];
    
    for (let i=0; i<7; i++){
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