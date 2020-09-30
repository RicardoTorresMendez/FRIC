class Event:
    # Class Variable
    _description = ''
    
    # Constructor
    def _init_(self, name, eType, version, date, orgonizationName, securityClassificationTitleGuide, classification, dclassificationDate, customerName, archiveStatus, team):
        self._name = name
        self._eType = eType
        self._version = version
        self._date = date
        self._orgonizationName = orgonizationName
        self._securityClassificationTitleGuide = securityClassificationTitleGuide
        self._classification = classification
        self._dclassificationDate = declassificationDate
        self._customerName = customerName
        self._archiveStatus = archiveStatus
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
    def get_orgonizationName(self):
        return self._orgonizationName
    def get_securityClassificationTitleGuide(self):
        return self.securityClassificationTitleGuide
    def get_classification(self):
        return self._classification
    def get_declassificationDate(self):
        return self._declassificationDate
    def get_customerName(self):
        return self._customerName
    def get_archiveStatus(self):
        return self._archiveStatus
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
    def set_orgonizationName(self, orgonizationName):
        self._orgonizationName = orgonizationName
    def set_securityClassificationTitleGuide(self, securityClassificationTitleGuide):
        self.securityClassificationTitleGuide = securityClassificationTitleGuide
    def set_classification(self, classification):
        self._classification = classification
    def set_declassificationDate(self, declassificationDate):
        self._declassificationDate = declassificationDate
    def set_customerName(self, customerName):
        self._customerName = customerName
    def set_archiveStatus(self, archiveStatus):
        self._archiveStatus = archiveStatus
    def set_team(self, team):
        self._team = team
    def set_description(self, description):
        self._description = description