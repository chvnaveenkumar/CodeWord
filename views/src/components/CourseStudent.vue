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
     <div class="col-md-6 col-lg-6 col-xs-0 col-sm-0" style="text-align:left;font-weight:bold">
          <button><button class="btn" @click="deleteStudent(courseStudent.EmailKey)"><i class="fa fa-pencil fa-xs"></i></button></button>
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


    <tr v-for="courseStudent in drCaseStudentData" :key="courseStudent._id">
      <td scope="row">{{ courseStudent.EmailKey }}</td>
      <td>{{ courseStudent.Name }}</td>
      <td>{{ courseStudent.Acknowledged }} </td>
      <a><button class="btn" data-toggle="modal" @click="selectStudent(courseNameData,courseStudent.EmailKey, courseStudent.StudentName)" data-target="#editStudent"><i class="fa fa-pencil fa-xs"></i></button></a>
      <a><button class="btn" data-toggle="modal" @click="selectStudent(courseNameData, courseStudent.EmailKey, courseStudent.StudentName)" data-target="#deleteStudent"><i class="fa fa-trash fa-xs"></i></button></a>
    </tr>
    
    <tr v-for="courseStudent in courseStudentData" :key="courseStudent._id">
      <td scope="row">{{ courseStudent.EmailKey }}</td>
      <td>{{ courseStudent.StudentName }}</td>
      <td>{{ courseStudent.Acknowledged }} </td>
      <a><button class="btn" data-toggle="modal" @click="selectStudent(courseNameData,courseStudent.EmailKey, courseStudent.StudentName)" data-target="#editStudent"><i class="fa fa-pencil fa-xs"></i></button></a>
      <a><button class="btn" data-toggle="modal" @click="selectStudent(courseNameData, courseStudent.EmailKey, courseStudent.StudentName)" data-target="#deleteStudent"><i class="fa fa-trash fa-xs"></i></button></a>
    </tr>
  </tbody>
</table>
<!-- Modal Delete Student -->
<div class="modal fade" id="deleteStudent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Delete Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5> Course Name: {{selectCourseName}} </h5>
        <h6> Student Email:{{ selectEmailKey}} </h6>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primart" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" @click="deleteStudent(selectCourseName, selectEmailKey)">Delete Course</button>
      </div>
    </div>
  </div>
</div>
<!-- Modal Edit Student -->
<div class="modal fade" id="editStudent" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Edit Course</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <input type="text" v-model="studentName">
        <input type="text" v-model="selectEmailKey">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primart" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-danger" @click="editStudent(selectCourseName, selectEmailKey, selectStudent)">Edit Course</button>
      </div>
    </div>
  </div>
</div>
</div>    
</template>
<script>
import swal from 'sweetalert2'
/* global axios $ */
export default {
  name: 'CourseStudent',
  data () {
    return {
      courseNameData: '',
      courseStudentData: '',
      courseData: '',
      coursesData: '',
      drCaseStudentData: [],
      selectCourseName: '',
      selectEmailKey: '',
      studentName: '',
      selectedEmailKey: '',
      selectedStudentName: ''
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
        this.drCaseStudentData = response.data.drCaseData
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
    },
    selectStudent (courseName, emailKey, studentName) {
      this.selectCourseName = courseName
      this.selectEmailKey = emailKey
      this.studentName = studentName
      this.selectedEmailKey = emailKey
      this.selectedStudentName = studentName
    },
    deleteStudent (courseName, emailKey) {
      axios({
        method: 'post',
        url: 'codeword/deletecoursestudent',
        headers: {
          token: window.localStorage.getItem('token')
        },
        data: {
          CourseNameKey: courseName,
          EmailKey: emailKey
        }
      }).then(response => {
        if (response.data.message === 'Deleted Student Successfully!') {
          swal('Success', response.data.message, 'success')
          $('#deleteStudent').modal('hide')
          this.getCourseStudentData()
          this.getCoursesData(this.courseNameData)
        }
      })
    },
    editStudent (selectCourseName, selectEmailKey, selectStudent) {
      axios({
        method: 'post',
        url: 'codeword/updatecoursestudent',
        headers: {
          token: window.localStorage.getItem('token')
        },
        data: {
          CourseNameKey: selectCourseName,
          EmailKey: this.selectedEmailKey,
          StudentName: this.studentName,
          NewEmailKey: selectEmailKey,
          Newstudentkey: selectStudent
        }
      }).then(response => {
        if (response.data.message === true) {
          swal('Success', response.data.message, 'success')
          $('#editStudent').modal('hide')
          this.getCourseStudentData()
          this.getCoursesData(this.courseNameData)
        }
      })
    }
  }
}
</script>
