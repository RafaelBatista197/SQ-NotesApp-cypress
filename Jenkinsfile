pipeline{
   agent any
    stages {
        stage('Build/Deploy app to staging') {
            steps {
                echo 'Building/Deploying app to staging'
            } 
        }
        stage('Run automated tests') { 
            steps {
                echo 'Running automated tests' 
            }
        }
        stage('Perform manual testing') {
            steps {
                timeout(activity: true, time: 5) { 
                    input 'Proceed to production?'
                }
            } 
        }
        stage('Release to production') {
            steps {
                echo 'Releasing to production'
            }
        } 
    }
}