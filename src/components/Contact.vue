<template>
    <h1>Feedback Form</h1>
      <form>

          <div>
              <label for="name">Name: </label>
              <input type="text" id="name" name="name"/>
          </div>

          <div>
              <label for="email">Email: </label>
              <input type="text" id="email" name="email"/>
          </div>

          <div>
              <label for="message">Message: </label>
              <textarea type="text" id="message" name="message"></textarea>
          </div>

          <button type="submit">Submit</button>

      </form>
</template>

<script>
export default {
  name: 'ContactComponent',
}
</script>

<style scoped>
form {
  text-align: center;
}
</style>
