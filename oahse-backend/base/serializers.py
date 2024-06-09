from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth import get_user_model

from .models import Address, User, Profession, Product

def authenticate(email=None, password=None, **kwargs):
    try:
        user = User.objects.get(email=email)
        print(user,'=====   ',user.check_password(password))
        if user.check_password(password):
            
            return user
    except User.DoesNotExist:
        return None

class ProfessionSerializer(serializers.ModelSerializer):
    """
    Serializer for the Profession model.
    """
    class Meta:
        model = Profession
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user


class UserLoginSerializer(serializers.Serializer):
    """
    Serializer for user login.
    """
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        print(email, password,"++++++++++++++++++++++++",self.context.get('request'))

        if email and password:
            user = authenticate(email=email, password=password)
            print(user)
            if not user:
                raise serializers.ValidationError('Unable to login with provided credentials.')
        else:
            raise serializers.ValidationError('Must include "email" and "password".')
        attrs['user'] = user
        return attrs

class ProductSerializer(serializers.ModelSerializer):
    """
    Serializer for the Product model.
    """
    class Meta:
        model = Product
        fields = '__all__'

###Address Serializers---------------------

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'
