pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        sh '''#!/bin/bash
                              echo "===Installing Dependencies==="
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
                       
                        script: {
                              def currentBuildNo = echo Jenkins.instance.getItem('Shopping_Site').lastSuccessfulBuild.number
                              echo "current shoping build no ${currentBuildNo}"
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