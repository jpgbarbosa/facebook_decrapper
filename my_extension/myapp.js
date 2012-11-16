var text = '{"politica":{"semantics":["politico, governo, estado, politica"],"party":{"semantics":["partido","sindicato"],"objects":{"PS":{"semantics":["PS","partido socialista"],"people":{"objects":{"seguro":{"semantics":["antónio seguro","antónio josé seguro"]},"zorrinho":{"semantics":["vasco zorrinho"]},"ant_costa":{"semantics":["antónio costa"]}}}},"PSD":{"semantics":["PSD","partido social democrata"],"people":{"objects":{"pacos":{"semantics":["paços coelho"]},"relvas":{"semantics":["miguel relvas"]},"gaspar":{"semantics":["vitor gaspar"]}}}},"CDS":{"semantics":["CDS","CDS/PP","PP","CDS PP","partido popular"],"people":{"objects":{"portas":{"semantics":["paulo portas"]}}}},"PC":{"semantics":["PC","partido comunista","comunista","comuna"],"people":{"objects":{"jeronimo":{"semantics":["jeronimo de sousa"]}}}},"BE":{"semantics":["BE","bloco de esquerda","comunista","comuna"],"people":{"objects":{"louca":{"semantics":["francisco louça"]}}}}}}}}'
var hash = JSON.parse(text);

var dom = {};
dom.query = jQuery.noConflict(true);

dom.query(".uiButtonConfirm").mousedown(function(){
    if(dom.query(".mentionsTextarea").val().indexOf("pilinha") != -1)
        alert("Foste apanhado");
});

var keywords = ["comunista","paços coelho"]
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