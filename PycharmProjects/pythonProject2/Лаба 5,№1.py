class Book:
    def __init__(self,title, author,year):
        self.title = title
        self.author = author
        self.year = year
    def get_info(self):
        return f"Title is {self.title},author : {self.author}, year of publication:{self.year}"
    def get_tatle(self):
        return f"title is {self.title}"
book = Book("Залатая рыбка" , "Александр Сергеевич", 1833)
print(Book.get_info(book))
