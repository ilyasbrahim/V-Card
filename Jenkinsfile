pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-credentials')
        GITHUB_CREDENTIALS = credentials('github-credentials')
        VERCEL_TOKEN = credentials('vercel-token')
        DOCKER_PATH = '/usr/local/bin/docker'
        VERCEL_PROJECT_NAME = 'v-card' // Ensure this is a valid project name
    }
    stages {
        stage('Print Environment') {
            steps {
                script {
                    sh 'echo $PATH'
                    sh 'env'
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
        stage('Unit Test') {
            steps {
                echo 'Running tests...'
                script {
                    sh 'npm install'
                    sh 'npm test'
                }
                
            }
        }
        stage('Deploy') {
            steps {
                script {
                    withCredentials([string(credentialsId: 'vercel-token', variable: 'VERCEL_TOKEN')]) {
                        withEnv(["PATH=/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin", "VERCEL_PROJECT_NAME=${env.VERCEL_PROJECT_NAME}"]) {
                            sh 'vercel --prod --yes --token $VERCEL_TOKEN --name $VERCEL_PROJECT_NAME --cwd $WORKSPACE'
                        }
                    }
                }
            }
        }
    }
}
