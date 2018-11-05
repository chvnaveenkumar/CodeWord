<template>
<div class="container-fluid" style="margin-top:5em" >
            <div class="col-md-8 col-lg-12 col-xs-0 col-sm-0">
              <h2><u>Course Name : 2018 Fall 44-444-01 </u></h2> <br>
               
                

            </div>



  <div id="myProgress">
  <div id="myBar"></div>
  </div>  
  <div><h4><b>10 of 20 Students  (50%)</b></h4></div>  
       
 
  <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"><h4><u>Course ID</u></h4></th>
      <th scope="col"><h4><u>Email </u></h4></th>
      <th scope="col"><h4><u>Name</u></h4></th>
      <th scope="col"><h4><u>Cordword</u></h4></th>
      <th scope="col"><h4><u>Acknowledged</u></h4></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>s531519@nwmissouri.edu</td>
      <td>Yashwanth Reddy Bommineni</td>
      <td>Africa</td>
      <td> 1 </td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>s530742@nwmissouri.edu</td>
      <td>Naveen Kumar Chandaluri</td>
      <td>Almond</td>
      <td>1 </td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>s531495@nwmissouri.edu</td>
      <td>Chaithanya Cherukuru</td>
      <td>Anger</td>
      <td> 1 </td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>s531367@nwmissouri.edu</td>
      <td>Sai Sirisha Devineni</td>
      <td>America</td>
      <td> 1 </td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>s531496@nwmissouri.edu</td>
      <td>Shivani Reddy Dodla</td>
      <td>Bravo</td>
      <td> 0 </td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>s531369@nwmissouri.edu</td>
      <td>Girish Guntuku</td>
      <td>Bank</td>
      <td> 0 </td>
    </tr>
    <tr>
      <th scope="row">7</th>
      <td>s531499@nwmissouri.edu</td>
      <td>Saicharan Gurudu</td>
      <td>Bounce</td>
      <td> 0 </td>
    </tr>
    <tr>
      <th scope="row">8</th>
      <td>s531500@nwmissouri.edu</td>
      <td>Sravya Kancharla</td>
      <td>Bigger</td>
      <td> 0 </td>
    </tr>
    <tr>
      <th scope="row">9</th>
      <td>s531372@nwmissouri.edu</td>
      <td>Anurag Kumar</td>
      <td>Computer</td>
      <td> 1 </td>
    </tr>
    <tr>
      <th scope="row">10</th>
      <td>s530473@nwmissouri.edu</td>
      <td>Ujjawal Kumar</td>
      <td>Cancer</td>
      <td> 1 </td>
    </tr>
    
  </tbody>
</table>
</div>    
</template>


<style>
#message {
  margin-top: 5em;
}

#myProgress {
    width: 100%;
    background-color: grey;
}
#myBar {
    width: 50%;
    height: 30px;
    background-color: green;
}
</style>

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
  },
  mounted () {
    this.getCodeWordData()
  }
}
</script>
