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
                            <!-- <div class="form-group">
                                        <input type="number" class="form-control" id="replyNumber" data-bind="value:replyNumber" placeholder="Enter Number of Codewords" data-toggle="tooltip" data-placement="top" title="Enter Number of Codewords" required>
                                    </div> -->
                            <div class="form-group text-left">
                                Upload Cordword Set(Excel)
                                <input type="file"  name="file" ref="myFile" @change="previewFiles" class="form-control-file" id="exampleFormControlFile1" style="margin-top:.2em"
                                    required>
                            </div>
                            <!-- s -->
                            <div class="alert alert-info">
                                <strong>Info!</strong> There are {{ count }} codewords in the Uploaded set.
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
            <tr>
                <th scope="row">1</th>
                <td>Hoot Original set</td>
                <td>80</td>
                <td>hoot@nwmissouri.edu</td>
            </tr>
            <tr>
                <th scope="row">2</th>
                <td>Large set</td>
                <td>200</td>
                <td>dcase@nwmissouri.edu</td>
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
      codeWordSetData: [],
      count: 0
    }
  },
  methods: {
    previewFiles () {
      this.files = this.$refs.myFile
      let data = new FormData(document.querySelector('form'))
      axios.post('http://localhost:3000/codeword/getdataxlsx', data).then(response => {
        console.log(response.data.data)
        this.codeWordSetData = response.data.data
        this.count = this.codeWordSetData.length
      })
    },
    saveCodeWordData () {
      let data = new FormData(document.querySelector('form'))
      let sendData = {
        name: data.get('dataSetName'),
        data: this.codeWordSetData
      }
      axios.post('http://localhost:3000/codeword/addcodewordset', sendData).then(response => {
        console.log(response.data.data)
      })
    }
  }
}
</script>

<style>
#message {
  margin-top: 5em;
}
</style>

