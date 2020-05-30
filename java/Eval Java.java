import javax.script.ScriptEngineManager;
import javax.script.ScriptEngine; 
import javax.script.ScriptException;
public class eval { 
    public static void main(String[] args) throws ScriptException { 
        ScriptEngineManager manager = new ScriptEngineManager(); 
        ScriptEngine engine = manager.getEngineByName("js"); 
        String str = "5-75";
        System.out.println(engine.eval(str)); 
        } 
}