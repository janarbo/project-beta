from django.urls import path

from .views import api_list_technicians, api_list_appointments, api_show_appointment, api_list_automobiles, api_show_technician

urlpatterns = [
    path("technicians/<int:pk>/", api_show_technician, name="api_show_technician"),
    path("technicians/", api_list_technicians, name="api_list_technicians"),
    path("appointments/", api_list_appointments, name="api_list_appointments"),
    path("appointments/<int:pk>/", api_show_appointment,
         name="api_show_appointment"),
    path("automobiles/", api_list_automobiles, name="api_list_automobiles"),
]
