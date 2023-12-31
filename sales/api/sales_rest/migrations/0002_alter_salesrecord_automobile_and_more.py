# Generated by Django 4.0.3 on 2023-03-08 06:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='automobile',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='automobile', to='sales_rest.automobilevo'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customer', to='sales_rest.customer'),
        ),
        migrations.AlterField(
            model_name='salesrecord',
            name='sales_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='salesperson', to='sales_rest.salesperson'),
        ),
    ]
