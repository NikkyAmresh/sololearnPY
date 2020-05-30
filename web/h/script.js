// Created by Ulisses Cruz

alert('Version 2.0\n- fluid layout.');
$(function(){
    
    var source = {obj: $('#source-content'), line: $('#line'), index: 1};
    var output = {obj: $('#output'), index: 0, line: undefined};
    var popup = {obj: $('#popup p'), index: undefined, line: undefined};
    var cursor = source.obj.children().last();
    var target = undefined;
    var speed = 1; // ms
    var typed = true;
    var string = "";
    var data_index = 0;
    var data = "\x01In today's lesson\nwe are going to see\nhow to print"+
               " 'Hello, World!' in:\nPython, Ruby, C++, C# and Java.\x00\n"+
               "Let's begin.\x00\x04\x00# Let's start with Python:\n\n\x00"+
               "print('Hello, World!')\x00\n\n# That's it.\x00\x05\x00\x04\x00"+
               "# Now in Ruby\n\n\x00puts 'Hello, World!'\x00\n\n# That easy!" +
               "\x00\x05\x00\x04\x00// In C++\n\n\x00#include <iostream>\n\n"+
               "int main(){\n\tstd::cout << \"Hello, World!\";\n\treturn 0;\n}"+
               "\n\x00\x05\x00\x04\x00// C#\x00\n\nusing System;\nusing System."+
               "Collections.Generic;\nusing System.Linq;\nusing System.Text;\n"+
               "using System.Threading.Tasks;\n\nnamespace Sololearn {\nclass "+
               "Lesson1 {\nstatic void Main(string[] args) {\nConsole."+
               "WriteLine(\"Hello, World!\");\n}}}\n\x00\x05\x00\x04\x00// Java"+
               "\x00\n\nclass Lesson1 {\npublic static void main(String[] args) {"+
               "\nSystem.out.println(\"Hello, World!\");\n}}\n\x00\x05\x00\x04\x00"+
               "That was it for lesson 1\x00\nLet me know if you liked\n\x00:)\x00";
    
    function main(){
        if(string){
            type_it();
            return;
        }else{
            while(data_index < data.length){
                var ch = data[data_index++];
                switch(ch){
                    case "\x00": // pause
                        setTimeout(main, 2000);
                        return;
                    case "\x01": // set source as target
                        target = source;
                        typed = true;
                        break;
                    case "\x02": // set output as target
                        target = output;
                        typed = false;
                        break;
                    case "\x03": // set popup as target
                        target = popup;
                        typed = false;
                        break;
                    case "\x04": // reset screen
                        $('body').fadeOut();
                        source.obj.empty().append(cursor);
                        source.line.text("1");
                        source.index = 1;
                        $("#out").removeClass("slideUp");
                        $('body').fadeIn();
                        break;
                    case "\x05": // slide output up
                        $('#out').addClass("slideUp");
                        break;
                    case "\x06": // slide output down
                        $('#out').removeClass("slideUp");
                        break;
                    default:
                        string = ch;
                        setTimeout(main);
                        return;
                }
            }
            $("#end").fadeIn();
            document.querySelector("#fin").unpauseAnimations();
        }
    }
    
    function type_it(){
        if(typed){
            $('#main').get(0).scrollTop = $('#main').get(0).scrollHeight;
            if(string === '\n'){
                temp = target.line.text() + "\n" + ++target.index;
                target.line.text(temp);
            }
            target.obj.children().last().before(string);
            
        }
        string = undefined;
        setTimeout(main, speed);
    }
    
    function intro(){
        var delay = 5000 // ms
        $('#intro').delay(delay).fadeOut();
        setTimeout(main, delay + 2000);
    }
    
    function updateSize(){
       $('#container').css({
          width: window.innerWidth,
          height: window.innerHeight, 
       }); 
    }
    
    $("#end").hide();
    var mql = window.matchMedia('(orientation: portrait)');
    mql.addListener(updateSize, false);
    window.addEventListener('resize', updateSize, false);
    $('#container').css('height', window.innerHeight);
    
    intro();
});