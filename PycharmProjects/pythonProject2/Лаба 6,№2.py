class Vehicle:
    def __init__(self,make,model):
        self.make = make
        self.modul = model
    def get_info(self):
        return f"Марка:{self.make}, модель:{self.modul}"
class Car(Vehicle):
    def __init__(self, make, model, fuel_type):
        super().__init__(make,model)
        self.fuel_type = fuel_type
    def get_info(self):
        base_info = super().get_info()
        return f"{base_info}, Тип топлива:{self.fuel_type}"

        vehicle = Vehicle("Toyota","Supra")
        print((vehicle.get_info()))

car = Car("BMW","m5","Бензин")
car_electric = Car("Tesla","Model 3","Электричество")
print(car_electric.get_info())
print(car.get_info())
