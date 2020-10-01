import Task

class Subtask(Task):
    # Constructor
    def __init__(self, title, description, priority, progress, dueDate, taskAssociation, archiveStatus, attachment, analystAssign, collabAssign):
        super().__init__(title, description, priority, progress, dueDate, taskAssociation, archiveStatus, attachment, analystAssign, collabAssign)
        

        #title, description, priority, progress, due date, attachment, association to task, analyst assignment, collaborator assignment, and archive status.

        #Getters (Python might not need getters)

if __name__ == "__main__":
    print('hi')

   