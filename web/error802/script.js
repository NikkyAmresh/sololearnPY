$.ajax({
        url: "https://api-ipc.herokuapp.com/api/v1/section/366A",
        beforeSend: function(xhr) {
            xhr.setRequestHeader("Authorization", "6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        },
        success: function(data) {
        console.log(JSON.stringify(data))
}})