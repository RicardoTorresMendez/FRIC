class Analyst:
    # Class Variable
    
    
    # Constructor
    def _init_(self, fName, lName, initial, title, role):
        self._fName = fName
        self._lName = lName
        self._intial = initial
        self._title = title
        self._role = role
    
    #Getters (Python might not need getters)
    def get_fName(self):
        return self._fName
    def get_lName(self):
        return self._lName
    def get_initial(self):
        return self._initial
    def get_title(self):
        return self._title
    def get_role(self):
        return self._role
    
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