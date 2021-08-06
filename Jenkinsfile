pipeline {
      agent any
      environment {
       CURRENT_BUILD_NO = 0                              //can be used in whole pipeline
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
                        sh '''#!/bin/bash
                              echo "===Deploy To Staging Env==="
                        '''
                        script {
                               def buildName = Jenkins.instance.getItemByFullName('Shopping_Site')
                               echo "Last build: ${buildName.getLastBuild().number}"
                        }
                        sh '''#!/bin/bash
                              echo "===Deploy To Staging Env ${buildName}==="
                        '''
                  }
            }
            stage('Deploy Production') {
                  steps {
                        echo "=== Deploying in Production Area ==="
                  }
            }
      }
}