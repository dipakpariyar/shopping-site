pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        script {
                              sh  echo '==== Installing all the dependecies ===='
                              sh node --version
                              sh npm --version
                        }
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