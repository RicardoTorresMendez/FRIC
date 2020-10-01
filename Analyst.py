class Analyst:
    # Class Variable
    
    
    # Constructor
    def __init__(self, fName, lName, initial, title, role):
        self.fName = fName
        self.lName = lName
        self.initial = initial
        self.title = title
        self.role = role
    
    #Getters (Python might not need getters)
    def get_fName(self):
        return self.fName
    def get_lName(self):
        return self.lName
    def get_initial(self):
        return self.initial
    def get_title(self):
        return self.title
    def get_role(self):
        return self.role
    
    #Setters (Python might not need setters)
    def set_fName(self, fName):
        self._fName = fName
    def set_lName(self, lName):
        self._lName = lName
    def set_initial(self, initial):
        self._initial = initial
    def set_title(self, title):
        self._title = title
    def set_role(self, role):
        self._role = role

if __name__ == "__main__":
    print('hi')