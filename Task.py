class Task:
    # Constructor
    def _init_(self, title, description, priority, progress, dueDate, taskAssociation, archiveStatus, attachment, analystAssign, collabAssign):
        self._title = title
        self._description = description
        self._priority = priority
        self._progress = progress
        self._dueDate = dueDate
        self._taskAssociation = taskAssociation
        self._archiveStatus = archiveStatus
        self._attachment = attachment
        self._analystAssign = analystAssign
        self._collabAssign = collabAssign

        #title, description, priority, progress, due date, attachment, association to task, analyst assignment, collaborator assignment, and archive status.

        #Getters (Python might not need getters)

   