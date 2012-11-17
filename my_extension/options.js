var dom = {};
dom.query = jQuery.noConflict(true);

// Helper to fetch the arrays stored in Chrome
function getLocalStorage(name) {
  var data = localStorage[name];
  
  if (!data) { data = JSON.stringify([]); }

  return data;
}

// Helper to store the arrays in Chrome
function setLocalStorage(name, array) {
  localStorage[name] = JSON.stringify(array);
} 

// Helper to switch tabs
function select_page(id) {
  pages = ['block-list', 'jacking', 'about'];
  dom.query.each(pages, function(index, page) {
    dom.query('#'+page).hide();
    dom.query('#'+page+'-tab').parent().attr('class', '');
  });
  dom.query('#'+id).show();
  dom.query('#'+id+'-tab').parent().attr('class', 'active');
}

// Helper to remove items from an array
 var removeFromArray = function(value, arr) {
    return dom.query.grep(arr, function(elem, index) {
        return elem !== value;
    });
};

// Comunicator with other pages
chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {

    if(request.cmd == "load") {
        sendResponse(getLocalStorage(request.data));
        ;
    }
});

// On document ready:
dom.query(document).ready(function() {

  // Assign tab actions
  dom.query('#block-list-tab').live("click", function() {
    select_page('block-list');
  });
  dom.query('#jacking-tab').live("click", function() {
    select_page('jacking');
  });
  dom.query('#about-tab').live("click", function() {
    select_page('about');
  });

  // Assign button actions
  dom.query('#add-block').live("click", function() {
    save_block_keyword();
  });
  dom.query('#add-jacking').live("click", function() {
    save_jacking_keyword();
  });

  // Load settings
  restore_block_keywords();
  restore_jacking_keywords();
});

// Helper to remove keyword from the page and from storage
function remove_keyword(type, value, id) {
  var data = getLocalStorage(type+"_keywords");
  data = removeFromArray(value, data);
  setLocalStorage(type+"_keywords", data);
  dom.query('#'+type+'-remove-'+id).parent().parent().remove();
}

// Helper to display keyword on the page
function show_keyword(type, value, id) {
  dom.query('#'+type+'-table').append(dom.query('<tr><td class="text">'+value+'</td><td style="text-align: right"><div style="cursor: pointer" class="icon-remove" id="'+type+'-remove-'+id+'"></div></td></tr>'));
  dom.query('#'+type+'-remove-'+id).live("click", function() {
    remove_keyword(type, value, id);
  });
}

// Save list of keywords to block
function save_block_keyword() {
  var block_keyword = dom.query('#block-keyword').val();
  var data = getLocalStorage("block_keywords");
  data.push(block_keyword);
  var index = dom.query.inArray(block_keyword, data);
  setLocalStorage("block_keywords", data);
  show_keyword('block', block_keyword, index);
  dom.query('#block-keyword').val("");
}

// Save list of keywords for jacking
function save_jacking_keyword() {
  var jacking_keyword = dom.query('#jacking-keyword').val();
  var data = getLocalStorage("jacking_keywords");
  data.push(jacking_keyword);
  console.log(data);
  var index = dom.query.inArray(jacking_keyword, data);
  setLocalStorage("jacking_keywords", data);
  show_keyword('jacking', jacking_keyword, index);
  dom.query('#jacking-keyword').val("");
}

// Load list of keywords to block
function restore_block_keywords() {
  var data = getLocalStorage("block_keywords");

  dom.query.each(data, function(index, value) {
    show_keyword('block', value, index);
  });
}

// Load list of keywords for jacking
function restore_jacking_keywords() {
  var data = getLocalStorage("jacking_keywords");

  dom.query.each(data, function(index, value) {
    show_keyword('jacking', value, index);
  });
}