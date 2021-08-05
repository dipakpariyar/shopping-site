pipeline {
      agent any
      stages {
            stage('Init') {
                  steps {
                        echo '==== Installing all the dependecies ===='
                        node --version
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