# Generated by Django 5.0.1 on 2024-06-20 07:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0011_delete_loggedin_transaction_receipt_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='profession',
            name='isActive',
        ),
    ]
