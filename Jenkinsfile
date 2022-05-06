pipeline{
   agent any
   stages {
        stage('Build/Deploy app to staging') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'staging', 
                transfers: [
                    sshTransfer(cleanRemote: false, 
                    excludes: '', 
                    execCommand: 'echo "Replace me by your build/install scripts"', 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: 'tests', 
                    remoteDirectorySDF: false,
                    removePrefix: '', 
                    sourceFiles: '**/*')], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true)])
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