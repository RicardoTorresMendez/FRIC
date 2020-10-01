class Event:
    # Class Variable
    _description = ''
    
    # Constructor
    def _init_(self, name, eType, version, date, orgName, secClsf, clsf, dClsfDate, cName, stat, team):
        self._name = name
        self._eType = eType
        self._version = version
        self._date = date
        self._orgName = orgName
        self._secClsf = secClsf
        self._clsf = clsf
        self._dClsfDate = dClasfDate
        self._cName = cName
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
    def get_secClsf(self):
        return self.secClsf
    def get_clsf(self):
        return self._clsf
    def get_dClasfDate(self):
        return self._dClasfDate
    def get_cName(self):
        return self._cName
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
    def set_secClsf(self, secClsf):
        self.secClsf = secClsf
    def set_clsf(self, clsf):
        self._clsf = clsf
    def set_dClasfDate(self, dClasfDate):
        self._dClasfDate = dClasfDate
    def set_cName(self, cName):
        self._cName = cName
    def set_stat(self, stat):
        self._stat = stat
    def set_team(self, team):
        self._team = team
    def set_description(self, description):
        self._description = description