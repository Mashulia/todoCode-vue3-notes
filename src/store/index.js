import {createStore} from 'vuex'

export const store = createStore({
    state: {
        users: [
            {id: 1, name: 'evgenii', admin: true},
            {id: 2, name: 'alex', admin: true},
            {id: 3, name: 'garry', admin: false},
        ],
        user: null
    },
    mutations: { //задать значение в стейте(не поддерживает асинхронные действия)
        setUser(state, user){
            state.user = user
        }
    },
    actions: {   // вызывают мутации// делают запросы, фильтры, условия, изменить data
          setUser({commit}){
              setTimeout(()=>{
                  const fakeUser = {
                      id: 126576,
                      name: 'denis',
                      admin: false
                  }
                  commit('setUser', fakeUser)
              }, 1000)
          }
    },
    getters:{
        isUserLogged(state){
            return state.user ? true : false
        },
        getAllUsers(state){
            return state.users
        },
        getUser(state){
            return state.user
        },
        getUsers(state){
            return state.users.filter(user=>!user.admin)
        },
        getUsersById: (state)=> id => state.users.find(user=>user.id == id) ,
        getUsersLength(state, getters){
            const suffix = 'Количество пользователей: '
            return `${suffix} ${getters.getAllUsers.length}`
        }
    }
})
