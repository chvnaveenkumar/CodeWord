/**
 * @author Naveenkumar Nuggu
 */
<template>
    <div id="codeWord" class="container-fluid" style="margin-top:5em">
    <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
      
<h1>Softseventy(70)</h1>
<div class="col-md-4 col-lg-4 col-xs-4 col-sm-4">
   <!-- Button trigger modal -->
<button type="button" class="btn btn-success" title="Create CodeWord" data-toggle="modal" data-target="#createcodeword" style="float:left">
   <span class="fa fa-plus"></span> Add codeword
</button>

<!-- Modal -->
<div class="modal fade" id="createcodeword" tabindex="-1" role="dialog" aria-labelledby="createcodewordLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="createcodewordLabel">Add COdeword</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true"
          >&times;</span>
        </button>
      </div>
      <div class="modal-body">
       

<div class="form-group text-left">
                                Upload Cordwords(Excel)
                                <input type="file"  name="file" ref="myFile"  class="form-control-file" id="exampleFormControlFile1" style="margin-top:.2em"
                                    required>
                            </div>


      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
</div>
<table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Codewords</th>
                        <th scope="col">Options</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td > Codeword1</td>
                         <td><a href="#" class="btn btn-warning"> <i class="fas fa-pencil-alt"></i> </a> <button type="button" class="btn btn-danger" title="Create CodeWord" data-toggle="modal" data-target="#" style="marging-left:10px">
   <i class="fas fa-trash"></i>
</button> 
</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Codeword2</td>
                        <td><a href="#" class="btn btn-warning"> <i class="fas fa-pencil-alt"></i> </a> <a href="#" class="btn btn-danger" style="marging-left:10px"> <i class="fas fa-trash"></i> </a> </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Codeword3</td>
                        <td><a href="#" class="btn btn-warning"> <i class="fas fa-pencil-alt"></i> </a> <a href="#" class="btn btn-danger" style="marging-left:10px"> <i class="fas fa-trash"></i> </a> </td>
                    </tr>

                </tbody>
            </table>


    </div>
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
      axios.post('http://localhost:3000/codeword/addcodewordset', sendData).then(response => {
        console.log(response.data.data)
        this.getCodeWordData()
      })
    },
    getCodeWordData () {
      axios.get('http://localhost:3000/codeword/getcodewordset').then(response => {
        this.codeWordSetData = response.data.data
      })
    }
    // resetForm: function (e) {
    //   e.preventDefault()
    //   this.name = ''
    //   this.data = ''
    // }
  },
  mounted () {
    this.getCodeWordData()
  }
}
</script>

