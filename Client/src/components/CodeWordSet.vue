<template>
    <div class="container-fluid" style="margin-top:5em" >
      <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
    <button type="button" class="btn btn-success" title="Create CodeWord Set" data-toggle="modal" data-target="#createCodeWordSet">
      <span class="fa fa-plus"></span> Add New CodeWord Set
    </button>
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
    <input type="file" class="form-control-file" id="file" ref="file" v-on:change="handleFileUpload()">
    Upload CodeWord Set(Excel)
  </div>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">CANCEL</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal" v-on:click="codewordFileUpload()">CREATE</button>
      </div>
    </div>
  </div>
</div>
      </div>
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
  <button class="btn btn-info dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true"
    aria-expanded="false">List of CodeWord Sets</button>
  <div class="dropdown-menu">
    <a class="dropdown-item" v-for="element of codeWordSetAll" :key="element.CodeWordSetName" @click="getCodeWordsAll(element.CodeWordSetName)">{{ element.CodeWordSetName }} </a>  
  </div>
      </div>
            <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
            <button type="button" class="btn btn-warning" title="Delete CodeWord Set" data-toggle="modal" data-target="#deleteCodeWordSet" v-on:click="getCodeWordsSetsUser()">
      <span class="fa fa-minus"></span> Delete CodeWord Set
    </button>
<div class="modal fade" id="deleteCodeWordSet" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete CodeWord Set</h5>
      </div>
      <div class="modal-body">
   <form>
  <select>
  <option v-for="element of codeWordSetUser" :key="element.CodeWordSetName">{{ element.CodeWordSetName }} </option>
</select>
</form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-warning" data-dismiss="modal">CANCEL</button>
        <button type="button" class="btn btn-primary" v-on:click="deleteCodeWordsetUser(selected.element)">DELETE</button>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    <br>
      <div class="row">
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0"></div>
      <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
<table class="table">
  <thead class="grey lighten-2">
    <tr>
      <th scope="col">#</th>
      <th scope="col">CordWord Name</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(element,index) in codewordsAll" :key="index" >
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
      codeWordSetAll: '',
      codewordsAll: '',
      codeWordSetUser: ''
    }
  },
  mounted () {
    axios.get('codeword/getAllCodeWordSet',
      {
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(res => {
      this.codeWordSetAll = res.data
    })
      .catch(() => {
        console.log('Failure')
      })
  },
  methods: {
    getCodeWordsAll (selectedCodeWordSet) {
      for (let element of this.codeWordSetAll) {
        console.log(selectedCodeWordSet)
        if (element.CodeWordSetName === selectedCodeWordSet) {
          this.codewordsAll = element.CodeWords
        }
      }
    },
    deleteCodeWordsetUser (deleteCodeWordSetName) {
      axios.get('codeword/deleteUserCodeWordSet',
        {
          headers: {
            token: window.localStorage.getItem('token')
          },
          data: {
            deleteCodeWordSetName
          }
        }).then(res => {
        console.log(res)
      })
        .catch(() => {
          console.log('Failure')
        })
    },
    getCodeWordsSetsUser () {
      axios.get('codeword/getUserCodeWordSet',
        {
          headers: {
            token: window.localStorage.getItem('token')
          }
        }).then(res => {
        console.log(res.data)
        this.codeWordSetUser = res.data
      })
        .catch(() => {
          console.log('Failure')
        })
    },
    codewordFileUpload () {
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
