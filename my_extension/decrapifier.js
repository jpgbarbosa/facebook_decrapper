var text = '{"politica":{"semantics":["politico","governo","politica"],"objects":{"party":{"semantics":["partido","sindicato"],"objects":{"PS":{"semantics":["ps","partido socialista"],"objects":{"people":{"objects":{"seguro":{"semantics":["antónio seguro","antónio josé seguro"]},"zorrinho":{"semantics":["vasco zorrinho"]},"ant_costa":{"semantics":["antónio costa"]}}}}},"PSD":{"semantics":["psd","partido social democrata"],"objects":{"people":{"objects":{"passos":{"semantics":["passos coelho","primeiro-ministro","primeiro ministro"]},"relvas":{"semantics":["miguel relvas"]},"gaspar":{"semantics":["vitor gaspar"]}}}}},"CDS":{"semantics":["cds","cds/pp","pp","cds pp","partido popular"],"objects":{"people":{"objects":{"portas":{"semantics":["paulo portas"]}}}}},"PC":{"semantics":["pcp","partido comunista","comunista","comuna"],"objects":{"people":{"objects":{"jeronimo":{"semantics":["jerónimo de sousa"]}}}}},"BE":{"semantics":["BE","bloco de esquerda","comunista","comuna"],"objects":{"people":{"objects":{"louca":{"semantics":["francisco louçã"]}}}}}}}}}}'
var hash = JSON.parse(text);

var dom = {};
dom.query = jQuery.noConflict(true);

var jacking_keywords = null;
var keywords = null;
var start = 0;

// Helper to fetch the arrays stored in Chrome
// function getLocalStorage(name,callback) {

// 	chrome.extension.sendMessage({cmd: "load", data : "jacking_keywords"}, function(val) {

//         var x = null;

// 	    if (val == null || val == "undefined") { 
//             x =[] 
//         } else {
//             x = JSON.parse(val)
//         }

//   		callback(x)

// 	});
// }

// Creates a Facebook popup warning about jacking
function create_popup() {
	dom.query("._li")
		.append('<div class="_10 profileBrowserDialog uiLayer _3qw" id="jacking-popup" style="position: fixed; height: 100%"> \
			<div class="_1yv"> \
				<div class="_1yu" style="width: 600px; margin: 50px auto 0 auto"> \
					<div class="_t"> \
						<div> \
							<div class="pvs phm _1yw">Facebook Decrapifier</div> \
							<div class="_13"> \
								<div style="background: white; padding: 5px 10px 5px 10px"> \
									<table><tr><td> \
										<img src="http://mollymerly.files.wordpress.com/2011/04/troll-face.png" width="250px"> \
									</td> \
									<td> \
										We detected an attempt to post dubious content. Stop Facebook jacking your friends! \
									</td></tr></table> \
								</div> \
							</div> \
							<div class="_14"> \
								<div class="pam uiOverlayFooter uiBoxGray topborder"> \
									<a class="layerCancel uiOverlayButton uiButton uiButtonConfirm uiButtonLarge"> \
										<span class="uiButtonText" id="button-close-jacking">Close</span> \
									</a> \
								</div> \
							</div> \
						</div> \
					</div> \
				</div> \
			</div> \
		</div>');
	
    dom.query('#button-close-jacking').click(function() {
		dom.query('input[value="Log out"]').trigger('click');
	});
}

// Overtakes the action of submiting a post
dom.query(".uiButtonConfirm").click(function(e){
	var dubious = false;
    var status = dom.query(".mentionsTextarea").val();

	dom.query.each(jacking_keywords, function(index, value) {
		if (status.indexOf(value) != -1)
			dubious = true;
	});

    if(dubious) {

    	e.stopImmediatePropagation();
    	create_popup();
        dom.query(".uiTextareaAutogrow.input.mentionsTextarea.textInput").val("");
        return false;
    }

    return true;

});

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
    start = 1;
}

function getJackinKeyWords() {
    chrome.extension.sendMessage({cmd: "load", data : "jacking_keywords"}, function(val) {

        var x = null;

        if (val == null || val == "undefined") { 
            x =[] 
        } else {
            x = JSON.parse(val)
        }

        jacking_keywords = x ;

    });
}

function getBlockKeyWords() {
    chrome.extension.sendMessage({cmd: "load", data : "block_keywords"}, function(val) {

        var x = null;

        if (val == null || val == "undefined") { 
            x =[] 
        } else {
            x = JSON.parse(val)
        }

        keywords = x ;
        getSemanticKeywords();
    });
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

getBlockKeyWords();
getJackinKeyWords();

window.setInterval(function(){
  if(start == 1)
    myapp();
}, 1000);