<template>
<div class="container-fluid" style="margin-top:5em" >
            <div class="col-md-3 col-lg-3 col-xs-0 col-sm-0">
                <h1> {{ courseNameData }} </h1>
            </div>
 <div class="card">
  <div class="card-body">
    Start Date:
  </div>
</div>
 <table class="table table-striped col-md-6 col-lg-6 col-xs-0 col-sm-0 " align="right">
 <thead>
            <tr>
                <th>
                    <h4>
                        <u>Email</u>
                    </h4>
                </th>
                <th>
                    <h4>
                        <u>Name</u>
                    </h4>
                </th>
				<th>
                    <h4>
                        <u>Acknowledged</u>
                    </h4>
                </th>
            </tr>
        </thead>

  <tbody>
    <tr v-for="courseStudent in courseStudentData" :key="courseStudent._id">
      <td scope="row">{{ courseStudent.EmailKey }}</td>
      <td>{{ courseStudent.StudentName }}</td>
      <td>{{ courseStudent.Acknowledged }} </td>
    </tr>
  </tbody>
</table>
</div>    
</template>
<script>
    /* global axios */
    export default {
      name: 'CourseStudent',
      data () {
        return {
          courseNameData: '',
          courseStudentData: '',
          courseData: ''
        }
      },
      created () {
        if (this.$route.params.courseName == null) {
          this.courseNameData = window.localStorage.getItem('courseName')
          this.getCourseStudentData()
          this.getCourseData()
        } else {
          this.courseNameData = this.$route.params.courseName
          window.localStorage.setItem('courseName', this.courseNameData)
          this.getCourseStudentData()
          this.getCourseData()
        }
      },
      methods: {
        getCourseStudentData () {
          axios({
            method: 'post',
            url: 'codeword/getcoursestudent',
            data: {
              CourseNameValue: this.courseNameData
            },
            headers: {
              token: window.localStorage.getItem('token')
            }
          }).then(response => {
            console.log(response.data.data)
            this.courseStudentData = response.data.data
          })
        },
        getCourseData () {
        }
      }
    }
</script>

<style>
#message {
  margin-top: 5em;
}

.contan{
  width: 100%;
  background-color: #ddd;
}

.skills {
  text-align: right;
  padding: 10px;
  color: white;
}

.html {width: 50%; background-color: #4CAF50;}

</style>
