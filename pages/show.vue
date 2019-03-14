<template>
  <div>
    <div class="event-header">
      <span class="eyebrow">@{{ event.time }} on {{ event.date }}</span>
      <h1 class="title">
        {{ event.title }}
      </h1>
      <h5>Organized by {{ event.organizer }}</h5>
      <h5>Category: {{ event.category }}</h5>
    </div>
    <BaseIcon name="map">
      <h2>Location</h2>
    </BaseIcon>
    <address>{{ event.location }}</address>
    <h2>Event details</h2>
    <p>{{ event.description }}</p>
    <h2>
      Attendees
      <span class="badge -fill-gradient">{{ event.attendees ? event.attendees.length : 0 }}</span>
    </h2>
    <ul class="list-group">
      <li v-for="(attendee, index) in event.attendees" :key="index" class="list-item">
        <b>{{ attendee.name }}</b>
      </li>
    </ul>
  </div>
</template>
    
    <script>
import BaseIcon from '@/components/BaseIcon.vue'
import EventService from '@/services/EventService.js'
export default {
  head() {
    return {
      title: 'Event #' + this.id,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'What you need to know about event ' + this.id
        }
      ]
    }
  },
  components: {
    BaseIcon
  },
  // props: ['id'],
  data() {
    return {
      event: {}
    }
  },
  computed: {
    id() {
      return this.$route.params.id
    }
  },
  created() {
    EventService.getEvent(this.id) // <--- Send the prop id to our EventService
      .then(response => {
        this.event = response.data
      })
      .catch(error => {
        return ['There was an error:', error.response]
      })
  }
}
</script>

 
    <style scoped>
.location {
  margin-bottom: 0;
}
.location > .icon {
  margin-left: 10px;
}
.event-header > .title {
  margin: 0;
}
.list-group {
  margin: 0;
  padding: 0;
  list-style: none;
}
.list-group > .list-item {
  padding: 1em 0;
  border-bottom: solid 1px #e5e5e5;
}
</style>
