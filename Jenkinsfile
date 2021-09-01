pipeline {
      agent any
      environment {
       lastBuildId = 0                              //can be used in whole pipeline
      }
      stages {
            stage('Init') {
                  steps {
                        sh '''#!/bin/bash
                              echo "===Installing Dependencies==="
                              yarn --version
                              npm --version
                        '''
                  }
            }
            stage('Build') {
                  steps {
                       build job: 'Shopping_Site'
                  }
            }
            stage('Deploy Staging') {
                  steps {
                        script {
                                def CURRENT_BUILD_NO = Jenkins.instance.getItemByFullName('Shopping_Site').getLastBuild().number
                                stageOneWorkSpace="/path/test1"
                                def stageTwoWorkSpace = "/path/test2"
                                echo "Last build Id last: ${CURRENT_BUILD_NO}"
                                sh '''
                                    echo ''' +CURRENT_BUILD_NO+ '''
                                    cd ../../jobs/Shopping_Site/builds/''' +CURRENT_BUILD_NO+ '''/archive
                                    chmod 777 -R ./*
                                    rsync -vrze  "ssh -p 22 -o StrictHostKeyChecking=no -i ~/ssh/aws_instance_key" ./* ubuntu@35.154.31.195:~/data/shopping-site/
                                   '''
                        }
                  }
            }
            stage('Deploy Production') {
                  steps {
                        echo "=== Deploying in Production Area ==="
                  }
            }
      }
}