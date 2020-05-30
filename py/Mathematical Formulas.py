import math;
class square:
    def perimeter(side):
        return 4*side
    def area(side):
        return side*side
class rectangle:
    def perimeter(length,width):
        return 2*(length+width)
    def area(length,width):
        return length*width
class circle:
    def circumference(radius):
        return math.floor(math.pi*2*radius)
    def area(radius):
        return math.floor(math.pi*radius*radius)
class triangle:
    def area(hight,base):
        return 0.5*hight*base
    def perimeter(a,b,c):
        return a+b+c
    def area_h(a,b,c):
        s=0.5*(a+b+c)
        return math.sqrt(s*(s-a)*(s-b)*(s-c))           
print(square.area(5))
print(square.perimeter(5))
print(rectangle.area(5,4))
print(rectangle.perimeter(5,4))
print(circle.area(7))
print(circle.circumference(7))
print(triangle.area(4,3))
print(triangle.perimeter(3,4,5))
print(triangle.area_h(4,3,5))


