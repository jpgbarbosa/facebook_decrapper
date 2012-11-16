var dom = {};
dom.query = jQuery.noConflict(true);

dom.query(".uiButtonConfirm").mousedown(function(){
    if(dom.query(".mentionsTextarea").val().indexOf("pilinha") != -1)
        alert("Foste apanhado");
});

function myapp() {

    var keywords = ["illness","finalmente","nessa", "Camionagem", "alivia", "Next", "photo", "sick", "1-0"]
    node = dom.query("#pagelet_welcome_box");
    node.hide();

    var nodes = dom.query(".userContent");

    for(var i = 0; i < nodes.length; i++) {
        for(var j = 0; j < keywords.length; j++) {
            if(nodes[i].innerHTML.indexOf(keywords[j]) != -1) {
                nodes[i].style.display = 'none';
                var temp = nodes[i].parentNode;
                while(temp.className.indexOf("uiListItem") == -1){
                    temp.style.display = 'none';
                    temp = temp.parentNode;
                }
            }
        }
    }
    var nodes = dom.query(".uiAttachmentTitle");

    for(var i = 0; i < nodes.length; i++) {
        for(var j = 0; j < keywords.length; j++) {
            if(nodes[i].innerHTML.indexOf(keywords[j]) != -1) {
                nodes[i].style.display = 'none';
                var temp = nodes[i].parentNode;
                while(temp.className.indexOf("uiUnifiedStory uiStreamStory genericStreamStory") == -1){
                    temp.style.display = 'none';
                    temp = temp.parentNode;
                }
            }
        }
    }

    var nodes = dom.query(".caption");

    for(var i = 0; i < nodes.length; i++) {
        for(var j = 0; j < keywords.length; j++) {
            if(nodes[i].innerHTML.indexOf(keywords[j]) != -1) {
                nodes[i].style.display = 'none';
                var temp = nodes[i].parentNode;
                while(temp.className.indexOf("uiUnifiedStory uiStreamStory genericStreamStory") == -1){
                    temp.style.display = 'none';
                    temp = temp.parentNode;
                }
            }
        }
    }

    var nodes = dom.query(".uiAttachmentDesc");

    for(var i = 0; i < nodes.length; i++) {
        for(var j = 0; j < keywords.length; j++) {
            if(nodes[i].innerHTML.indexOf(keywords[j]) != -1) {
                nodes[i].style.display = 'none';
                var temp = nodes[i].parentNode;
                while(temp.className.indexOf("uiUnifiedStory uiStreamStory genericStreamStory") == -1){
                    temp.style.display = 'none';
                    temp = temp.parentNode;
                }
            }
        }
    }
    

};

window.setInterval(function(){
  myapp();
}, 1000);