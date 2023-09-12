<template>
    <h1>Feedback Form</h1>
      <form>

          <!-- not best practise conform -->
          <div>
              <label for="name">Name: 
                <input type="text" id="name" name="name"/>
              </label>
          </div>

          <div>
              <label for="email">Email: 
                <input type="text" id="email" name="email"/>
              </label>
          </div>

          <div>
              <label for="message">Message: 
                <textarea type="text" id="message" name="message"></textarea>
              </label>
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
