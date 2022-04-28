pipeline{
   agent any
   stages {
      stage('Build/Deploy app to staging') {
         steps {
            echo 'Building/Deploying app to staging'
} }
stage('Run automated tests') { steps {
echo 'Running automated tests' }
      }
      stage('Perform manual testing') {
         steps {
            echo 'Performing manual testing '
} }
      stage('Release to production') {
         steps {
echo 'Releasing to production' }
} }

}