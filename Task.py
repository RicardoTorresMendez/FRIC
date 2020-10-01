class Task:
    # Constructor
    def __init__(self, title, description, priority, progress, dueDate, taskAssociation, archiveStatus, attachment, analystAssign, collabAssign):
        self.title = title
        self.description = description
        self.priority = priority
        self.progress = progress
        self.dueDate = dueDate
        self.taskAssociation = taskAssociation
        self.archiveStatus = archiveStatus
        self.attachment = attachment
        self.analystAssign = analystAssign
        self.collabAssign = collabAssign

        #title, description, priority, progress, due date, attachment, association to task, analyst assignment, collaborator assignment, and archive status.

        #Getters (Python might not need getters)

if __name__ == "__main__":
    print('hi')

   