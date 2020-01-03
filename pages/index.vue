<template>
  <div></div>
</template>
<script>
export default {
  middleware({ store, redirect }) {
    // If the user is not authenticated
    if (!store.getters.auth) {
      return redirect('/login')
    } else {
      return redirect('/dashboard')
    }
  }
}
</script>
