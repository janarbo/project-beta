from django.db import models
from django.urls import reverse
# Create your models here.
class Technician(models.Model):
    name = models.CharField(max_length=200)
    employee_number = models.CharField(max_length=200)

    def get_api_url(self):
        return reverse("api_technicians", kwargs={"pk": self.id})



class Appointment(models.Model):
    vin = models.CharField(max_length=200)
    vehicle_owner = models.CharField(max_length=200)
    date = models.DateTimeField(auto_now_add=True)
    technician = models.ForeignKey(
        Technician,
        related_name="appointments",
        on_delete=models.PROTECT
    )
    reason = models.CharField(max_length=1000)
    def get_api_url(self):
        return reverse("api_show_appointment", kwargs={"pk": self.pk})

    def __str__(self):
        return self.name

    class Meta:
        ordering = ("name",)  # Default ordering for Location
