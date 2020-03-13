var callNum = 0;

function checkWinner(form, caller, winningNum){
    ++ callNum;
    debugConsole.displayMsg("CallNumber: " + callNum);
    if (callNum == winningNum) {
        alert(caller + ", caller number "  + callNum + "...today's winner!");
        form.submit();
    }
    else {
        // Reset the caller field for the next caller
        var callerField = document.getElementById('caller');
        callerField.value = "";
        callerField.placeholder = "Next caller";
        callerField.focus();
        callerField.select();
    }
}
