pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        sh '''#!/bin/bash
                              echo "===Installing Dependencies==="
                              apt-get install build-essential
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
                        echo "=== Deploying in Staging Area ==="
                  }
            }
            stage('Deploy Production') {
                  steps {
                        echo "=== Deploying in Production Area ==="
                  }
            }
      }
}