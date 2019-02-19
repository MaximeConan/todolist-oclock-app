import uuidv4 from 'uuid/v4'

export default [
  {
    id: uuidv4(),
    done: false,
    fav: true,
    label: 'Coder une totolist',
  },
  {
    id: uuidv4(),
    done: false,
    fav: false,
    label: 'Faire les courses',
  },
  {
    id: uuidv4(),
    done: true,
    fav: false,
    label: 'Aller à la salle',
  },
]
