$(document).ready(function() {
  initCameraForm();
});

function initCameraForm(){
  $("div.container img#camera_icon").click(function(){
    toggleCamNotifications();
    takeScreenshot();
  });
}

function toggleCamNotifications(){
  $("div.container img#camera_icon").toggle();
  $("div.container img#loading_icon").toggle();
  $("div.container.wait_text").toggle();
}

function takeScreenshot(){
  chrome.tabs.captureVisibleTab(null, function(img) {
    img.replace('image/png', 'image/octet-stream');
  });
}



