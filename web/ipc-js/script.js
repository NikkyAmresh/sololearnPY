$.ajax({
        url:"https://cors-anywhere.herokuapp.com/https://api-ipc.herokuapp.com/api/v1/chapter",
        beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        }, success: function(data){
        console.log(JSON.stringify(data))
        }
        
})