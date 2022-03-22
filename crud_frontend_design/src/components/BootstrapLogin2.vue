<template>
  <section class="vh-100" style="background-color: #508bfc;">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem;">
            <div class="card-body p-5 text-center">

              <h3 class="mb-5">Sign in to your account</h3>

              <div class="form-outline mb-4">
                <input type="email" id="typeEmailX-2" class="form-control form-control-lg" placeholder="Enter Email" />
              </div>

              <div class="form-outline mb-4">
                <input type="password" id="typePasswordX-2" class="form-control form-control-lg" placeholder="Enter Password" />
              </div>

              <div class="d-flex justify-content-between align-items-center mb-4">
                <!-- Checkbox -->
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="form1Example3"
                  />
                  <label class="form-check-label" for="form1Example3"> Remember password </label>
                </div>
                <a href="#!" class="text-body">Forgot password?</a>
              </div>
              <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>

              <hr class="my-4">

              <p class="text-center small fw-bold mt-2 pt-1 mb-0">Don't have an account? <router-link :to='{name: "BootstrapRegister"}' class="link-danger">Register</router-link></p>

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  
}
</script>

<style>
  h3 {
    font-family: 'Times New Roman', Times, serif;
  }
  button {
    padding: 5px 30px !important;
  }
  .ml-10 {
    margin-left: 10px;
  }
</style>