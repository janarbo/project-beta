from django.shortcuts import render
from common.json import ModelEncoder
# Create your views here.
from .models import SalesPerson, Customer, AutomobileVO, SalesRecord
from django.views.decorators.http import require_http_methods
from django.http import JsonResponse
import json


class SalesPersonEncoder(ModelEncoder):
    model = SalesPerson
    properties = [
        "name",
        "number",
        "id",
    ]

class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "name",
        "address",
        "phone",
        "id",
    ]

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "import_href",
        "vin",
        "sold",
        "id",
    ]

class SalesRecordEncoder(ModelEncoder):
    model = SalesRecord
    properties = [
        "sale_person",
        "customer",
        "price",
        "automobile",
        "id",
    ]
    encoders = {
        "sale_person": SalesPersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVOEncoder(),
    }

@require_http_methods(["GET, POST"])
def api_list_sales_person(request):
    if request.method == "GET":
        sales_person = SalesPerson.objects.all()
        return JsonResponse(
            {"sales_person": sales_person},
            encoder=SalesPersonEncoder
        )
    else:
        try:
            content = json.loads(request.body)
            sales_person = SalesPerson.objects.create(**content)
            return JsonResponse(
                sales_person,
                encoder=SalesPersonEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Can't create Sales Person"}
                status=400,
            )

@require_http_methods(["GET", "DELETE"])
def api_show_sales_person(request, id):
    if request.method == "GET":
        sales_person = SalesPerson.objects.get(id=id)
        return JsonResponse(
            sales_person,
            encoder=SalesPersonEncoder,
            safe=False,
        )
    else:
        count, _ = SalesPerson.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})



@require_http_methods(["GET, POST"])
def api_list_customer(request):
    if request.method == "GET":
        customer = Customer.ojbects.all()
        return JsonResponse(
            {"customer": customer},
            encoder=CustomerEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            customer = Customer.objects.create(**content)
            return JsonResponse(
                customer,
                encoder=CustomerEncoder,
                safe=False,
            )
        except:
            return JsonResponse(
                {"message": "Can't create customer"},
                status=400,
            )

@require_http_methods(["GET", "DELETE"])
def api_show_customer(request, id):
    if request.method == "GET":
        customer = Customer.objects.get(id=id)
        return JsonResponse(
            customer,
            encoder=CustomerEncoder,
            safe=False,
        )
    else:
        count, _ = Customer.objects.filter(id=id).delete()
        return JsonResponse({"deleted": count > 0})

@require_http_methods(["GET, POST"])
def api_list_sales(request):
    if request.method == "GET":
        sales = SalesRecord.objects.get()
        return JsonResponse(
            sales,
            encoder=SalesRecordEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            # maybe vin?
            automobile = AutomobileVO.objects.get(id=content["automobile"])
            if automobile.sold == True:
                return JsonResponse(
                    {"message": "Car is already sold"},
                    status=400,
                )
            else:
                content["automobile"] = automobile

                customer = Customer.objects.get(id=content["customer"])
                content["customer"] = customer

                sales_person = SalesPerson.objects.get(id=content["sales_person"])
                content["sales_person"] = sales_person

                sales = SalesRecord.objects.create(**content)
                return JsonResponse(
                    sales,
                    encoder=SalesRecordEncoder,
                    safe=False
                )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                "message": "Sales could not been made",
                status=400,
            )

@require_http_methods (["GET", "DELETE"])
def api_show_sales(request, id):
    if request.method == "GET":
        try:
            sales = SalesRecord.objects.get(id=id)
            return JsonResponse(
                sales,
                encoder=SalesRecordEncoder,
                safe=False,
            )
        except SalesRecord.DoesNotExist:
            return JsonResponse(
                {"message": "No sales available"}
                status=400
            )
    else:
        count, _ = SalesRecord.objects.filter(id=id).delete()
        return JsonResponse(
            {"deleted": count > 0},
        )
