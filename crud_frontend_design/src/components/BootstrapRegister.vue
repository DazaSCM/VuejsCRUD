<template>
  <section class="vh-100">
    <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="shadow p-3 mb-5 bg-white rounded card-registration">
            <div class="card-body p-4 p-md-2">
              <h3 class="text-center pb-md-0 mb-md-4">Sign Up Account</h3>
              <hr class="mb-md-4">
              <form>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="text" id="name" class="form-control form-control-lg" placeholder="Enter Name" />
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="text" id="email" class="form-control form-control-lg" placeholder="Enter Email" />
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="password" id="password" class="form-control form-control-lg" placeholder="Enter Password" />
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <div class="form-outline">
                      <input type="password" id="confirm_password" class="form-control form-control-lg" placeholder="Re-enter Passwrod" />
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">

                    <div class="form-outline datepicker w-100">
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id="birthdayDate"
                        placeholder="Birthday"
                      />
                    </div>

                  </div>
                  <div class="col-md-6 mb-4">

                    <h6 class="mb-2 pb-1">User Type: </h6>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="user"
                        value="1"
                        checked
                      />
                      <label class="form-check-label" for="user">User</label>
                    </div>

                    <div class="form-check form-check-inline">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="inlineRadioOptions"
                        id="admin"
                        value="0"
                      />
                      <label class="form-check-label" for="admin">Admin</label>
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">

                    <div class="form-outline">
                      <input type="text" id="address" class="form-control form-control-lg" placeholder="Enter Address" />
                    </div>

                  </div>
                  <div class="col-md-6 mb-4 pb-2">

                    <div class="form-outline">
                      <input type="tel" id="phoneNumber" class="form-control form-control-lg" placeholder="Enter Phone Number" />
                    </div>

                  </div>
                </div>

                <div class="row">
                  <div class="col-12">
                    <label class="form-label" for="customFile">Choose Profile Photo</label>
                    <input type="file" class="form-control" id="customFile" />
                  </div>
                </div>

                <div class="mt-4 pt-2 d-flex justify-content-around align-items-center">
                  <input class="btn btn-outline-primary btn-lg" type="submit" value="Submit" />
                  <input class="btn btn-outline-warning btn-lg" type="reset" />
                </div>

              </form>
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
  .gradient-custom {
  /* fallback for old browsers */
  background: #f093fb;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1));

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to bottom right, rgba(240, 147, 251, 1), rgba(245, 87, 108, 1))
  }

  .card-registration .select-input.form-control[readonly]:not([disabled]) {
    line-height: 2.15;
    padding-left: .75em;
    padding-right: .75em;
  }
  .card-registration .select-arrow {
    top: 13px;
  }
  input{
    font-family: 'Times New Roman', Times, serif;
    font-size: 17px !important;
  }
</style>