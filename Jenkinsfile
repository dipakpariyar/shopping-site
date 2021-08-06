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
                        sh '''#!/bin/bash
                              echo "===Deploy To Staging Env==="
                        '''
                        script {
                                env.CURRENT_BUILD_NO = Jenkins.instance.getItemByFullName('Shopping_Site').getLastBuild().number
                                echo "Last build Id: ${emv.CURRENT_BUILD_NO}"
                                
                              sh '''#!/bin/bash
                              echo $CURRENT_BUILD_NO
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