from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager 

def get_profile_image_filepath(self, filename):
    return f'profile_images/{self.pk}/{'profile_image.png'}'

def get_default_profile_image():
    return 'assets/user.png'

#Custom User Model 
class CustomUserManager(BaseUserManager):
    def _create_user(self, email, password, first_name, last_name, mobile, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError('Password is not provided')

        user = self.model(
            email = self.normalize_email(email),
            first_name = first_name,
            last_name = last_name,
            mobile = mobile,
            **extra_fields
        )

        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, first_name, last_name, mobile, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',False)
        return self._create_user(email, password, first_name, last_name, mobile, password, **extra_fields)

    def create_superuser(self, email, password, first_name, last_name, mobile, **extra_fields):
        extra_fields.setdefault('is_staff',True)
        extra_fields.setdefault('is_active',True)
        extra_fields.setdefault('is_superuser',True)
        return self._create_user(email, password, first_name, last_name, mobile, **extra_fields)

# Create your User Model here.
class User(AbstractBaseUser,PermissionsMixin):
    # Abstractbaseuser has password, last_login, is_active by default

    email = models.EmailField(db_index=True, unique=True, max_length=254)
    first_name = models.CharField(max_length=240)
    last_name = models.CharField(max_length=255)
    profile_imagee = models.ImageField(upload_to=get_profile_image_filepath, null=True, blank=True, default=get_default_profile_image, )
    mobile = models.CharField(max_length=50)
   
    

    is_staff = models.BooleanField(default=True) # must needed, otherwise you won't be able to loginto django-admin.
    is_active = models.BooleanField(default=True) # must needed, otherwise you won't be able to loginto django-admin.
    is_superuser = models.BooleanField(default=False) # this field we inherit from PermissionsMixin.

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['first_name','last_name','mobile']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'
        



## categories model----------------------------------------------------------------------------
class Category(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False )
    icon = models.ImageField(upload_to='icons/', null=True, blank=True, default='/icons/icon.png')

    _id = models.AutoField(primary_key=True, editable=False)

    class Meta:
        verbose_name_plural = 'categories'
 
    def __str__(self):
        return self.name
    

## Engineers model-------------------------------------------------------------------------------
class Profession(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='engineers/', null=True, blank=True, default='/engineers/placeholder.png')
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    nid = models.CharField(max_length=12, null=True, blank=True)
    verification = models.BooleanField(default=False)
    certificate_ID = models.CharField(max_length=20, null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    createdAt = models.DateTimeField(auto_now_add = True )

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

## products and supplies model------------------------------------------------------------------
class Product(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='products/', null=True, blank=True, default='/products/placeholder.png')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    quantity = models.IntegerField(default=0,null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    brand = models.CharField(max_length=200, null=True, blank=False )
    createdAt = models.DateTimeField(auto_now_add = True )
    isUploaded = models.BooleanField(default=False)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name


## services models-----------------------------------------------------------------------------------------
class Service(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='services/', null=True, blank=True, default='/services/placeholder.png')
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True )
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True )
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
    
## Review/rating model-----------------------------------------------------------------------------------
class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)
    

## Order model-----------------------------------------------------------------------------------------
class Order(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=False, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.DateTimeField(
        auto_now_add=False, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.createdAt)

## orderItem model-----------------------------------------------------------------------------------------
class OrderItem(models.Model):
    product = models.ForeignKey(Product, on_delete=models.SET_NULL, null=True)
    order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.name)

## shippingAddress models-----------------------------------------------------------------------------------------
class ShippingAddress(models.Model):
    order = models.OneToOneField(
        Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.address)
    