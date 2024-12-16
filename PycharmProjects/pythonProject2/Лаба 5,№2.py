import math
class Circle:
    def __init__(self, radius,):
        self.radius = radius
    def get_radius(self):
        if self.radius > 0:
            return self.radius
        else:
            print("Радиус должен быть положительным")
    def get_square(self):
        return math.pi(self.radius**2)
    def set_radius(self, new_radius):
        if new_radius > 0:
            self.radius = new_radius
        else:
            print("Радиус должен быть положительным")
circle = Circle(6)
print("Нынешний радиус:",circle.get_radius())
circle.set_radius(-45)
print("Новый радиус:",circle.get_radius())