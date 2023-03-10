from django.db import models
from django.urls import reverse

# Create your models here.
class SalesPerson(models.Model):
    name = models.CharField(max_length=200)
    number = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"

    def get_api_url(self):
        return reverse("api_show_sales_person", kwargs={"id": self.id})

class Customer(models.Model):
    name = models.CharField(max_length=200)
    address = models.CharField(max_length=100)
    phone = models.CharField(max_length=50)

    def __str__(self):
        return f"{self.name}"

    def get_api_url(self):
        return reverse("api_show_customer", kwargs={"id": self.id})

class AutomobileVO(models.Model):
    import_href = models.CharField(max_length=200, unique=True)
    vin = models.CharField(max_length=17, unique=True)
    sold = models.BooleanField(default=False)

    # def __str__(self):
    #     return f"{self.vin}"

class SalesRecord(models.Model):
    price = models.CharField(max_length=100)
    automobile = models.ForeignKey(
        AutomobileVO,
        related_name="sales_record",
        on_delete=models.CASCADE,
    )
    sales_person = models.ForeignKey(
        SalesPerson,
        related_name="sales_record",
        on_delete=models.CASCADE,
    )
    customer = models.ForeignKey(
        Customer,
        related_name="sales_record",
        on_delete=models.CASCADE,
    )


    def get_api_url(self):
        return reverse("api_show_sales", kwargs={"id":self.id})
