import EventService from '@/services/EventService.js'

export const state = () => ({
  user: { id: 'abc123', name: 'Adam Jahr' },
  categories: [
    'sustainability',
    'nature',
    'animal welfare',
    'housing',
    'education',
    'food',
    'community'
  ],
  events: []
})

export const mutations = {
  ADD_EVENT(state, event) {
    state.events.push(event)
  }
}

export const actions = {
  createEvent({ commit }, event) {
    return EventService.postEvent(event).then(() => {
      commit('ADD_EVENT', event)
    })
  }
}

export const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id === id)
  }
}
