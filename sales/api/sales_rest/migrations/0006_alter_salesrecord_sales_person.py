# Generated by Django 4.0.3 on 2023-03-08 18:59

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0005_alter_salesrecord_sales_person'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salesrecord',
            name='sales_person',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sales_person', to='sales_rest.salesperson'),
        ),
    ]
