x = 0
while x == 0:
    user_input = str(input('Введите текст: '))
    file = open('user_input.txt','a', encoding='utf-8')
    file.write(user_input)
    file = open('user_input.txt', encoding='utf-8')
    print(file.read())
    break_point = str(input("Хотите ли вы остановить программу? "))
    if break_point.lower() == "да" or break_point.lower() == "д" or break_point.lower() == "yes" or break_point.lower() == "y":
        file.close()
        break

