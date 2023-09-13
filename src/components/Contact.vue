<template>
    <h1>Feedback Form</h1>
      <form>

          <!-- not best practise conform -->
          <div>
              <label for="name">Name: 
                <input type="text" id="name" name="name" aria-label="Enter your name"/>
              </label>
          </div>

          <div>
              <label for="email">Email: 
                <input type="text" id="email" name="email" aria-label="Enter your email"/>
              </label>
          </div>

          <div>
              <label for="message">Message: 
                <textarea type="text" id="message" name="message" aria-label="Enter a message"></textarea>
              </label>
          </div>

          <button type="submit" aria-label="Submit">Submit</button>

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
