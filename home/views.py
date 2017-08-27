from django.shortcuts import render


def home(request):
    """Redirects to the home page"""
    return render(request, 'home/home.html', {'site_area': 'home'})
