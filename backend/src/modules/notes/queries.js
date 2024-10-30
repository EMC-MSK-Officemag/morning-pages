


const getNotesOfUserQuery = 'SELECT NikName, WriteDate, WriteText FROM users JOIN notes ON notes.UserId=users.Id WHERE UserId=2;'

export { getNotesOfUserQuery };