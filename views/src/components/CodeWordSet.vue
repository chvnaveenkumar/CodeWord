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
                        <h5 class="modal-title" id="addcourseLabel">Create Codeword Set</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="form-group">
                                <input name="dataSetName" type="text" class="form-control" placeholder="Enter Cordword Set Name" data-toggle="tooltip" data-placement="top" title="Enter Cordword Set Name"
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
                                    There are {{ count }} codewords in the Uploaded set.</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-danger" data-dismiss="modal">Cancel</button>
                                <button type="submit" class="btn btn-success" data-dismiss="modal" @click.prevent="saveCodeWordData" @click="showDetails">Create Codeword Set</button>
                            </div>

                        </form>

                    </div>

                </div>
            </div>
        </div>
    </div>
    <!-- class="table table-striped" -->

    <table id="codewordsetTable">
        <thead>
            <tr>
                <!-- <th scope="col">
                    <h4>
                        <u>ID</u>
                    </h4>
                </th> -->
                
                <th scope="col">
                    <h4>
                        <u>Codeword Set Name</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>Count</u>
                    </h4>
                </th>
                <th scope="col">
                   
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(code,index) in codeWordSetData" :key="code._id">
                 <!-- <th scope="row">{{ index + 1 }}</th> -->
                <td> {{ code.CodeWordSetName }} </td>
                 <td id="count">{{ codeWordSetCount[index] }}</td>
                <td> <router-link to="/codeword"><button type="button" class="btn btn-info btn-sm">Show Details</button></router-link>
                    </td>
            </tr>

        </tbody>
    </table>
</div>
</template>

<script>
export default {
  name: 'CodeWordSet',
  data () {
    return {
      files: '',
      codeWordSetCount: [],
      codeWordSetData: [],
      count: 0
    }
  },
  /* global axios */
  methods: {
    // Getting the data from uploaded xls file
    previewFiles () {
      this.files = this.$refs.myFile
      let data = new FormData(document.querySelector('form'))
      axios.post('http://localhost:3000/codeword/getdataxlsx', data).then(response => {
        console.log(response.data.data)
        this.tcodeWordSetData = response.data.data
        this.count = response.data.data.length
      })
    },

    // Calling API of codeWordSet controller and sending xls data in form of json
    saveCodeWordData () {
      let data = new FormData(document.querySelector('form'))
      let sendData = {
        CodeWordSetName: data.get('dataSetName')
      }
      let sendData2 = {
        CodeWordSetName: data.get('dataSetName'),
        Codewords: this.tcodeWordSetData
      }
      axios({
        method: 'post',
        url: 'http://localhost:3000/codeword/addcodewordset',
        data: sendData,
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(response => {
        if (response.data.code === 200) {
          axios({
            method: 'post',
            url: 'http://localhost:3000/codeword/addnewcodewords',
            data: sendData2,
            headers: {
              token: window.localStorage.getItem('token')
            }
          }).then(response => {
            console.log(response.data.data)
            this.getCodeWordData()
          })
        }
      })
    },
    getCodeWordData () {
      axios({
        method: 'get',
        url: '/codeword/getcodewordset',
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(response => {
        this.codeWordSetData = response.data.data
        for (var i = 0; i < this.codeWordSetData.length; i++) {
          axios({
            method: 'post',
            url: '/codeword/getCodewords',
            headers: {
              token: window.localStorage.getItem('token')
            },
            data: {
              CodeWordSetKey: this.codeWordSetData[i].CodeWordSetName
            }
          }).then(response => {
            this.codeWordSetCount.push(response.data.count)
          })
        }
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

  #codewordsetTable {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 80%;
    margin-left: 10%;
    margin-top: 3%;
    margin-bottom: 10%;
}

#codewordsetTable td, #codewordsetTable th {
    /* border: 1px solid #ddd; */
    padding: 8px;
}


#codewordsetTable tr:nth-child(even){background-color: #f2f2f2;}

#codewordsetTable tr:hover {background-color: #ddd;}

#codewordsetTable th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #4CAF50;
    color: white;
    width: 60%;
}

#codewordsetTable td {
    text-align: center;
    color:black;
    width: 60%;
}
#btn{
  width: 80%;
  align: right;
  /* margin-left: 50%; */
}
</style>

