/*Requested by Ranjit*/
//my first Java code
public class Splitrev{
    public static void main(String args[]){
     String str="ohh my god";
     String[] strs=str.split(" ");
     for(String s:strs){
 String r= new StringBuffer(s).reverse().toString();
     System.out.print(r+" ");
     }
}}
