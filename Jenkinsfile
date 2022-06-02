pipeline{
   agent any

   tools {nodejs "cypress"}

   parameters{
        string(name: 'SPEC', defaultValue:"**/*.{spec.js,feature,features}", description: "Enter the cypress script path that you want to execute")
        choice(name: 'BROWSER', choices:['electron'], description: "Select the browser to be used in your cypress tests")
    }

   stages {
        stage('Build/Deploy app to staging') {
            steps {
                sshPublisher(publishers: [sshPublisherDesc(configName: 'staging', 
                transfers: [
                    sshTransfer(cleanRemote: false, 
                    excludes: '', 
                    execCommand: '''sudo cp -R ~/project/app/* /var/www/html
                    rm -R ~/project/app/''', 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '', 
                    remoteDirectorySDF: false,
                    removePrefix: '', 
                    sourceFiles: 'app/**')], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true)])
            }
        }
        stage('Run automated tests') {
            steps {
                sh 'npm prune'
                sh 'npm cache clean --force'
                sh 'npm i'
                sh 'npm install --save-dev mochawesome mochawesome-merge mochawesome-report-generator'
                sh 'rm -f mochawesome.json'
                sh 'rm cypress/results/* || true'
                sh 'npx cypress run --headless --config baseUrl="http://34.140.43.143" --browser electron --spec ${SPEC} --reporter mochawesome'
                sh 'npx mochawesome-merge cypress/results/*.json -o mochawesome-report/mochawesome.json'
                sh 'npx marge mochawesome-report/mochawesome.json' 
            }
            post {
                success {
                    publishHTML (
                        target : [
                            allowMissing: false,
                            alwaysLinkToLastBuild: true,
                            keepAll: true,
                            reportDir: 'mochawesome-report',
                            reportFiles: 'mochawesome.html',
                            reportName: 'My Reports',
                            reportTitles: 'The Report'])

                }
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
                sshPublisher(publishers: [sshPublisherDesc(configName: 'production', 
                transfers: [
                    sshTransfer(cleanRemote: false, 
                    excludes: '', 
                    execCommand: '''sudo cp -R ~/project/app/* /var/www/html
                    rm -R ~/project/app/''', 
                    execTimeout: 120000, 
                    flatten: false, 
                    makeEmptyDirs: false, 
                    noDefaultExcludes: false, 
                    patternSeparator: '[, ]+', 
                    remoteDirectory: '', 
                    remoteDirectorySDF: false,
                    removePrefix: '', 
                    sourceFiles: 'app/**')], 
                usePromotionTimestamp: false, 
                useWorkspaceInPromotion: false, 
                verbose: true)])
            }
        }
    }

}