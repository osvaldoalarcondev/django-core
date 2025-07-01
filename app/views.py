import json
from django.http import JsonResponse
from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def json(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        message = data.get("message", "")

        # Llama a FastAPI
        r = requests.post("http://localhost:8001/route_intent/", json={"text": message})
        json_response = r.json()

        return JsonResponse({
            'response': json_response['response'],
            'intent': json_response['intent'],
            'confidence': json_response['confidence']
        })
