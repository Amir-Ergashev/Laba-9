class UserAccount:
    def __init__(self,username,email,pwd):
        self.username = username
        self.email = email
        self.__password = pwd
    def set_password(self,new_password):
        self.__passsword = new_password
    def check_password(self,check_password):
        return self.__password == check_password
    def get_email(self):
        return self.email
NewUser = UserAccount ("Артем","Artemabcd@gmail.com","")
print(NewUser.check_password(""))

NewUser.set_password('/')
print(NewUser.check_password('/'))