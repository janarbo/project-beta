from django.shortcuts import render
from .models import Technician, Appointment, AutomobileVO
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json
from common.json import ModelEncoder

class AutomobileVOEncoder():
    model = AutomobileVO
    properties = [
        "import_vin",
        "import_href",
        "color",
        "year",
    ]
class TechnicianDetailEncoder(ModelEncoder):
    model = Technician
    properties = [
        "name",
        "employee_number",
        "id",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "vin",
        "customer_name",
        "reason",
        "is_finished",
        "is_vip",
        "technician",
    ]
    encoders = {
        "automobile": AutomobileVOEncoder(),
        "technician": TechnicianDetailEncoder(),
    }
    def get_extra_data(self, o):
        if isinstance(o.date, str) and isinstance(o.time, str):
            return {
               "date": o.date,
               "time": o.time,
        }
        else:
            return {
            "date": o.date.isoformat(),
            "time": o.time.isoformat(),
        }

@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointments = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointments},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)

        try:
            technician_id = content["technician"]
            technician = Technician.objects.get(id=technician_id)
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid technician href"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )


@require_http_methods(["GET", "PUT", "DELETE"])
def api_show_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )
    if request.method == "DELETE":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.delete()
            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:
        content = json.loads(request.body)
        Appointment.objects.filter(id=pk).update(**content)
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False
        )


@require_http_methods(["GET", "POST"])
def api_list_technicians(request):
    if request.method == "GET":
        technicians = Technician.objects.all()
        return JsonResponse(
            {"technicians": technicians},
            encoder=TechnicianDetailEncoder,
        )
    else:
        content = json.loads(request.body)

        technician = Technician.objects.create(**content)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )


@require_http_methods(["GET", "POST", "DELETE"])
def api_show_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianDetailEncoder,
            safe=False,
        )
    elif request.method == "DELETE":  # DELETE
        try:
            technician = Technician.objects.get(id=pk)
            technician.delete()
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse({"message": "Does not exist"})
    else:  # PUT
        try:
            content = json.loads(request.body)
            technician = Technician.objects.get(id=pk)

            props = ["name"]
            for prop in props:
                if prop in content:
                    setattr(technician, prop, content[prop])
            technician.save()
            return JsonResponse(
                technician,
                encoder=TechnicianDetailEncoder,
                safe=False
            )
        except Technician.DoesNotExist:
            response = JsonResponse({"message": "Does not exist"})
            response.status_code = 404
            return response


@require_http_methods(["GET"])
def api_list_automobiles(request):
    if request.method == "GET":
        autos = AutomobileVO.objects.all()
        auto_list = []
        for auto in autos:
            values = {
                "import_href": auto.import_href,
                "import_vin": auto.import_vin,
                "color": auto.color,
                "year": auto.year,
            }
            auto_list.append(values)
        return JsonResponse({"autos": auto_list})


# class TechnicianDetailEncoder(ModelEncoder):
#     model = Technician
#     properties = [
#         "id",
#         "name",
#         "employee_number",
#     ]


# class AppointmentListEncoder(ModelEncoder):
#     model = Appointment
#     properties = [
#         "id",
#         "vin",
#         "customer_name",
#         "reason",
#         "is_finished",
#         "is_vip",
#     ]

#     def get_extra_data(self, o):
#         return {"technician": o.technician.name}


# class AppointmentDetailEncoder(ModelEncoder):
#     model = Appointment
#     properties = [
#         "vin",
#         "customer_name",
#         "reason",
#         "is_finished",
#         "is_vip",
#         "technician",
#     ]
#     encoders = {
#         "technician": TechnicianDetailEncoder
#     }
# # Create your views here.

# @require_http_methods(["GET", "POST"])
# def api_list_appointments(request):
#     if request.method == "GET":
#         appointments = Appointment.objects.all()
#         return JsonResponse(
#             {"appointments": appointments},
#             encoder=AppointmentListEncoder,
#         )
#     else:
#         content = json.loads(request.body)
#         try:
#             technician_id = content["technician"]
#             technician = Technician.objects.get(id=technician_id)
#             content["technician"] = technician
#         except Technician.DoesNotExist:
#             return JsonResponse(
#                 {"message": "Invalid technician"},
#                 status=400,
#             )

#         appointment = Appointment.objects.create(**content)
#         return JsonResponse(
#             appointment,
#             encoder=AppointmentDetailEncoder,
#             safe=False
#         )


# @require_http_methods(["GET", "DELETE"])
# def api_show_appointment(request, id):
#     if request.method == "GET":
#         appointment = Appointment.objects.get(id=id)
#         return JsonResponse(
#             appointment,
#             encoder=AppointmentDetailEncoder,
#             safe=False,
#         )
#     if request.method == "DELETE":
#         try:
#             appointment = Appointment.objects.get(id=id)
#             appointment.delete()
#             return JsonResponse(
#                 appointment,
#                 encoder=AppointmentDetailEncoder,
#                 safe=False,
#             )
#         except Appointment.DoesNotExist:
#             return JsonResponse({"message": "Invalid Appointment"})


# @require_http_methods(["GET", "POST"])
# def api_technicians(request):
#     if request.method == "GET":
#         technicians = Technician.objects.all()
#         return JsonResponse(
#             {"technicians": technicians},
#             encoder=TechnicianDetailEncoder,
#         )
#     else:
#         content = json.loads(request.body)
#         technician = Technician.objects.create(**content)
#         return JsonResponse(
#             technician,
#             encoder=TechnicianDetailEncoder,
#             safe=False,
#         )


# @require_http_methods(["GET", "PUT", "DELETE"])
# def api_show_technician(request, id):
#     if request.method == "GET":
#         technician = Technician.objects.get(id=id)
#         return JsonResponse(
#             technician,
#             encoder=TechnicianDetailEncoder,
#             safe=False,
#         )

# @require_http_methods(["GET"])
# def api_list_automobiles(request):
#     if request.method == "GET":
#         autos = AutomobileVO.objects.all()
#         auto_list = []
#         for auto in autos:
#             values = {
#                 "import_vin": auto.import_vin,
#             }
#             auto_list.append(values)
#         return JsonResponse({"autos": auto_list})
