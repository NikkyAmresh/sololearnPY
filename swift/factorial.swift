func fact(num:Int)->Int{
    var res=1
    for i in 1...num{
        res*=i
    }
    return res
}
print(fact(num:5))