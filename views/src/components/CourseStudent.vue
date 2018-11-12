<template>
<div class="container-fluid" style="margin-top:5em" >
            <div class="col-md-8 col-lg-12 col-xs-0 col-sm-0">
            </div>
<div class="contan">
  <div class="skills html">10 of 20 Students  (50%)</div>
  <h1> {{ courseNameData }} </h1>
</div>
  <table class="table table-striped">
 <thead>
            <tr>
                <th scope="col">
                    <h4>
                        <u>Course Name</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>Email</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>Name</u>
                    </h4>
                </th>
                <th scope="col">
                    <h4>
                        <u>Codeword</u>
                    </h4>
                </th>
				<th scope="col">
                    <h4>
                        <u>Acknowledged</u>
                    </h4>
                </th>
            </tr>
        </thead>

  <tbody>
    <tr v-for="courseStudent in courseStudentData" :key="courseStudent._id">
      <th scope="row">{{ courseStudent.CourseNameKey }}</th>
      <td>{{ courseStudent.EmailKey }}</td>
      <td>{{ courseStudent.StudentName }}</td>
      <td>{{ courseStudent.Codeword }}</td>
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
          courseStudentData: ''
        }
      },
      created () {
        console.log(this.$route.params.courseName + 'params')
        if (this.$route.params.courseName == null) {
          this.courseNameData = window.localStorage.getItem('courseName')
          this.getCourseStudent()
        } else {
          this.courseNameData = this.$route.params.courseName
          window.localStorage.setItem('courseName', this.courseNameData)
          this.getCourseStudent()
        }
      },
      methods: {
        getCourseStudent () {
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
