from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_protect
from django import forms
from .forms import NuevoIngreso
from .forms import EstudianteRegular

@csrf_protect
def index(request):
    
    # if request.method == 'GET':
    #     return render(request,'matricula/index.html')
         
    if request.method == 'POST':
        # return HttpResponse("Hello, world!")
        
        form = EstudianteRegular(request.POST)
        
        if form.is_valid():
            print("YESS!!")
        else:
            print("Noo!!")
        
        # if form.is_valid():
        #     return HttpResponse("Hello, world!")
        # else:
        #     return HttpResponse("Error!")

    return render(request,'matricula/index.html')
