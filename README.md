# Django-core

A Django-based front and backend core

## notes
- csfr toekn is a security method required in django frontend  managed by SETTINGS.MIDDLEWARE: 'django.middleware.security.SecurityMiddleware', but we need implement whits in main.js(sendMessage and cookie methods) and index.html
- we need to check the project's name at WSGI_APPLICATION, ROOT_URLCONF, wsgi.py, asgi.py and manage.py 
- we need to check the app's name at INSTALLED_APPS, apps.py
- we need to create apps.py per app, and _init.py to make the package re

## some packages (review requirements.txt)
- python 3.10 
- django==4.2.7 djangorestframework==3.14.0 
- transformers==4.44.2
- torch==2.3.0 torchvision ftfy regex tqdm → for CLIP implementation
- 
## Setup Instructions
1. python -m venv venv
2. .\venv\Scripts\Activate.ps1(powershell)
2. venv/Scripts/activate(cmd | powershell)
3. ensure youre in the correct interpreter (ctrl + shift + p in vs code)
    *note* : .env is already installed (pip install python-dotenv), fill it
4. from requirements.txt install libraries as need, keeping in ming compatible version(this core only contains .env dependency, is empty)
5. python manage.py collectstatic
6. python manage.py migrate
7. python manage.py makemigrations
8. python manage.py runserver 