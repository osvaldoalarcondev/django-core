from django.urls import path
import views

urlpatterns = [
    path('', views.index, name='index'),
    path('json/', views.json, name='json'),
]
