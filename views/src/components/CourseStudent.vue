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
    <tr>
      <th scope="row">{{ CourseNameKey }}</th>
      <td>{{ EmailKey }}</td>
      <td>{{ Name }}</td>
      <td>{{ Codeword }}</td>
      <td>{{ Acknowledged }} </td>
    </tr>

  </tbody>
</table>
</div>    
</template>
<script>
    /* $ */
    export default {
      name: 'CourseStudent',
      data () {
        return {
          courseNameData: ''
        }
      },
      created () {
        console.log(this.$route.params.courseName + 'params')
        if (this.$route.params.courseName == null) {
          this.courseNameData = window.localStorage.getItem('courseName')
        } else {
          this.courseNameData = this.$route.params.courseName
          window.localStorage.setItem('courseName', this.courseNameData)
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
