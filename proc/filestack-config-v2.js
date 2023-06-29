

window.addEventListener('DOMContentLoaded', function () {

  // My key to the filestack (Roger)
  //const apikey = 'AwI8zeAXhScenP4YLcivGz';

  // EPS  2023 key 
  const apikey = 'AQ8QnxT5Q6SxHBOiljA17z'; 
  
  // Init the client 
  const client = filestack.init(apikey);

  yo = client;

  const onProgress = (evt) => {
    document.getElementById('progress').innerHTML = `${evt.totalPercent}%`;
  };

  document.querySelector('input').addEventListener('change', (event) => {
    
    const files = event.target.files[0];
    console.log(files)
    const token = {};
    const cancel = document.getElementById('cancel');
    const pause = document.getElementById('pause');
    const resume = document.getElementById('resume');

    [cancel, resume, pause].forEach((btn) => {
      const id = btn.id;
      btn.addEventListener('click', () => {
        token[id]();
      });


    });


  


//    client.upload(files, { onProgress }, {}, token)
 //     .then(res => {
   //     console.log('success: ', res)
     // })
     // .catch(err => {
      //  console.log(err)
     // });
      
  });
});


// FV : Open the file picker 
function clickTest () {
    console.log("click")

    const apikey = 'AwI8zeAXhScenP4YLcivGz';
    const client = filestack.init(apikey);

    const options = {
        maxFiles: 1,
        uploadInBackground: false,
        fromSources: ["local_file_system"],
        accept: ["application/pdf"],
      
        onOpen: () => console.log('opened!'),
        onUploadDone: (res) => {
            //console.log(res);
            //display = document.querySelector('.fileinfo');
            document.getElementById("fileinfo").value = res.filesUploaded[0].filename + " uploaded successfully !";
            console.log(res.filesUploaded[0].filename);
        },
      };

      client.picker(options).open();
  

    //const files = event.target.files[0];
    //const token = {};

    //client.upload(files, { onProgress }, {}, token)
     // .then(res => {
      //  console.log('success: ', res)
     // })
     // .catch(err => {
      //  console.log(err)
      //});

  }
