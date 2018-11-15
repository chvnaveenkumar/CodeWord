<template>
<div class="container-fluid" style="margin-top:5em" >
            <div class="col-md-6 col-lg-6 col-xs-0 col-sm-0">
                <h3 style="font-weight:bold"> Course Name: {{ courseNameData }} </h3>
            </div>
 <div class="card">
  <div class="card-body">
    <div class="row" >
    <div class="col-md-6 col-lg-6 col-xs-0 col-sm-0" style="text-align:left;font-weight:bold">
    Start Date: {{ courseData.Startdate }} <br>
    End Date: {{ courseData.Enddate }} <br>
    Start Survey URL: {{ courseData.PreSurveyURL }} <br>
    End Survey URL: {{ courseData.PostSurveyURL }} <br>
    </div>
    </div>
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
      courseData: '',
      coursesData: ''
    }
  },
  created () {
    if (this.$route.params.courseName == null) {
      this.courseNameData = window.localStorage.getItem('courseName')
      this.getCourseStudentData()
      this.getCoursesData(this.courseNameData)
    } else {
      this.courseNameData = this.$route.params.courseName
      window.localStorage.setItem('courseName', this.courseNameData)
      this.getCourseStudentData()
      this.getCoursesData(this.courseNameData)
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
        this.courseStudentData = response.data.data
      })
    },
    getCoursesData (courseNameData) {
      axios({
        method: 'get',
        url: 'codeword/getCourseList',
        headers: {
          token: window.localStorage.getItem('token')
        }
      }).then(response => {
        this.coursesData = response.data.data
        console.log('coursenamedate' + this.coursesData)
        for (var index = 0; index < this.coursesData.length; index++) {
          console.log('i' + index)
          if (this.coursesData[index].courseNameKey === courseNameData) {
            this.courseData = this.coursesData[index]
            console.log(this.courseData.PostSurveyURL + 'test')
          }
        }
        console.log(this.coursesData.length + this.coursesData[0].PostSurveyURL)
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
