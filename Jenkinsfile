pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        GITHUB_CREDENTIALS = credentials('github-credentials')
        VERCEL_TOKEN = credentials('vercel-token')
        DOCKER_PATH = '/usr/local/bin/docker'  // Specify the Docker path
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
        stage('Deploy') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                        withEnv(["PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin"]) {
                            sh 'vercel --prod --yes --token $VERCEL_TOKEN'
                        }
                    }
                }
            }
        }
    }
}
