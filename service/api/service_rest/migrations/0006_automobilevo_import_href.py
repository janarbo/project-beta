# Generated by Django 4.0.3 on 2023-03-08 03:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0005_alter_technician_employee_number'),
    ]

    operations = [
        migrations.AddField(
            model_name='automobilevo',
            name='import_href',
            field=models.CharField(max_length=200, null=True, unique=True),
        ),
    ]
