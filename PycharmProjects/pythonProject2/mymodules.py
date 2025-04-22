from idlelib.iomenu import encoding
def add(x,y):
    print(x + y)
def sbt (x ,y):
    return x - y
def mlt(x , y):
    return x * y
def division (x , y):
    return  x/y
def w_file (name, main):
    with open(name,'w' , encoding = 'utf - 8',) as file:
        file.write(main)
def r_file(name,main):
    with open(name, 'r', encoding = 'utf - 8')  as file:
        file.read(main)