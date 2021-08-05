pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        script {
                              echo '==== Installing all the dependecies ===='
                              node --version
                              npm --version
                        }
                     
                  }
            }
            stage('Build') {
                  steps {
                        echo '=== Building Project ====='
                        yarn build
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