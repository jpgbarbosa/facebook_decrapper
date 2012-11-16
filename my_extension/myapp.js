var dom = {};
dom.query = jQuery.noConflict(true);

dom.query(".uiButtonConfirm").mousedown(function(){
    if(dom.query(".mentionsTextarea").val().indexOf("pilinha") != -1)
        alert("Foste apanhado");
});

var keywords = ["Sabes","illness","Download", "Camionagem", "alivia", "Next", "photo", "sick", "1-0"]
var classes  = [".userContent",".uiAttachmentTitle",".caption",".uiAttachmentDesc"]

function myapp() {

    node = dom.query("#pagelet_welcome_box");
    node.hide();

    for(var i=0; i < classes.length; i++){
        var nodes = dom.query(classes[i]);
        deletePost(nodes);  
    }
};

function deletePost(nodes){
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
}

window.setInterval(function(){
  myapp();
}, 1000);