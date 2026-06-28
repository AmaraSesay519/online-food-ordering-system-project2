# Welcome To Our Online Food Ordering System (Y.S.S.A.A)
## Team Members for this project
|No.| Name |Id| Role |
|----|------|-----|------|
|1| Amara Yaqub | 10519 | Developer of the Database,Backend Developer  and Documentation of the project |
|2| Saidu I Kamara|1655 | Backend Developer of Javascript pages|
|3| Yusif Koroma |10229| Developer of the php pages |
|4| Samuell E Moiwo  | 11249 |develop the  UI Designer |
|5| Abubakarr Forfanah  | 10510 | UI Designer and configuration of the project |

# Online Food Ordering System

A complete web-based food ordering system with responsive design,built with Django (backend & frontend) and SQLite database

## Project Overview

The **Online Food Ordering System** is a web-based application designed to allow users to browse food menus, register accounts, and simulate food ordering through an interactive web interface. The system demonstrates the core features of an online food ordering platform and provides different dashboards based on user roles.

The project was developed as part of a **Web Programming course project two ** and focuses on implementing frontend technologies such as **HTML, CSS, and the likes ** ** For the backend it facuses on implementing Django a frame in python  and SQlite for the database integration**.

## Features

- **User Authentication**: Register, login, logout functionality
- **Restaurant Browsing**: View all restaurants and filter by category
- **Menu Management**: Browse menu items with categories (Appetizers, Main Course, Desserts, Beverages, Snacks)
- **Shopping Cart**: Add, update, and remove items from cart
- **Order Placement**: Complete checkout with delivery details
- **Order Tracking**: View order history and track order status
- **User Profile**: Manage personal information and delivery address
- **Admin Panel**: Full Django admin interface for managing restaurants, menus, orders, and users

## Tech Stack

- **Backend**: Django 5.2.3
- **Frontend**: Django Templates with HTML/CSS 
- **Database**: SQLite (Django default)
- **Image Processing**: Pillow

## Installation & Setup

### Prerequisites

- Python 3.8 or higher
- pip (Python package manager)

### Step 1: Install Dependencies

```bash
pip install -r requirements.txt
```

### Step 2: Database Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Step 3: Create Superuser (Admin)

```bash
python manage.py createsuperuser
```

Follow the prompts to create an admin account.

### Step 4: Run Development Server

```bash
python manage.py runserver
```

The application will be available at: `http://127.0.0.1:8000/`

### Step 5: Access Admin Panel

Visit: `http://127.0.0.1:8000/admin/`

Login with the superuser credentials created in Step 3.

## Usage

### Adding Data via Admin Panel

1. Login to the admin panel at `/admin/`
2. Add restaurants with details (name, description, address, phone, image)
3. Add menu items for each restaurant (name, description, price, category, image)
4. Menu items can be marked as available/unavailable

### User Workflow

1. **Register**: Create a new account at `/register/`
2. **Login**: Login at `/login/`
3. **Browse Restaurants**: View all restaurants at `/restaurants/`
4. **View Menu**: Click on a restaurant to see its menu
5. **Add to Cart**: Select items and add to cart
6. **Checkout**: Provide delivery details and place order
7. **Track Orders**: View order history and status

## Project Structure

```
ONLINE FOOD ORDERING SYSTEM/
├── core/                          # Main application
│   ├── templates/core/           # HTML templates
│   │   ├── base.html            # Base template
│   │   ├── home.html            # Homepage
│   │   ├── restaurant_list.html # Restaurant listing
│   │   ├── restaurant_detail.html # Restaurant menu
│   │   ├── cart.html            # Shopping cart
│   │   ├── checkout.html        # Checkout page
│   │   ├── order_detail.html    # Order details
│   │   ├── order_history.html   # Order history
│   │   ├── login.html           # Login page
│   │   ├── register.html        # Registration page
│   │   └── profile.html         # User profile
│   ├── static/css/              # CSS files
│   │   └── style.css           # Main stylesheet
│   ├── models.py               # Database models
│   ├── views.py                # View functions
│   ├── urls.py                 # URL routing
│   └── admin.py                # Admin configuration
├── food_ordering_system/        # Project settings
│   ├── settings.py             # Django settings
│   ├── urls.py                 # Main URL configuration
│   └── wsgi.py                 # WSGI configuration
├── manage.py                    # Django management script
├── requirements.txt             # Python dependencies
└── README.md                    # This file
```
## Source Code Repository

The full source code for this project is available on GitHub:

**GitHub Repository:**
https://github.com/AmaraSesay519/online-food-ordering-system-project2.git

## Database Models

- **Customer**: User profile with phone and address
- **Restaurant**: Restaurant information and details
- **MenuItem**: Food items with categories and pricing
- **Cart**: Shopping cart for each user
- **CartItem**: Items in the cart
- **Order**: Customer orders with status tracking
- **OrderItem**: Items in each order

## Order Status Flow

1. **Pending**: Order just placed
2. **Confirmed**: Order confirmed by restaurant
3. **Preparing**: Food is being prepared
4. **Out for Delivery**: Order is on the way
5. **Delivered**: Order delivered successfully
6. **Cancelled**: Order cancelled

## Menu Categories

- Appetizer
- Main Course
- Dessert
- Beverage
- Snack

## Features in Detail

### Responsive Design
- Mobile-friendly interface
- Works on all screen sizes

### User Experience
- Clean and modern UI
- Intuitive navigation
- Flash messages for user feedback
- Form validation

### Security
- CSRF protection on all forms
- Password hashing
- Login required for ordering
- Secure admin panel

## Development

### Running Migrations

```bash
python manage.py makemigrations
python manage.py migrate
```

### Creating Superuser

```bash
python manage.py createsuperuser
```

### Collecting Static Files (Production)

```bash
python manage.py collectstatic
```

### Running Development Server

```bash
python manage.py runserver
```

## License

This project is open source and available for educational purposes.

## Support

For issues or questions, please check the Django documentation or create an issue in the project repository.
