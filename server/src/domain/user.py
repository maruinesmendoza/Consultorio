class User:
    id = ''
    username = ''
    password = ''
    firstName = ''
    lastName = ''
    token = ''
    def __init__(self,id,username,password,firstName,lastName,token):
        self.id = id
        self.username = username
        self.password = password
        self.firstName = firstName
        self.lastName = lastName
        self.token = token