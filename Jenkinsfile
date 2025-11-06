pipeline{
    agent any
    stages{

        stage('Parando los servicios'){
            steps{
                sh '''
                 docker compose -p adj-demo down
                '''
            }
        }
        stage('Borrando archivos antiguos'){
            steps{
                sh '''
                    IMAGES=$(docker images --filter "label=com.docker.compose.project=adj-demo" -q)
                    if [ -n "$IMAGES" ]; then
                        docker images rmi $IMAGES
                    else
                        echo "No images to remove"
                    fi
                '''
            }
        }
        stage('Actualizando....'){
            steps{
                checkout scm
            }
            
        }
        stage('Construyendo y desplegando '){
            steps{
                sh '''
                 docker compose up --build -d
                '''
            }
            
        }

    }
    
    post{
        success{
            echo "Pipeline ejecutado correctamente"

        }
        failure{
            echo "Ha ocurrido un error en la ejecución del pipeline"

        }
        always{
            echo "Pipeline finalizado"

        }

    }
}