# Generated by Django 5.0.1 on 2024-06-19 15:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0005_alter_quotation_items'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.TextField(blank=True, null=True),
        ),
    ]
