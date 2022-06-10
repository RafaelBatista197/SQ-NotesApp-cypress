pipeline{
   agent any

   tools {nodejs "cypress"}

   parameters{
        string(name: 'SPEC', defaultValue:"**/*.{spec.js,feature,features}", description: "Enter the cypress script path that you want to execute")
        choice(name: 'BROWSER', choices:['electron'], description: "Select the browser to be used in your cypress tests")
    }

   stages {
        stage('Build/Deploy App to Staging') {
            parallel {
                stage('Staging server') {
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
                stage('Performance') {
                    steps {
                        echo "Performance"
                        //sh "/var/lib/jenkins/jmeter/apache-jmeter-5.4.3/bin/ ./jmeter -n -t '/var/lib/jenkins/workspace/notes-app pipeline/testplans/simple_test_notes_final.jmx'"
                        //sh "/var/lib/jenkins/jmeter/apache-jmeter-5.4.3/bin/ ./jmeter -n -t '/var/lib/jenkins/workspace/notes-app pipeline/testplans/test_final.jmx'"
                    }
                }
            }
        }
        stage('Run Automated Tests') {
            parallel {
                stage('End-to-End Tests') {
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
                stage('Static Analysis') {
                    environment {
                        SCANNER_HOME = tool 'SonarScanner'
                    }
                    
                    steps {
                        sh "$SCANNER_HOME/bin/sonar-scanner"
                    }
                }
            }
        }
        stage('Perform Manual Testing') {
            steps {
                timeout(activity: true, time: 5) { 
                    input 'Proceed to production?'
                }
            }
        }
        stage('Release to Production') {
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