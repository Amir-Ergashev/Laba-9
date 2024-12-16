import encodings
message = input('Введите сообщение')
with open('user_input.txt','w') as file:
    file.write(message)
print('Ваш файл записан')
with open('user_input.txt','a') as file:
    file.write(message)
print('Ваш файл сорхранен')