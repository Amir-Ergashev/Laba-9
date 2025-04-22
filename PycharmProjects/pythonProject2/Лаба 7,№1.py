class Employee:
    def __init__(self,name, id):
        self.name = name
        self.id = id
    def get_info(self):
        return f"Имя: {self.name},ID: {self.id}"
class Manager(Employee):
    def __init__(self,name,id,department):
        super().__init__(name,id)
        self.department = department
    def manage_project(self):
        return f"Управление проектом:{self.department}, реализация проекта:{self.manage_project}"
class Technician(Employee):
    def __init__(self,name,id,specialization):
        super().__init__(name,id)
        self.specialization = specialization
    def perform_maintenance(self):
        return f"Его {self.name} и его работа {self.specialization}.Его id{self.id}"
class TechManager(Manager, Technician):
        def __init__(self,name,id,specialization,department):
            self.manager = Employee(name,id)
            self.department = department
            self.specialization = specialization
            workers=[]
        def add_employee(self,employeers):
            self.workers.append(employeers)
        def get_team_info(self):
            info = [workers.get_info() for workers in self.workers]
            return info
        def __str__(self):
            return f"{self.manager.name}, его id: {self.manager.id} специализация:{self.specialization} отедал:{self.department}"
employee = Employee("Амир","123")
tech = Technician("Артем","222","Программист")
tech_manager = TechManager("Соня","333","Программист","Beckend")
print(employee.get_info())
print(tech.get_info())
print(tech_manager)