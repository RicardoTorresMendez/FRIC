class Finding:
    # Constructor
    def _init_(self, findingID, hostName, IPport, description, longDescription, status, fType, classification, findingAssociation,
     evidence, findingImpact, assignment, posture, mitigation, threatRelevance, countermeasureData, impactData, severityData, 
     systemLevelImpact, archiveStatus):
        self._findingID = findingID
        self._hostName = hostName
        self._IPport = IPport
        self._description = longDescription
        self._status = status
        self._fType = fType
        self._classsification = classification
        self._findingAssocation = findingAssociation
        self._evidence = evidence
        self._findingImpact = findingImpact
        self._assignment = assignment
        self._posture = posture
        self._mitigation = mitigation
        self._threatRelevance = threatRelevance
        self._counterMeasureData = countermeasureData
        self._impactData = impactData
        self._severityData = severityData
        self._systemLevelImpact = archiveStatus

        #finding’s ID, host name, IP port, description, long description, status, type, classification, association to finding, evidence,
        #  archive status, finding impact, analyst assignment, collaborator assignment, posture, mitigation data, threat relevance,
        #  countermeasure data, impact data, severity data, and system level impact

        #Getters (Python might not need getters)

   