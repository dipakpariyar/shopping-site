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
                              echo $CURRENT_BUILD_NO
                              yarn build
                              echo $BUILD_NUMBER
                              CURRENT_BUILD_NO=$BUILD_NUMBER
                        '''
                  }
            }
            stage('Deploy Staging') {
                  steps {
                        sh '''#!/bin/bash
                              echo "===Deploy To Staging Env==="
                              echo $CURRENT_BUILD_NO
                              yarn build
                             
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