x = 0
while x == 0:
    try:
        place = str(input('Введите имя файла: '))
        file = open(place, encoding='utf-8')
        print(file.read())
        file.close()
        break
    except FileNotFoundError:
        print('Файл не был найден.Попробуйте ввести имя файла корректно.')