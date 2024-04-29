from django.db import models
from django.contrib.auth.models import User 

# Create your models here.



## categories model----------------------------------------------------------------------------
class Category(models.Model):
    name = models.CharField(max_length=200, null=True, blank=False )
    icon = models.ImageField(upload_to='icons/', null=True, blank=True, default='/icons/icon.png')

    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name
    

## Engineers model-------------------------------------------------------------------------------
class Profession(models.Model):
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=False )
    image = models.ImageField(upload_to='engineers/', null=True, blank=True, default='/engineers/placeholder.png')
    about = models.CharField(max_length=500, null=True, blank=True )
    description = models.TextField(null=True, blank=True)
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
    