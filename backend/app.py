from flask import Flask
import bcrypt

from flask import Flask, request, jsonify
from app import db

app = Flask(__name__)

# def registerUser(username, email, password, role)
db = SQLAlchemy(app)  # Initialize SQLAlchemy here
bcrypt = Bcrypt(app)
CORS(app)

from models import User

@app.route("/")
def hello_world():
    return "<p>Hello, World!</p>"

@app.route('/landingPage', methods=['GET', 'POST'])
def landing_page():
    return "<p>This is the landing page</p>"

@app.route('/login', methods=['GET', 'POST'])
def login():
    data = {username: "admin", password:"password"} #request.json  # assuming JSON data is sent from Next.js
    username = data.get('username')
    password = data.get('password')
    if username == 'admin' and password == 'password':  # example validation
        return jsonify({"message": "Login successful"}), 200
    else:
        return jsonify({"message": "Invalid credentials"}), 401

@app.route('/registration', methods=['GET', 'POST'])
def register():
    data = request.json  # assuming JSON data is sent from Next.js
    username = data.get('username')
    password = data.get('password')
    
    # Check if user already exists
    existing_user = User.query.filter_by(username=username).first()
    if existing_user:
        return jsonify({"message": "User already exists"}), 400
    
    # Hash the password and store the user
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')
    new_user = User(username=username, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()
    
    return jsonify({"message": "User registered successfully"}), 201
