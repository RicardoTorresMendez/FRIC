class Event:
    # Class Variable
    _description = ''
    
    # Constructor
    def _init_(self, name, eType, version, date, orgName, securityClassification, classification, declassificationDate, 
    customer, stat, team):
        self._name = name
        self._eType = eType
        self._version = version
        self._date = date
        self._orgName = orgName
        self._securityClassification = securityClassification
        self._classification = classification
        self._declassificationDate = declassificationDate
        self._customer = customer
        self._stat = stat
        self._team = team
    
    #Getters (Python might not need getters)
    def get_name(self):
        return self.name
    def get_eType(self):
        return self._eType
    def get_version(self):
        return self._version
    def get_date(self):
        return self._date
    def get_orgName(self):
        return self._orgName
    def get_securityClassification(self):
        return self.securityClassification
    def get_classification(self):
        return self._classification
    def get_declasfDate(self):
        return self._declasfDate
    def get_customer(self):
        return self._customer
    def get_stat(self):
        return self._stat
    def get_team(self):
        return self._team
    def get_description(self):
        return self._description
    
    #Setters (Python might not need setters)
    def set_name(self, name):
        self.name = name
    def set_eType(self, eType):
        self._eType = eType
    def set_version(self, version):
        self._version = version
    def set_date(self, date):
        self._date = date
    def set_orgName(self, orgName):
        self._orgName = orgName
    def set_securityClassification(self, securityClassification):
        self.securityClassification = securityClassification
    def set_classification(self, classification):
        self._classification = classification
    def set_declassificationDate(self, declassificationDate):
        self._declassificationDate = declassificationDate
    def set_customer(self, customer):
        self._customer = customer
    def set_stat(self, stat):
        self._stat = stat
    def set_team(self, team):
        self._team = team
    def set_description(self, description):
        self._description = description