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
                              echo $CURRENT_BUILD_NO
                              yarn install
                        '''
                  }
            }
            stage('Build') {
                  steps {
                        sh '''#!/bin/bash
                              echo "===Building Dependencies==="
                              yarn build
                        '''
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
                                    pwd
                                    echo $stageOneWorkSpace
                                    echo ''' +CURRENT_BUILD_NO+ '''
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