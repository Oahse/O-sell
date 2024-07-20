# Generated by Django 5.0.1 on 2024-06-10 22:14

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_alter_user_password'),
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
                ('company_name', models.CharField(max_length=200)),
                ('story', models.TextField(blank=True, null=True)),
                ('logo', models.TextField(blank=True, null=True)),
                ('phonenumberpre', models.CharField(max_length=15)),
                ('phonenumber', models.CharField(max_length=15)),
                ('emailone', models.EmailField(max_length=200)),
                ('emailtwo', models.EmailField(blank=True, max_length=200, null=True)),
                ('emailthree', models.EmailField(blank=True, max_length=200, null=True)),
                ('address', models.TextField(blank=True, null=True)),
                ('mission', models.TextField(blank=True, null=True)),
                ('values', models.TextField(blank=True, null=True)),
                ('achievements', models.JSONField(blank=True, null=True)),
                ('created_date', models.DateTimeField(auto_now_add=True)),
                ('updated_date', models.DateTimeField(auto_now=True)),
                ('branches', models.JSONField(blank=True, null=True)),
                ('policies', models.TextField(blank=True, null=True)),
                ('socials', models.JSONField(blank=True, null=True)),
                ('account_details', models.JSONField(blank=True, null=True)),
            ],
            options={
                'ordering': ['-created_date'],
            },
        ),
    ]