pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        GITHUB_CREDENTIALS = credentials('github-credentials')
        VERCEL_TOKEN = credentials('vercel-token')
        DOCKER_PATH = '/usr/local/bin/docker' 
    }
    stages {
        stage('Print Environment') {
            steps {
                script {
                    sh 'echo $PATH'
                }
            }
        }
        stage('Test Docker') {
            steps {
                script {
                    sh "${DOCKER_PATH} --version"
                }
            }
        }
        stage('Checkout') {
            steps {
                git credentialsId: 'github-credentials', url: 'https://github.com/ilyasbrahim/V-Card.git', branch: 'main'
            }
        }
        stage('Build') {
            steps {
                script {
                    dockerImage = sh(script: "${DOCKER_PATH} build -t gitlen/v-card .", returnStdout: true).trim()
                }
            }
        }
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add any test commands here
            }
        }
        stage('Push') {
            steps {
                script {
                    withEnv(["PATH+DOCKER=${env.DOCKER_PATH}"]) {
                        docker.withRegistry('', 'dockerhub-credentials') {
                            sh "${DOCKER_PATH} login -u gitlen -p ${DOCKERHUB_CREDENTIALS_PSW} https://index.docker.io/v1/"
                            sh "${DOCKER_PATH} push gitlen/v-card:latest"
                        }
                    }
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    withEnv(["VERCEL_TOKEN=${env.VERCEL_TOKEN}"]) {
                        sh 'vercel --prod --token $VERCEL_TOKEN'
                    }
                }
            }
        }
    }
}
