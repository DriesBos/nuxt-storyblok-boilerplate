<template>
  <div id="fetchApi">
    {{ data }}
  </div>
</template>

<script>
import axios from "axios"

export default {
  // props: {
  //   blok: Object
  // },
  data() {
    return {
      data: null
    }
  },
  beforeMount() {
    this.getData()
    this.sendData()
  },
  mounted() {
    // console.log("COMP DATA", this.blok, this.data, this.$config)
  },
  methods: {
    getData() {
      axios
        .get("https://reqres.in/api/users")
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.log(err, err.response)
        })
    },
    sendData() {
      axios
        .post("https://reqres.in/api/register", {
          email: "eve.holt@reqres.in",
          password: "pistol"
        })
        .then(response => {
          console.log("POST RESPONSE", response)
        })
        .catch(err => {
          console.log(err, err.response)
        })
    }
  }
}
</script>
