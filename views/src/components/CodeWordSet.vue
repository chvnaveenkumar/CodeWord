<template>
<div id="codeWordSet" class="container-fluid" style="margin-top:5em">
    <div class="col-md-4 col-lg-4 col-xs-0 col-sm-0">
        <button type="button" class="btn btn-success" title="Create CodeWord Set" data-toggle="modal" data-target="#addcourse">
                    <span class="fa fa-plus"></span> Create Codeword Set
                </button>
        <div class="modal fade" id="addcourse" tabindex="-1" role="dialog" aria-labelledby="addcourseLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content" style="width:fit-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="addcourseLabel">Create CodewordSet</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input name="dataSetName" type="text" class="form-control" placeholder="Enter CordwordSet Name" data-toggle="tooltip" data-placement="top" title="Enter CordwordSet Name"
                                    required>
                            </div>
                            
                            <div class="form-group text-left">
                                Upload Cordword Set(Excel)
                                <input type="file"  name="file" ref="myFile" @change="previewFiles" class="form-control-file" id="exampleFormControlFile1" style="margin-top:.2em"
                                    required>
                            </div>
                            
                            <div class="alert alert-info">
                                 <p v-if="count == 0">                          
                                 No File is uploaded. Waiting for user to upload the CodeWord Set.</p>
                                <p v-else>
                                    <strong>Info!</strong> There are {{ count }} codewords in the Uploaded set.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-success" data-dismiss="modal" @click.prevent="saveCodeWordData">Create Codeword Set</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>

    <table class="table table-striped">
        <thead>
            <tr>
                <th scope="col">
                    <h4>
                        <u>ID</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>CodewordSet Name</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>Codeword Count</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>CordwordSet Creator</u>
                    </h4>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(code,index) in codeWordSetData" :key="code._id">
                 <th scope="row">{{ index + 1 }}</th>
                <td> {{ code.CodeWordSetName }} </td>
                <td> {{ code.emailKey.length }} </td>
                <td> {{ code.codeWordCreator }} </td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CodeWordSet',
  data () {
    return {
      files: '',
      tcodeWordSetData: [],
      codeWordSetData: [],
      count: 0
    }
  },

  methods: {
    // Getting the data from uploaded xls file
    previewFiles () {
      this.files = this.$refs.myFile
      let data = new FormData(document.querySelector('form'))
      axios.post('http://localhost:3000/codeword/getdataxlsx', data).then(response => {
        console.log(response.data.data)
        this.tcodeWordSetData = response.data.data
        this.count = this.tcodeWordSetData.length
      })
    },

    // Calling API of codeWordSet controller and sending xls data in form of json
    saveCodeWordData () {
      let data = new FormData(document.querySelector('form'))
      let sendData = {
        codeWordSetName: data.get('dataSetName'),
        emailKeySet: this.tcodeWordSetData
      }
      axios({
        method: 'post',
        url: 'http://localhost:3000/codeword/addcodewordset',
        data: sendData,
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(response => {
        console.log(response.data.data)
        this.getCodeWordData()
      })
    },
    getCodeWordData () {
      axios.get('http://localhost:3000/codeword/getcodewordset').then(response => {
        this.codeWordSetData = response.data.data
      })
    }
  },
  mounted () {
    this.getCodeWordData()
  }
}
</script>

<style>
#message {
  margin-top: 5em;
}
</style>

