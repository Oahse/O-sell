from dataclasses import fields
from rest_framework import serializers
from django.contrib.auth import get_user_model
from .utils import Util
from .models import Address, User, Profession, Product, About

def authenticate(email=None, password=None, **kwargs):
    try:
        user = User.objects.get(email=email)
        print(user.password)
        
        if user.verify_password(password):
            
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

    class Meta:
        model = User
        fields = '__all__'

    def create(self, validated_data):
        is_business = validated_data.pop('is_business', False)
        is_tradeperson = validated_data.pop('is_tradeperson', False)
        is_distributor = validated_data.pop('is_distributor', False)
        is_deliverer = validated_data.pop('is_deliverer', False)
        is_superuser = validated_data.pop('is_superuser', False)
        businessname = validated_data.pop('businessname', None)
        professionname = validated_data.pop('professionname', None)
        distributorname = validated_data.pop('distributorname', None)
        deliverername = validated_data.pop('deliverername', None)
        cac = validated_data.pop('cac', None)
        websiteurl = validated_data.pop('websiteurl', None)
        email = validated_data.pop('email', None)
        password = validated_data.pop('password', None)
        nin = validated_data.pop('nin', None)
        address = validated_data.pop('address', None)
        phonenumber = validated_data.pop('phonenumber', None)
        
        if is_business:
            if not businessname or not cac or not websiteurl:
                raise serializers.ValidationError("Business name, CAC, and website URL are required for business users.")
            user = User.objects.create_business(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber, businessname=businessname,cac=cac, websiteurl=websiteurl, **validated_data)
        
        elif is_tradeperson:
            if not professionname:
                raise serializers.ValidationError("Profession Name is required for tradepersons.")
            user = User.objects.create_tradeperson(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber,professionname=professionname, **validated_data)
        
        elif is_distributor:
            if not distributorname:
                raise serializers.ValidationError("Distributor name is required for distributors.")
            user = User.objects.create_distributor(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber, distributorname=distributorname, businessname=businessname, websiteurl=websiteurl, **validated_data)
        
        elif is_deliverer:
            if not deliverername:
                raise serializers.ValidationError("Deliverer name is required for deliverers.")
            user = User.objects.create_deliverer(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber, deliverername = deliverername, cac=cac,websiteurl=websiteurl, **validated_data)
        
        elif is_superuser:
            user = User.objects.create_superuser(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber,**validated_data)
        else:
            user = User.objects.create_user(email=email, password=password, nin=nin, address=address, phonenumber=phonenumber,**validated_data)
        
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        is_business = validated_data.get('is_business', instance.is_business)
        is_tradeperson = validated_data.get('is_tradeperson', instance.is_tradeperson)
        is_distributor = validated_data.get('is_distributor', instance.is_distributor)
        is_deliverer = validated_data.get('is_deliverer', instance.is_deliverer)
        businessname = validated_data.get('businessname', instance.businessname)
        professionname = validated_data.get('professionname', instance.professionname)
        distributorname = validated_data.get('distributorname', instance.distributorname)
        deliverername = validated_data.get('deliverername', instance.deliverername)
        cac = validated_data.get('cac', instance.cac)
        websiteurl = validated_data.get('websiteurl', instance.websiteurl)

        if is_business:
            if not businessname or not cac or not websiteurl:
                raise serializers.ValidationError("Business name, CAC, and website URL are required for business users.")
            instance.businessname = businessname
            instance.cac = cac
            instance.websiteurl = websiteurl
        
        elif is_tradeperson:
            if not professionname:
                raise serializers.ValidationError("Profession title is required for tradepersons.")
            instance.professionname = professionname
        
        elif is_distributor:
            if not distributorname:
                raise serializers.ValidationError("Distributor name is required for distributors.")
            instance.distributorname = distributorname
            instance.websiteurl = websiteurl
        
        elif is_deliverer:
            if not deliverername:
                raise serializers.ValidationError("Deliverer name is required for deliverers.")
            instance.deliverername = deliverername
            instance.cac = cac
            instance.websiteurl = websiteurl
        
        for attr, value in validated_data.items():
            setattr(instance, attr, value)

        if password:
            instance.password = Util.hash_password(password)

        instance.save()
        return instance

class BusinessSerializer(UserSerializer):
    """
    Serializer for business.
    """
    class Meta:
        model = UserSerializer.Meta.model
        fields = ('id',"phonenumber",'image', 'email','address','is_active','verified','verifiedAt','avgratings','is_business','businessname','cac',"websiteurl",'date_joined','updatedAt','last_login','last_login_location')

class DistributorSerializer(UserSerializer):
    """
    Serializer for distributor.
    """
    class Meta:
        model = UserSerializer.Meta.model
        fields = ('id',"phonenumber",'image', 'email','address','is_active','verified','verifiedAt','avgratings','is_distributor','distributorname','businessname',"websiteurl",'date_joined','updatedAt','last_login','last_login_location')

class TradePersonSerializer(UserSerializer):
    """
    Serializer for tradeperson.
    """
    class Meta:
        model = UserSerializer.Meta.model
        fields = ('id',"title", 'first_name',"last_name","phonenumber",'nin',"passport",'image', 'email','address','is_active','verified','verifiedAt','avgratings','is_tradeperson','professionname','regulations','date_joined','updatedAt','last_login','last_login_location')

class DelivererSerializer(UserSerializer):
    """
    Serializer for deliverer.
    """
    class Meta:
        model = UserSerializer.Meta.model
        fields = ('id',"phonenumber",'image', 'email','address','is_active','verified','verifiedAt','avgratings','is_deliverer','deliverername','cac',"websiteurl",'date_joined','updatedAt','last_login','last_login_location')

class UserLoginSerializer(serializers.Serializer):
    """
    Serializer for user login.
    """
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        #print(email, password,"++++++++++++++++++++++++",self.context.get('request'))

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

#about 
class AboutSerializer(serializers.ModelSerializer):
    """
    Serializer for About model.
    """
    class Meta:
        model = About
        fields = [
            'id', 'company_name', 'story', 'logo', 'phonenumber', 'emailone',
            'emailtwo', 'emailthree', 'address', 'mission', 'values',
            'achievements', 'created_date', 'updated_date', 'branches',
            'policies', 'socials', 'account_details'
        ]
