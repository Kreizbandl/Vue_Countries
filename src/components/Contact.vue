<template>
  <!-- Überschrift -->
  <h1>Feedback Form</h1>
  <div
    v-if="!isFormSubmitted"
    class="contact"
  >
    <!-- Feedback Formular-->
    <form @submit.prevent="handleSubmit">
      <!-- Eingabefeld für den Namen mit beschreibendem Label -->
      <div>
        <label for="name">Name:
          <input
            id="name"
            ref="nameInput"
            v-model="name"
            type="text"
            name="name"
            aria-label="Enter your name"
            :style="{ borderColor: nameEmpty && nameInputBlurred ? 'red' : 'inherit' }"
            @blur="nameInputBlurred = true"
          >
        </label>
      </div>
      <!-- Eingabefeld für die Email mit beschreibendem Label -->
      <div>
        <label for="email">Email:
          <input
            id="email"
            v-model="email"
            type="text"
            name="email"
            aria-label="Enter your email" 
            :style="{ borderColor: emailEmpty && emailInputBlurred ? 'red' : 'inherit' }"
            @blur="emailInputBlurred = true"
          >
        </label>
      </div>
      <!-- Textbereich für die Nachricht mit beschreibendem Label -->
      <div>
        <label for="message">Message:
          <textarea
            id="message"
            v-model="message"
            type="text"
            name="message"
            aria-label="Enter a message"
            :style="{ borderColor: messageEmpty && messageInputBlurred ? 'red' : 'inherit' }"
            @blur="messageInputBlurred = true"
          />
        </label>
      </div>
      <!-- Button zum Absenden des Formulars mit beschreibendem Label -->
      <button
        id="submit"
        type="submit"
        aria-label="Submit"
        :disabled="!isFormValid"
      >
        Submit
      </button>
    </form>
  </div>
  <div v-else>
    <p>Thank you for your message!</p>
  </div>
</template>

<script>
export default {
  name: 'ContactComponent',
  data(){
    return{
      name: '',
      email: '',
      message: '',
      nameInputBlurred: false,
      emailInputBlurred: false,
      messageInputBlurred: false,
      isFormSubmitted: false
    };
  },
  computed: {
    isFormValid() {
      return this.name.trim() !== '' && this.email.trim() !== '' && this.message.trim() !== '';
    },
    nameEmpty() {
      return this.name === '';
    },
    emailEmpty() {
      return this.email === '';
    },
    messageEmpty() {
      return this.message === '';
    },
  },
  mounted() {
    // Nachdem die Komponente montiert wurde, den Fokus auf das Name-Eingabefeld setzen
    this.$refs.nameInput.focus();
  },
  methods: {
    handleSubmit(){
      console.log("Form: ", this.name, this.email, this.message);
      this.isFormSubmitted = true;
    }
  }
}
</script>

<style scoped>
.contact {
    margin: 0 auto;
    text-align: center;
}
form {
    display: inline-block;
    width: 400px;
    flex-direction: column;
}
#name,
#email,
#message {
    width: 100%;
    padding: 10px;
    border: 1px solid #333333;
    border-radius: 3px;
    margin-bottom: 10px;
    margin-top: 5px;
}

textarea {
    height: 150px;
}

#submit {
    width: 100px;
    height: 30px;
    border: 1px solid #333333;
    border-radius: 3px;
}
</style>
