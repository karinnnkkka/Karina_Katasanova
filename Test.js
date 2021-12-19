var XMLHttpRequest = require('xhr2');

class test{
 Upload(){
    var data = "Test_text";

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
    console.log(this.responseText);
  }
});

xhr.open("POST", "https://content.dropboxapi.com/2/files/upload");
xhr.setRequestHeader("Dropbox-API-Arg", "{\"path\": \"/New.txt\",\"mode\": \"add\",\"autorename\": true,\"mute\": false,\"strict_conflict\": false}");
xhr.setRequestHeader("Content-Type", "application/octet-stream");
xhr.setRequestHeader("Authorization", "Bearer TwOilKXyH1AAAAAAAAAAAdgH9SLFPIZ8TaqN1Zjvq6ORhTEUaysauL7dgRsLBVq5");

xhr.send(data);
}


GetMetaData(){
    var data = JSON.stringify({
        "file": "/New.txt",
        "actions": []
      });
      
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
      
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
    xhr.open("POST", "https://content.dropboxapi.com/2/sharing/get_file_metadata");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer TwOilKXyH1AAAAAAAAAAAdgH9SLFPIZ8TaqN1Zjvq6ORhTEUaysauL7dgRsLBVq5");
      
    xhr.send(data);
}

 Delete(){
    var data = JSON.stringify({
        "path": "/New.txt"
      });
      
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
      
    xhr.addEventListener("readystatechange", function() {
        if(this.readyState === 4) {
          console.log(this.responseText);
        }
      });
      
    xhr.open("POST", "https://api.dropboxapi.com/2/files/delete_v2");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Authorization", "Bearer TwOilKXyH1AAAAAAAAAAAdgH9SLFPIZ8TaqN1Zjvq6ORhTEUaysauL7dgRsLBVq5");
      
    xhr.send(data);
}
}
testFile = new test();

testFile.Upload();
testFile.GetMetaData();
testFile.Delete();
  


