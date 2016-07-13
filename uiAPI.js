/*
* This is the API for doing basic UI functions/having stuff display as you'd like
*
*/

function newTab(tabHeader, tabContent, tabID)
{

    var $tabs = $('#tabs');
    $tabs.append("<li id='tab"+tabID+"' class='tab col s3'><a href='#tabContent"+tabID+"'>"+tabHeader+"<i id='"+tabID+"' onclick='deleteTab(this.id);' class='material-icons'>highlight_off</i></a></li>");
    $("#tabsCollectionDiv").append("<div id='tab"+tabID+"' class='col s12'>"+tabContent+"</div>");
    // initalize tabs again, then select new tab
    tabID = "tab"+tabID;
    $tabs.tabs().tabs('select_tab', tabID);
}

function forwardFunction() {
    var tabID =  Math.floor(Math.random() * (3000 - 2 + 1)) + 2;
    newTab("Forward", "<div id='tabContent"+tabID+"'> <form class='col s12'> <div class='input-field col s12'> <input id='email"+tabID+"' type='email' class='validate'> <label for='email"+tabID+"'>Email</label> </div><button style='width: 100%' class='btn waves-effect waves-light' type='submit' name='action'>Forward <i class='material-icons right'>send </i> </button> </form> </div>", tabID);
}

function replyFunction() {
    var tabID =  Math.floor(Math.random() * (1000 - 2 + 1)) + 2;
    newTab("reply", "<div id='tabContent"+tabID+"'> <form class='col s12'> <div class='input-field col s12'> <input id='email"+tabID+"' type='email' class='validate'> <label for='email"+tabID+"'>Email</label> </div> <div class='row'> <div class='input-field col s12'> <textarea id='textarea"+tabID+"' class='materialize-textarea'> </textarea> <label for='textarea"+tabID+"'>Write your email here</label> </div> </div> <button style='width: 100%' class='btn waves-effect waves-light' type='submit' name='action'>Reply <i class='material-icons right'>send </i> </button> </form> </div>", tabID);
}

function deleteTab(tabID) {
    var $tabs = $('#tabs');
    $("#tab"+tabID).remove();
    $("#tabContent"+tabID).remove();
    $tabs.tabs().tabs('select_tab', "inboxTab");
}
