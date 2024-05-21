pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/shopify.git'
            }
        }
        stage('Build') {
            steps {
                sh 'docker build -t shopify:latest .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm shopify:latest npm test'
            }
        }
        stage('Push') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker tag shopify:latest your-dockerhub-username/shopify:latest'
                    sh 'docker push your-dockerhub-username/shopify:latest'
                }
            }
        }
        stage('Deploy') {
            steps {
                kubernetesDeploy configs: 'kubernetes/deployment.yaml', kubeConfig: [path: 'path-to-kubeconfig']
            }
        }
    }
}
