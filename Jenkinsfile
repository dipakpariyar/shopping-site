pipeline {
      agent any
      environment {
       CURRENT_BUILD_NO = 10                               //can be used in whole pipeline
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
                              echo $CURRENT_BUILD_NO
                             yarn build
                        '''
                  }
            }
            stage('Deploy Staging') {
                  steps {
                        build job: 'Deploy_To_Staging_Env'
                  }
            }
            stage('Deploy Production') {
                  steps {
                        echo "=== Deploying in Production Area ==="
                  }
            }
      }
}