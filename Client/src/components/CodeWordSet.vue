<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
    <i class="fas fa-plus-circle fa-2x"   title="Create CodeWord Set"   data-toggle="modal" data-target="#createCodeWordSet"  style="color:green; margin-left: 1em">Add CodeWord Set</i>
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
      <div class="btn-group">
  <!-- Basic dropdown -->
  <button class="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">List of CodeWord Sets</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" v-for="element of codeWordSet" :key="element.CodeWordSetName" @click="getCodeWords(element.CodeWordSetName)">{{ element.CodeWordSetName }} </a>  
  </div>
  </div>
      <div class="row">
      <div class="col-md-8 col-lg-8 col-xs-0 col-sm-0">
      
<table class="table">
  <thead class="grey lighten-2">
    <tr>
      <th scope="col">#</th>
      <th scope="col">CordWord Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(element,index) in codewords" :key="index" >
      <th scope="row">{{ index+1 }}</th>
      <td>{{ element }}</td>
    </tr>
  </tbody>
</table>       
      </div>
      </div>
    <div class="col-md-8 col-lg-8 col-xs-12 col-sm-12" >
      </div>
      <div class="col-md-2 col-lg-2 col-xs-0 col-sm-0"></div>
    </div>
</template>
<script>
export default {
  name: 'CreateCodeWordPage',
  data () {
    return {
      codeWordFileName: '',
      file: '',
      codeWordSet: '',
      codewords: ''
    }
  },
  mounted () {
    axios.get('codeword/getCodeWordSet',
      {
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(res => {
      this.codeWordSet = res.data
    })
      .catch(() => {
        console.log('Failure')
      })
  },
  methods: {
    getCodeWords (selectedCodeWordSet) {
      for (let element of this.codeWordSet) {
        if (element.CodeWordSetName === selectedCodeWordSet) {
          this.codewords = element.CodeWords
          console.log(this.codewords)
        }
      }
    },
    codewordFileUpload () {
      console.log('inside codeword file' + this.file)
      let formData = new FormData()
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
    }
  }
}
</script>
<style>
#message{
    margin-top:5em;
}
</style>
