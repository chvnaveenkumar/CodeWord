<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
       <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12"> 
<<<<<<< HEAD
         
      
      <i class="fas fa-plus-circle fa-2x"   title="Create CodeWord Set"   data-toggle="modal" data-target="#createCodeWordSet"  style="color:green; margin-left: 1em; float: left">Add Codeword Set</i>
=======
         <h1>
           CodeWord Set
         </h1>
        </div>
        </div>
      <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
    <i class="fas fa-plus-circle fa-2x"   title="Create CodeWord Set"   data-toggle="modal" data-target="#createCodeWordSet"  style="color:green; margin-left: 1em">Add CodeWord Set</i>
>>>>>>> a29217cde9d9389e2e5abaca5d6067b22934e9c1
<div class="modal fade" id="createCodeWordSet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add New CodeWord</h5>
      </div>
      <div class="modal-body">
   <form>
  <div class="form-group" >
    <label for="formGroupExampleInput" style="float:left">CodeWord Set Name</label>
    <input type="text" class="form-control" id="formGroupExampleInput" v-model="codeWordFileName" placeholder="Enter CodeWord Set Name">
  </div>
  <div class="form-group">
    <label for="exampleFormControlFile1" style="float:left" >Upload CodeWord Set(Excel)</label>
    <input type="file" class="form-control-file" id="file" ref="file" v-on:change="handleFileUpload()">
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">CANCEL</button>
        <button type="button" class="btn btn-primary" v-on:click="codewordFileUpload()">CREATE</button>
      </div>
    </div>
  </div>
</div>
      </div>
    </div>
<<<<<<< HEAD
      </div>
    
    
=======
    <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12" >
      </div>
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
    </div>
>>>>>>> a29217cde9d9389e2e5abaca5d6067b22934e9c1
</template>
<script>
export default {
  name: 'CreateCodeWordPage',
  data () {
    return {
      codeWordFileName: '',
      file: ''
    }
  },
  methods: {
<<<<<<< HEAD
    create () {
      document.getElementById("formGroupExampleInput");
      console.log(document.getElementById("formGroupExampleInput"))
=======
    codewordFileUpload () {
      console.log('inside codeword file' + this.file)
      let formData = new FormData()
      console.log(this.codeWordFileName)
      formData.append('codeWordFileName', this.codeWordFileName)
      formData.append('file', this.file)
      /* global axios */
      axios.post('codeword/codeWordFile',
        formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
            token: window.localStorage.getItem('token')
          }
        }).then(res => {
        console.log('sent success full')
      })
        .catch(() => {
          console.log('Failure')
        })
    },
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
>>>>>>> a29217cde9d9389e2e5abaca5d6067b22934e9c1
    }
  }
}
</script>
<style>
#message{
    margin-top:5em;
}
</style>
