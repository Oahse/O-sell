const ProductsData = [
    {
      id: 'd0b9f24a-cd6a-4cfc-82f2-d8d18f13c6e1',
      name: 'Smartphone XYZ Pro',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 999.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3901/3901630.png',
      description: 'The latest XYZ Pro smartphone with high-resolution camera and long battery life.',
      files: [
        { name: 'User Manual', desc: 'Complete user guide', date: '2024-01-01', url: 'https://example.com/user-manual.pdf' }
      ],
      createdat: '2024-01-01',
      updatedat: '2024-01-01',
      deletedat: null,
      deleted: false,
      businessid: 'business123',
      address: '123 Tech Street, New York City, NY 10001, USA',
      location: { lat: 40.7128, long: -74.0060 },
    },
    {
      id: 'eae7a065-013c-4b4f-8e89-1046a4b5688d',
      name: '4K Ultra HD TV',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 799.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/4584/4584261.png',
      description: 'Experience the best in home entertainment with this 4K Ultra HD TV.',
      files: [
        { name: 'Product Brochure', desc: 'Detailed product specifications', date: '2024-01-10', url: 'https://example.com/product-brochure.pdf' }
      ],
      createdat: '2024-01-10',
      updatedat: '2024-01-10',
      deletedat: null,
      deleted: false,
      businessid: 'business124',
      address: '456 Home Avenue, Los Angeles, CA 90001, USA',
      location: { lat: 34.0522, long: -118.2437 },
    },
    {
      id: 'b5f47f08-d1c1-4a56-b3de-9d3f51d5ebd3',
      name: 'Cordless Drill Kit',
      category: { name: 'Tools', icon: 'https://cdn-icons-png.flaticon.com/512/3796/3796484.png' },
      price: 129.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3108/3108921.png',
      description: 'A versatile cordless drill kit for all your DIY and professional needs.',
      files: [
        { name: 'Drill Kit Instructions', desc: 'Instructions for using the drill kit', date: '2024-02-01', url: 'https://example.com/drill-kit-instructions.pdf' }
      ],
      createdat: '2024-02-01',
      updatedat: '2024-02-01',
      deletedat: null,
      deleted: false,
      businessid: 'business125',
      address: '789 Construction Road, Guadalajara, Jalisco 44100, Mexico',
      location: { lat: 20.6597, long: -103.3496 },
    },
    {
      id: 'cdd83215-3347-49a5-b591-08a01c1d519f',
      name: 'Espresso Machine',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 349.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/1547/1547947.png',
      description: 'Make your favorite espresso drinks at home with this high-quality espresso machine.',
      files: [
        { name: 'Maintenance Guide', desc: 'How to maintain the espresso machine', date: '2024-03-01', url: 'https://example.com/maintenance-guide.pdf' }
      ],
      createdat: '2024-03-01',
      updatedat: '2024-03-01',
      deletedat: null,
      deleted: false,
      businessid: 'business126',
      address: '101 Coffee Lane, Paris, Île-de-France 75001, France',
      location: { lat: 48.8566, long: 2.3522 },
    },
    {
      id: '1d4a1f67-56a8-4b8b-908b-4b8b8f0edbbf',
      name: 'Portable Air Conditioner',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 249.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/4050/4050630.png',
      description: 'Keep your room cool and comfortable with this efficient portable air conditioner.',
      files: [
        { name: 'Installation Instructions', desc: 'How to install the air conditioner', date: '2024-04-01', url: 'https://example.com/installation-instructions.pdf' }
      ],
      createdat: '2024-04-01',
      updatedat: '2024-04-01',
      deletedat: null,
      deleted: false,
      businessid: 'business127',
      address: '202 Cool Street, Accra, Greater Accra Region, Ghana',
      location: { lat: 5.6037, long: -0.1870 },
    },
    {
      id: '8d8b9e2f-342f-4c3a-91fd-b9b2b2cfa3b1',
      name: 'Noise-Canceling Headphones',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 199.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3807/3807977.png',
      description: 'Immerse yourself in your music with these top-of-the-line noise-canceling headphones.',
      files: [
        { name: 'Product Specifications', desc: 'Detailed specifications of the headphones', date: '2024-05-01', url: 'https://example.com/product-specifications.pdf' }
      ],
      createdat: '2024-05-01',
      updatedat: '2024-05-01',
      deletedat: null,
      deleted: false,
      businessid: 'business128',
      address: '303 Audio Avenue, Rome, Lazio 00100, Italy',
      location: { lat: 41.9028, long: 12.4964 },
    },
    {
      id: 'a7b5c8f7-fb91-4d1d-b7cf-c54dc5b786a3',
      name: 'Electric Toothbrush',
      category: { name: 'Health', icon: 'https://cdn-icons-png.flaticon.com/512/2245/2245680.png' },
      price: 89.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2280/2280778.png',
      description: 'Achieve a superior clean with this advanced electric toothbrush.',
      files: [
        { name: 'User Guide', desc: 'Instructions for use and care', date: '2024-05-15', url: 'https://example.com/electric-toothbrush-guide.pdf' }
      ],
      createdat: '2024-05-15',
      updatedat: '2024-05-15',
      deletedat: null,
      deleted: false,
      businessid: 'business129',
      address: '404 Dental Drive, Seattle, WA 98101, USA',
      location: { lat: 47.6062, long: -122.3321 },
    },
    {
      id: 'c6b5c6f5-36b5-4b73-80f2-f5b0a3b6ef91',
      name: 'Gaming Laptop',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 1499.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2545/2545960.png',
      description: 'A high-performance gaming laptop for the ultimate gaming experience.',
      files: [
        { name: 'Gaming Laptop Specs', desc: 'Detailed specifications for the gaming laptop', date: '2024-06-01', url: 'https://example.com/gaming-laptop-specs.pdf' }
      ],
      createdat: '2024-06-01',
      updatedat: '2024-06-01',
      deletedat: null,
      deleted: false,
      businessid: 'business130',
      address: '505 Tech Plaza, San Francisco, CA 94102, USA',
      location: { lat: 37.7749, long: -122.4194 },
    },
    {
      id: 'd7b8d6e4-aec2-4d4c-8bce-c65aeb7f6e24',
      name: 'Smartwatch Series 7',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 399.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3384/3384897.png',
      description: 'Stay connected and track your fitness with this advanced smartwatch.',
      files: [
        { name: 'User Manual', desc: 'Guide for setup and usage', date: '2024-07-01', url: 'https://example.com/smartwatch-series-7-manual.pdf' }
      ],
      createdat: '2024-07-01',
      updatedat: '2024-07-01',
      deletedat: null,
      deleted: false,
      businessid: 'business131',
      address: '606 Watch Lane, London, England SW1A 1AA, UK',
      location: { lat: 51.5074, long: -0.1278 },
    },
    {
      id: 'f1a2b9c4-87c7-4a9f-b042-6f0c5e4d1f25',
      name: 'Bluetooth Speaker',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 79.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3072/3072842.png',
      description: 'Portable Bluetooth speaker with exceptional sound quality.',
      files: [
        { name: 'Product Manual', desc: 'How to use and troubleshoot', date: '2024-08-01', url: 'https://example.com/bluetooth-speaker-manual.pdf' }
      ],
      createdat: '2024-08-01',
      updatedat: '2024-08-01',
      deletedat: null,
      deleted: false,
      businessid: 'business132',
      address: '707 Audio Blvd, Sydney, NSW 2000, Australia',
      location: { lat: -33.8688, long: 151.2093 },
    },
    {
      id: '9e9b07b0-8902-4bfa-9f7d-b8d3b348c5ea',
      name: 'Air Fryer',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 129.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2126/2126890.png',
      description: 'Cook your favorite meals with less oil using this efficient air fryer.',
      files: [
        { name: 'Recipe Book', desc: 'Delicious recipes for your air fryer', date: '2024-08-15', url: 'https://example.com/air-fryer-recipe-book.pdf' }
      ],
      createdat: '2024-08-15',
      updatedat: '2024-08-15',
      deletedat: null,
      deleted: false,
      businessid: 'business133',
      address: '808 Cook Street, New Delhi, Delhi 110001, India',
      location: { lat: 28.6139, long: 77.2090 },
    },
    {
      id: 'af3d91de-88b5-41a6-9a65-5f9fa60fa0cb',
      name: 'Digital Camera',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 649.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2810/2810688.png',
      description: 'Capture stunning photos with this high-resolution digital camera.',
      files: [
        { name: 'Camera Manual', desc: 'User manual for the digital camera', date: '2024-09-01', url: 'https://example.com/digital-camera-manual.pdf' }
      ],
      createdat: '2024-09-01',
      updatedat: '2024-09-01',
      deletedat: null,
      deleted: false,
      businessid: 'business134',
      address: '909 Shutter Street, Tokyo, Tokyo 100-0001, Japan',
      location: { lat: 35.6895, long: 139.6917 },
    },
    {
      id: 'bcd12345-6789-4a9b-a4b1-3d6f5b2e0f21',
      name: 'Smart Thermostat',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 249.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2894/2894064.png',
      description: 'Control your home temperature efficiently with this smart thermostat.',
      files: [
        { name: 'Installation Guide', desc: 'How to install and configure the thermostat', date: '2024-09-15', url: 'https://example.com/smart-thermostat-installation-guide.pdf' }
      ],
      createdat: '2024-09-15',
      updatedat: '2024-09-15',
      deletedat: null,
      deleted: false,
      businessid: 'business135',
      address: '1010 Temperature Lane, Toronto, ON M5A 1A1, Canada',
      location: { lat: 43.6510, long: -79.3470 },
    },
    {
      id: 'cd7b33f5-66ab-46a8-979b-3ed4f62e9f35',
      name: 'Electric Kettle',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 49.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3828/3828857.png',
      description: 'Quickly boil water with this efficient electric kettle.',
      files: [
        { name: 'Product Information', desc: 'Details about the electric kettle', date: '2024-10-01', url: 'https://example.com/electric-kettle-info.pdf' }
      ],
      createdat: '2024-10-01',
      updatedat: '2024-10-01',
      deletedat: null,
      deleted: false,
      businessid: 'business136',
      address: '1111 Boil Street, Berlin, Germany 10115',
      location: { lat: 52.5200, long: 13.4050 },
    },
    {
      id: 'abcd1234-5678-90ef-gh12-3456789ijkl',
      name: 'Gaming Mouse',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 59.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/2536/2536988.png',
      description: 'Precision gaming mouse with customizable buttons and RGB lighting.',
      files: [
        { name: 'User Manual', desc: 'Guide for setting up and using the gaming mouse', date: '2024-10-15', url: 'https://example.com/gaming-mouse-manual.pdf' }
      ],
      createdat: '2024-10-15',
      updatedat: '2024-10-15',
      deletedat: null,
      deleted: false,
      businessid: 'business137',
      address: '1212 Gaming Avenue, Seoul, South Korea 04545',
      location: { lat: 37.5665, long: 126.9780 },
    },
    {
      id: 'ef2d6f3c-9b1e-4f4f-a2b5-7f52b30da4c5',
      name: 'Smart Light Bulbs',
      category: { name: 'Home', icon: 'https://cdn-icons-png.flaticon.com/512/5777/5777230.png' },
      price: 39.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/5778/5778608.png',
      description: 'Change the ambiance of your home with these smart light bulbs.',
      files: [
        { name: 'Installation Instructions', desc: 'How to install and use the smart light bulbs', date: '2024-11-01', url: 'https://example.com/smart-light-bulbs-installation.pdf' }
      ],
      createdat: '2024-11-01',
      updatedat: '2024-11-01',
      deletedat: null,
      deleted: false,
      businessid: 'business138',
      address: '1313 Light Street, Amsterdam, North Holland 1012 AB, Netherlands',
      location: { lat: 52.3676, long: 4.9041 },
    },
    {
      id: 'ef3d7a7b-3a4b-4d62-a5f0-6f4d7a6d3a6b',
      name: 'Fitness Tracker',
      category: { name: 'Health', icon: 'https://cdn-icons-png.flaticon.com/512/2245/2245680.png' },
      price: 89.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/724/724469.png',
      description: 'Track your fitness goals and monitor your health with this advanced fitness tracker.',
      files: [
        { name: 'User Guide', desc: 'Guide for setting up and using the fitness tracker', date: '2024-12-01', url: 'https://example.com/fitness-tracker-guide.pdf' }
      ],
      createdat: '2024-12-01',
      updatedat: '2024-12-01',
      deletedat: null,
      deleted: false,
      businessid: 'business139',
      address: '1414 Fit Street, Buenos Aires, Buenos Aires 1001, Argentina',
      location: { lat: -34.6037, long: -58.3816 },
    },
    {
      id: 'b4b8e01a-f62e-4a27-b94d-4d8a2a4e56b4',
      name: 'Electric Grill',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 199.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3796/3796397.png',
      description: 'Grill your favorite foods indoors with this easy-to-use electric grill.',
      files: [
        { name: 'Grill Recipe Book', desc: 'Delicious recipes for your electric grill', date: '2024-12-15', url: 'https://example.com/electric-grill-recipe-book.pdf' }
      ],
      createdat: '2024-12-15',
      updatedat: '2024-12-15',
      deletedat: null,
      deleted: false,
      businessid: 'business140',
      address: '1515 Grill Avenue, Cape Town, Western Cape 8001, South Africa',
      location: { lat: -33.9249, long: 18.4241 },
    },
    {
      id: 'a1d2e3f4-5678-90ab-cdef-1234567890ab',
      name: 'Wireless Router',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 69.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3850/3850783.png',
      description: 'Stay connected with this high-speed wireless router.',
      files: [
        { name: 'Router Setup Guide', desc: 'Instructions for setting up the router', date: '2024-12-30', url: 'https://example.com/router-setup-guide.pdf' }
      ],
      createdat: '2024-12-30',
      updatedat: '2024-12-30',
      deletedat: null,
      deleted: false,
      businessid: 'business141',
      address: '1616 Network Lane, Singapore 179802',
      location: { lat: 1.2903, long: 103.8519 },
    },
    {
      id: 'c3d5e6f7-8a9b-4d0e-9c2d-3d4f5e6f7a8b',
      name: 'Tablet PC',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 499.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/4177/4177834.png',
      description: 'A versatile tablet for work and play with a high-resolution display.',
      files: [
        { name: 'User Guide', desc: 'How to use the tablet and explore its features', date: '2025-01-01', url: 'https://example.com/tablet-pc-user-guide.pdf' }
      ],
      createdat: '2025-01-01',
      updatedat: '2025-01-01',
      deletedat: null,
      deleted: false,
      businessid: 'business142',
      address: '1717 Digital Avenue, Beijing, Beijing 100000, China',
      location: { lat: 39.9042, long: 116.4074 },
    },
    {
      id: '12345678-9abc-def0-1234-56789abcdef0',
      name: 'Corded Phone',
      category: { name: 'Electronics', icon: 'https://cdn-icons-png.flaticon.com/512/3779/3779728.png' },
      price: 29.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/1847/1847245.png',
      description: 'A reliable corded phone with a classic design.',
      files: [
        { name: 'User Manual', desc: 'Instructions for using the corded phone', date: '2025-02-01', url: 'https://example.com/corded-phone-manual.pdf' }
      ],
      createdat: '2025-02-01',
      updatedat: '2025-02-01',
      deletedat: null,
      deleted: false,
      businessid: 'business143',
      address: '1818 Call Street, Hong Kong 999077',
      location: { lat: 22.3193, long: 114.1694 },
    },
    {
      id: 'ab1c2d3e-4f5a-6b7c-8d9e-f0a1b2c3d4e5',
      name: 'Digital Thermometer',
      category: { name: 'Health', icon: 'https://cdn-icons-png.flaticon.com/512/2245/2245680.png' },
      price: 19.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/4405/4405770.png',
      description: 'Accurate and easy-to-use digital thermometer for home health monitoring.',
      files: [
        { name: 'Usage Instructions', desc: 'How to use and care for the digital thermometer', date: '2025-03-01', url: 'https://example.com/digital-thermometer-instructions.pdf' }
      ],
      createdat: '2025-03-01',
      updatedat: '2025-03-01',
      deletedat: null,
      deleted: false,
      businessid: 'business144',
      address: '1919 Health Road, Cairo, Cairo Governorate 11511, Egypt',
      location: { lat: 30.0444, long: 31.2357 },
    },
    {
      id: 'bc1a2d3f-4e5b-6c7d-8e9f-0a1b2c3d4e5f',
      name: 'Stand Mixer',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 299.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/4155/4155086.png',
      description: 'Professional stand mixer for all your baking needs.',
      files: [
        { name: 'User Guide', desc: 'Guide for setting up and using the stand mixer', date: '2025-04-01', url: 'https://example.com/stand-mixer-user-guide.pdf' }
      ],
      createdat: '2025-04-01',
      updatedat: '2025-04-01',
      deletedat: null,
      deleted: false,
      businessid: 'business145',
      address: '2020 Mixer Street, Vienna, Vienna 1010, Austria',
      location: { lat: 48.2082, long: 16.3738 },
    },
    {
      id: 'efb8c2d3-4f5a-6b7c-8d9e-f0a1b2c3d4e5f',
      name: 'Electric Oven',
      category: { name: 'Appliances', icon: 'https://cdn-icons-png.flaticon.com/512/5461/5461608.png' },
      price: 499.99,
      currency: 'USD',
      image: 'https://cdn-icons-png.flaticon.com/512/3796/3796294.png',
      description: 'Versatile electric oven for baking, roasting, and more.',
      files: [
        { name: 'Instruction Manual', desc: 'How to use and maintain the electric oven', date: '2025-05-01', url: 'https://example.com/electric-oven-manual.pdf' }
      ],
      createdat: '2025-05-01',
      updatedat: '2025-05-01',
      deletedat: null,
      deleted: false,
      businessid: 'business146',
      address: '2121 Oven Avenue, Los Angeles, CA 90001, USA',
      location: { lat: 34.0522, long: -118.2437 },
    },
  ];
  
export default ProductsData;