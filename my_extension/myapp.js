var text = '{"politica":{"semantics":["politico, governo, politica"],"objects":{"party":{"semantics":["partido","sindicato"],"objects":{"PS":{"semantics":["PS","partido socialista"],"objects":{"people":{"objects":{"seguro":{"semantics":["antónio seguro","antónio josé seguro"]},"zorrinho":{"semantics":["vasco zorrinho"]},"ant_costa":{"semantics":["antónio costa"]}}}}},"PSD":{"semantics":["PSD","partido social democrata"],"objects":{"people":{"objects":{"pacos":{"semantics":["paços coelho"]},"relvas":{"semantics":["miguel relvas"]},"gaspar":{"semantics":["vitor gaspar"]}}}}},"CDS":{"semantics":["CDS","CDS/PP","PP","CDS PP","partido popular"],"objects":{"people":{"objects":{"portas":{"semantics":["paulo portas"]}}}}},"PC":{"semantics":["PC","partido comunista","comunista","comuna"],"objects":{"people":{"objects":{"jeronimo":{"semantics":["jeronimo de sousa"]}}}}},"BE":{"semantics":["BE","bloco de esquerda","comunista","comuna"],"objects":{"people":{"objects":{"louca":{"semantics":["francisco louça"]}}}}}}}}}}'
var hash = JSON.parse(text);

var dom = {};
dom.query = jQuery.noConflict(true);

dom.query(".uiButtonConfirm").mousedown(function(){
    if(dom.query(".mentionsTextarea").val().indexOf("pilinha") != -1)
        alert("Foste apanhado");
});

var keywords = ["comunista"]
var semantic_keywords = []
var classes  = [".userContent",".uiAttachmentTitle",".caption",".uiAttachmentDesc"]

function removeAcento(strToReplace) {
    str_acento= "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
    str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
    var nova="";
    for (var i = 0; i < strToReplace.length; i++) {
        if (str_acento.indexOf(strToReplace.charAt(i)) != -1) {
            nova+=str_sem_acento.substr(str_acento.search(strToReplace.substr(i,1)),1);
        } else {
            nova+=strToReplace.substr(i,1);
        }
    }
    return nova;
}

function getSemanticKeywords() {
    for(var i in keywords){
        recursive(hash["politica"], keywords[i], 0);        
    }
}

function recursive(node, keyword, all){
    var my_all = all;
    if(('semantics' in node) & (my_all != 1)){
        var sem = node["semantics"];
        for(var i in sem){
            if(sem[i] == keyword){
                my_all = 1;
                break;
            }
        }
    }
    if("objects" in node){
        for(var i in node["objects"]){
            recursive(node["objects"][i], keyword, my_all);
        }
    }
    if(my_all == 1){
        var sem = node["semantics"];
        for(var i in sem){
            if(keywords.indexOf(sem[i])!=0)
                semantic_keywords.push(sem[i]);
        }
    }
}

function myapp() {
    node = dom.query("#pagelet_welcome_box");
    node.hide();

    for(var i=0; i < classes.length; i++){
        var nodes = dom.query(classes[i]);
        deletePost(nodes);  
    }
};

function deletePost(nodes){
    var words = keywords.concat(semantic_keywords); 
    for(var i = 0; i < nodes.length; i++) {
        for(var j = 0; j < words.length; j++) {
            if(removeAcento(nodes[i].innerHTML).toUpperCase().indexOf(removeAcento(words[j]).toUpperCase()) != -1) {
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

$(document).ready(function() {
    $("div#extraControls").hide();
});

getSemanticKeywords();

window.setInterval(function(){
  myapp();
}, 1000);