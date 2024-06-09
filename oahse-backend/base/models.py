import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager 
CURRENCIES = [("USD","USD"),("EUR","EUR"),("NGN","NGN"),("GBP","GBP"),
           ("PHP","PHP"),("KES","KES"),("TZS","TZS"),("UGX","UGX"),("RWF","RWF"),("BIF","BIF"),
           ]
DATETIMEFORMAT = '%Y-%m-%d %H:%M:%S'

def get_profile_image_filepath(self, filename):
    return f'profile_images/{self.pk}/{'profile_image.png'}'

def get_default_profile_image():
    return 'user.png'

def parsedatetoint(datefield):
    return int(datefield.strftime(DATETIMEFORMAT))

class Profession(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200, null=True, blank=False )
    isActive = models.BooleanField(default=True)
    createdAt = models.CharField(max_length=200, null=True, blank=False )
    updatedAt = models.CharField(max_length=200, null=True, blank=False )
    regulations = models.JSONField(null=True, blank=True)
    

    def __str__(self):
        return self.title
    
# Custom User Manager
class CustomUserManager(BaseUserManager):
    def _create_user(self, email, password, nin, address, phonenumber, **extra_fields):
        if not email:
            raise ValueError("Email must be provided")
        if not password:
            raise ValueError("Password is not provided")

        email = self.normalize_email(email)
        user = self.model(email=email, nin=nin, address=address, phonenumber=phonenumber, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password, first_name, last_name, nin, address, phonenumber, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('first_name', first_name)
        extra_fields.setdefault('last_name', last_name)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)
    
    def create_tradeperson(self, email, password, nin, address, phonenumber, professionname, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_tradeperson', True)
        extra_fields.setdefault('professionname', professionname)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)
    
    def create_business(self, email, password, nin, address, phonenumber, businessname, websiteurl, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_business', True)
        extra_fields.setdefault('businessname', businessname)
        extra_fields.setdefault('websiteurl', websiteurl)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)
    
    def create_distributor(self, email, password, nin, address, phonenumber, distributorname, businessname,websiteurl, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_distributor', True)
        extra_fields.setdefault('distributorname',distributorname)
        extra_fields.setdefault('businessname', businessname)
        extra_fields.setdefault('websiteurl', websiteurl)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)
    
    def create_deliverer(self, email, password, nin, address, phonenumber, deliverername,websiteurl, **extra_fields):
        extra_fields.setdefault('is_staff', False)
        extra_fields.setdefault('is_active', False)
        extra_fields.setdefault('is_superuser', False)
        extra_fields.setdefault('is_deliverer', True)
        extra_fields.setdefault('deliverername', deliverername)
        extra_fields.setdefault('websiteurl', websiteurl)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)

    def create_superuser(self, email, password, nin, address, phonenumber, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_active', True)
        extra_fields.setdefault('is_superuser', True)
        return self._create_user(email, password, nin, address, phonenumber, **extra_fields)

# Create your User Model here.
class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=100, null=True, blank=True)
    first_name = models.CharField(max_length=240)
    last_name = models.CharField(max_length=255)
    email = models.EmailField(db_index=True, unique=True, max_length=254)
    phonenumber = models.CharField(max_length=20, null=True, blank=True)
    nin = models.CharField(max_length=20, null=True, blank=True)
    passport = models.CharField(max_length=20, null=True, blank=True)
    image = models.TextField(null=True, blank=True)
    address = models.UUIDField(null=True, blank=True)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    verified = models.BooleanField(default=False)
    verifiedAt = models.CharField(max_length=200, null=True, blank=True)
    avgratings = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)

    is_tradeperson = models.BooleanField(default=False)
    professiontitle = models.CharField(max_length=200, null=True, blank=False )
    regulations = models.JSONField(null=True, blank=True)

    is_business = models.BooleanField(default=False)
    businessname = models.CharField(max_length=200, null=True, blank=False)
    cac = models.CharField(max_length=200, null=True, blank=True)
    websiteurl = models.CharField(max_length=200, null=True, blank=True)

    is_distributor = models.BooleanField(default=False)
    distributorname = models.CharField(max_length=200, null=True, blank=False)

    is_deliverer = models.BooleanField(default=False)
    deliverername = models.CharField(max_length=200, null=True, blank=False)

    date_joined = models.CharField(max_length=200, null=True, blank=True)
    updatedAt = models.CharField(max_length=200, null=True, blank=False )
    last_login = models.CharField(max_length=200, null=True, blank=True)
    last_login_location = models.JSONField(null=True, blank=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['nin', 'address', 'phonenumber']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'       

    def __str__(self):
        return self.email


## Address models-----------------------------------------------------------------------------------------
class Address(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    houseNumber = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    state = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    latitude = models.FloatField(null=True, blank=True)
    longitude = models.FloatField(null=True, blank=True)

    def __str__(self):
        return {
            "id": self.id,
            "houseNumber": self.houseNumber,
            "city": self.city,
            "state": self.state,
            "postalCode": self.postalCode,
            "country": self.country,
            "latitude": self.latitude,
            "longitude": self.longitude,
        }

## Review/rating model-----------------------------------------------------------------------------------
class Review(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.CharField(max_length=200, null=True, blank=False )
    body = models.TextField(null=True, blank=True)
    userid = models.CharField(max_length=200, null=True, blank=False )
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    status = models.BooleanField(default=False)##like or dislike
    productid = models.CharField(max_length=200, null=True, blank=False )
    delivererid = models.CharField(max_length=200, null=True, blank=False )
    distributorid = models.CharField(max_length=200, null=True, blank=False )
    rating = models.IntegerField(null=True, blank=True, default=0)
    createdAt = models.CharField(max_length=200, null=True, blank=False )

    def __str__(self):
        return {'id':self.id, 'title':self.title, 'body':self.body, 'userid':self.userid, 'files':self.files, 'status':self.status, 'productid':self.productid, 'delivererid':self.delivererid, 'distributorid':self.distributorid, 'rating':self.rating, 'createdAt':self.createdAt}
class Comments(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    body = models.TextField(null=True, blank=True)
    userid = models.CharField(max_length=200, null=True, blank=False )
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    reviewid = models.CharField(max_length=200, null=True, blank=False )
    createdAt = models.CharField(max_length=200, null=True, blank=False )
    
class Job(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, null=True, blank=False )
    ownerid = models.CharField(max_length=200, null=True, blank=False )
    description = models.TextField(null=True, blank=True)
    url_link = models.CharField(max_length=200, null=True, blank=False )
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    difficulty = models.IntegerField(null=True, blank=True, default=1)
    requiredProfession = models.ForeignKey(Profession, on_delete=models.SET_NULL, null=True)
    deleted = models.BooleanField(default=False)
    createdAt = models.CharField(max_length=200, null=True, blank=False )
    endDate = models.CharField(max_length=200, null=True, blank=False )
    updatedAt = models.CharField(max_length=200, null=True, blank=False )
    started = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    completeddate = models.CharField(max_length=200, null=True, blank=False )
    completedby = models.CharField(max_length=200, null=True, blank=False )
    address = models.CharField(max_length=200, null=True, blank=False )
    location = models.JSONField(null=True, blank=True)

    @property
    def duration(self):
        return parsedatetoint(self.endDate) - parsedatetoint(self.createdAt)

## services models-----------------------------------------------------------------------------------------
class Service(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    jobid = models.CharField(max_length=200, null=True, blank=False )
    tradepersonid = models.CharField(max_length=200, null=True, blank=False )
    accepted = models.BooleanField(default=False)
    started = models.BooleanField(default=False)
    starteddate = models.CharField(max_length=200, null=True, blank=False )
    inprogress = models.BooleanField(default=False)
    completed = models.BooleanField(default=False)
    completeddate = models.CharField(max_length=200, null=True, blank=False )
    description = models.TextField(null=True, blank=True)
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    reviewid = models.CharField(max_length=200, null=True, blank=False )
    createdAt = models.CharField(max_length=200, null=True, blank=False )
    location = models.JSONField(null=True, blank=True)#{lat,long}
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True )
    price = models.DecimalField(max_digits=1000000000, decimal_places=2, null=True, blank=True )
    

    def __str__(self):
        return self.id+'  '+self.price
    
## Order model-----------------------------------------------------------------------------------------
class Order(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userid = models.CharField(max_length=200, null=True, blank=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.CharField(max_length=200, null=True, blank=True)
    isDelivered = models.BooleanField(default=False)
    deliveredAt = models.CharField(max_length=200, null=True, blank=True)
    deliveredBy = models.CharField(max_length=200, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.createdAt)

## orderItem model-----------------------------------------------------------------------------------------
class OrderItem(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    productid = models.CharField(max_length=200, null=True, blank=True)
    orderid = models.CharField(max_length=200, null=True, blank=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    userid = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    createdAt = models.CharField(max_length=200, null=True, blank=True)

    def __str__(self):
        return str(self.name)

## categories model----------------------------------------------------------------------------
class Category(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, null=True, blank=False )
    icon = models.TextField(null=True, blank=True)

    class Meta:
        verbose_name_plural = 'categories'
 
    def __str__(self):
        return self.name
     
class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    currency = models.CharField(choices=CURRENCIES,max_length=200, null=True, blank=True)
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    createdat = models.CharField(max_length=200, null=True, blank=True)
    updatedat = models.CharField(max_length=200, null=True, blank=True)
    deletedat = models.CharField(max_length=200, null=True, blank=True)
    deleted = models.BooleanField(default=False)
    category = models.ForeignKey(Category, on_delete=models.SET_NULL, null=True)
    businessid = models.CharField(max_length=200, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    location = models.JSONField(null=True, blank=True)#{lat,long}

class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    senderid = models.CharField(max_length=200, null=True, blank=True)
    receiverid = models.CharField(max_length=200, null=True, blank=True)
    editable = models.BooleanField(default=False)
    deletable = models.BooleanField(default=False)
    deletedat = models.CharField(max_length=200, null=True, blank=True)
    read = models.BooleanField(default=False)
    body = models.TextField(null=True, blank=True)
    files = models.JSONField(null=True, blank=True)#{name, desc, date, url}
    createdat = models.CharField(max_length=200, null=True, blank=True)
class DeliveryTracker(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    userid = models.CharField(max_length=200, null=True, blank=True)
    sent = models.BooleanField(default=False)
    listofstats = models.JSONField(null=True, blank=True)
    prevstats = models.JSONField(null=True, blank=True)
    currentstat = models.JSONField(null=True, blank=True)
    received=models.BooleanField(default=False)
    receivedby = models.CharField(max_length=200, null=True, blank=True)
    receivedbyimage = models.TextField(null=True, blank=True)
    receivedbysignatureornin = models.TextField(null=True, blank=True)
    receivedbysignatureorninverified = models.BooleanField(default=False)
    receivedat = models.CharField(max_length=200, null=True, blank=True)
    createdat = models.CharField(max_length=200, null=True, blank=True)
    updatedat = models.CharField(max_length=200, null=True, blank=True)
    deliveryaddress = models.CharField(max_length=200, null=True, blank=True)
class LoggedIn(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    ownerid = models.CharField(max_length=200, null=True, blank=True)##user|tradeperson|business|dleiverer|distributor
    last_login_location = models.JSONField(null=True, blank=True)#{lat,long}
    last_login_time = models.CharField(max_length=200, null=True, blank=True)
class Transaction(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    reason = models.CharField(max_length=200, null=True, blank=True)
    orderid = models.CharField(max_length=200, null=True, blank=True)
    orderamount = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    totalamount = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    serviceid = models.CharField(max_length=200, null=True, blank=True)
    payeeid = models.CharField(max_length=200, null=True, blank=True)  
    
    currency = models.CharField(choices=CURRENCIES,max_length=200, null=True, blank=True)
    payerid = models.CharField(max_length=200, null=True, blank=True)
    payeebank = models.CharField(max_length=200, null=True, blank=True)
    payerbank = models.CharField(max_length=200, null=True, blank=True)
    transaction_fees = models.DecimalField(
        max_digits=1000000000, decimal_places=2, null=True, blank=True)
    walletid = models.CharField(max_length=200, null=True, blank=True)
    stat = [("success","success"),("failed","failed"),("pending","pending")]
    status = models.CharField(choices=stat,max_length=200, null=True, blank=True)
    receivername = models.CharField(max_length=200, null=True, blank=True) 
    sendername = models.CharField(max_length=200, null=True, blank=True)
    debit = models.BooleanField(default=False)
    last_login_location = models.JSONField(null=True, blank=True)#{lat,long}
    createdAt = models.CharField(max_length=200, null=True, blank=True)
