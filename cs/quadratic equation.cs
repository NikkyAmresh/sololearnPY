using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
//created by ルカ
 // luka
namespace Quadratic_equation_program
{
    class Program
    {
        static void Main(string[] args)
        {
            
                double a, b, c, x, D, X1, X2;

                Console.WriteLine("Hi i`m Quadratic equation program.");
                Console.WriteLine("let me help you. ");
                Console.WriteLine("Tell me value of: a");
                /* input a, b, c.
                Code playground example:
                
                "Seems like your program requires input"
                 _______________________________________
                |a                                      |
                |b                                      |
                |c                                      |
                |_______________________________________|
                
                */
                a = Convert.ToDouble(Console.ReadLine());
                while (a == 0)
                {
                    Console.WriteLine("Error! value of a is zero, please input different value of a: ");
                    a = Convert.ToDouble(Console.ReadLine());

                }
                Console.WriteLine("Tell me value of: b");
                b = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine("Tell me value of: c");
                c = Convert.ToDouble(Console.ReadLine());
                Console.WriteLine(a + "x^2 + " + b + "x + " + c + " = 0");
                D = (b * b) - (4 * a * c);
                if (D > 0)
                {
                    X1 = ((b * (-1)) - Math.Sqrt(D)) / (a * 2);
                    X2 = ((b * (-1)) + Math.Sqrt(D)) / (a * 2);
                    Console.WriteLine("D =" + " (" + b + " * " + b + ") - (4 * " + a + " * " + c + ")");
                    Console.WriteLine("X1 = " + " (" + -b + " -\u221A " + D + ")  / " + (a * 2));
                    Console.WriteLine("X2 = " + " (" + -b + " +\u221A " + D + ")  / " + (a * 2));

                    Console.WriteLine("X1 is: {0} ", X1);
                    Console.WriteLine("X2 is: {0} ", X2);              
                }
                if (D < 0)
                {
                    Console.WriteLine("Discriminant is negative, quadratic equation has no real solutions");
               
                }
                if (D == 0)
                {
                    x = (-b) / (a * 2);
                    Console.WriteLine("Discriminant is zero that means yours solution is: X1 = X2 = " + (-b) + "/" + "(" + a + "* 2)" + "= " + x);
                        
                }
            

        }
    }
}
