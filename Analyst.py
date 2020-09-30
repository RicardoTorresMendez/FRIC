class Analyst:
    # Class Variable
    
    
    # Constructor
    def _init_(self, firstName, lastName, initial, title, role):
        self._firstName = firstName
        self._lastName = lastName
        self._intial = initial
        self._title = title
        self._role = role
    
    #Getters (Python might not need getters)
    def get_firstName(self):
        return self._firstName
    def get_lastName(self):
        return self._lastName
    def get_initial(self):
        return self._initial
    def get_title(self):
        return self._title
    def get_role(self):
        return self._role
    
    #Setters (Python might not need setters)
    def set_firstName(self, firstName):
        self._firstName = firstName
    def set_lastName(self, lastName):
        self._lastName = lastName
    def set_initial(self, initial):
        self._initial = initial
    def set_title(self, title):
        self._title = title
    def set_role(self, role):
        self._role = role