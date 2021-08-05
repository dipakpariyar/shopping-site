pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        sh '''#!/bin/bash
                              echo "hello world"
                              node --version
                              npm --version
                              yarn --version
                        '''
                  }
            }
            stage('Build') {
                  steps {
                        echo '=== Building Project ====='
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