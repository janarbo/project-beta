from django.shortcuts import render
from .models import Technician
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder


class TechnicianEncoder(ModelEncoder):
    model = Technician
    properties = [
        "id",
        "name",
        "employee_number",
    ]


# Create your views here.
@require_http_methods(["GET", "POST"])
def api_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianEncoder,
        )
    else:
        try:
            content = json.loads(request.body)
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianEncoder,
                safe=False,
            )
        except:
            response = JsonResponse(
                {"massage": "error"}
            )
            response.status_code = 400
            return response
