# Generated by Django 4.0.3 on 2023-03-08 02:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_automobilevo_color_automobilevo_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='technician',
            name='employee_number',
            field=models.PositiveIntegerField(unique=True),
        ),
    ]