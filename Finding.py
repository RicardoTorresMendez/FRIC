class Finding:
    # Constructor
    def __init__(self, findingID, hostName, IPport, description, longDescription, status, fType, classification, findingAssociation,
     evidence, findingImpact, assignment, posture, mitigation, threatRelevance, countermeasureData, impactData, severityData, 
     systemLevelImpact, archiveStatus):
        self.findingID = findingID
        self.hostName = hostName
        self.IPport = IPport
        self.description = longDescription
        self.status = status
        self.fType = fType
        self.classsification = classification
        self.findingAssocation = findingAssociation
        self.evidence = evidence
        self.findingImpact = findingImpact
        self.assignment = assignment
        self.posture = posture
        self.mitigation = mitigation
        self.threatRelevance = threatRelevance
        self.counterMeasureData = countermeasureData
        self.impactData = impactData
        self.severityData = severityData
        self.systemLevelImpact = archiveStatus

        #finding’s ID, host name, IP port, description, long description, status, type, classification, association to finding, evidence,
        #  archive status, finding impact, analyst assignment, collaborator assignment, posture, mitigation data, threat relevance,
        #  countermeasure data, impact data, severity data, and system level impact

        #Getters (Python might not need getters)

if __name__ == "__main__":
    print('hi')

   