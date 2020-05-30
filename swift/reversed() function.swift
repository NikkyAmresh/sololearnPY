func rev(str:String)->String{
    var ar=Array(str)
    var i=ar.count-1
    var st=[""]
    while i>=0{
        st.append(String(ar[i]))
        i-=1
    }
    return st.joined(separator:"")
}
var test=rev(str : "Hello World")
print(test)