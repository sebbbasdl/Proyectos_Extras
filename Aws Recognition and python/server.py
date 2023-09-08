import os
import base64
from flask import Flask, request, jsonify
import boto3


# Configura las credenciales directamente
aws_access_key_id = 'AKIAULIXOKZQSAEBFB6P'
aws_secret_access_key = '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'
region = 'us-east-1'

app = Flask(__name__)
rekognition = boto3.client('rekognition', region_name=region, aws_access_key_id=aws_access_key_id, aws_secret_access_key=aws_secret_access_key)

@app.route('/tarea3-201906085', methods=['POST'])
def analyze_image():
    try:
        data = request.json
        base64_image = data.get('imageBase64')

        if base64_image:
            image_bytes = base64.b64decode(base64_image)

            # Envia la imagen a Rekognition para análisis
            response = rekognition.detect_labels(Image={'Bytes': image_bytes})
            labels = [label['Name'] for label in response['Labels']]

            return jsonify({'labels': labels})

        else:
            return jsonify({'error': 'No se proporcionó una imagen base64 válida'}), 400

    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
